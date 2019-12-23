/**
 * Core api class of connection to server
 */
import queryString from 'query-string';

export default class ApiClient {
    constructor({ apiUrl = '', prefix = '', apiKey = '', onConnectionError = () => {} } = {}) {
        if (!apiUrl) throw new Error('[apiUrl] required');

        this.apiUrl = apiUrl;
        this.prefix = prefix;
        this.apiKey = apiKey;
        this.onConnectionError = onConnectionError;

        const methods = [ 'get', 'post', 'put', 'patch', 'delete' ];

        methods.forEach(method => {
            this[method] = ({ requestURL, params = {}, payload = {} }) => {
                return this._request({ requestURL, method, params, payload });
            };
        });
    }

    static CONTENT_TYPES = {
        'JSON'                  : 'application/json; charset=utf-8',
        'X_WWW_FORM_URLENCODED' : 'application/x-www-form-urlencoded; charset=utf-8',
        'FORMDATA'              : 'multipart/form-data'
    }

    /**
     * Core request method
     */
    async _request({ requestURL, method, payload, params }) {
        const url     = this._getUrl(requestURL, params);
        const headers = this._getHeadersByMethod(method);
        const body    = this._getBodyByMethod(method, payload);
        const options = { method: method === 'postFile' || method === 'postMessage' ? 'post' : method, headers };

        if (method !== 'get') options.body = body;

        // You need to check connection before request
        // if (await appState.getConnectionStatus()) {
        const res = await this.fetch(url, options, 3);

        if (!res) throw new Error('Bad response');

        const json = await res.json();

        if (json.status !== 'OK') throw json;

        return { ...json };
    }

    /**
     * fetch with multiple attempts
     * @param {String} url      url
     * @param {Object} options  options of request
     * @param {Number} attempts attemps for 'Network requst failed' error
     */
    async fetch(url, options, attempts = 3) {
        // eslint-disable-next-line more/no-c-like-loops
        for (let i = 0; i < attempts; i++) {
            try {
                return await fetch(url, options);
            } catch (error) {
                if (
                    error
                    && error.name === 'TypeError'
                    && error.message === 'Network request failed'
                ) {
                    if (i === (attempts - 1)) {
                        this.onConnectionError(error);
                        throw error;
                    } else {
                        await this.delay(5000);
                    }
                } else {
                    throw error;
                }
            }
        }
    }

    /**
     * Pause for async flow
     * @param {Number} ms - delay milliseconds
     */
    async delay(ms = 100) {
        return new Promise(res => setTimeout(res, ms));
    }

    /**
     * Sets up token for further quiries
     * @param {String} authToken token retrieved from server
     */
    setAuthToken(authToken) {
        this.authToken = authToken;
    }

    /**
     * Sets up url prefix
     * @param {String} prefix url prefix
     */
    setPrefix(prefix = '') {
        this.prefix = prefix;
    }

    /**
     * Sets up callback for errors handling
     * @param {Function} handler callback for errors handling
     */
    setErrorHandler(handler) {
        this.onError = handler;
    }

    /**
     * Returns full url
     * @param {String} url url path
     * @returns {String}
     */
    _getUrl(url, params) {
        const query = Object.keys(params).length ? `&${queryString.stringify(params, { arrayFormat: 'comma' })}` : '';

        return `${this.apiUrl}/${this.prefix}/${url}?api-key=${this.apiKey}${query}`;
    }

    /**
     * Returns encoded body by method
     * @param {String} method http method
     * @param {*} payload     payload object
     * @returns {String}
     */
    _getBodyByMethod(method, payload) {
        return this._getBodyByContentType(this._getContentTypeByMethod(method), payload);
    }

    /**
     * Returns encoded body by content type
     * @param {String} contentType content type of body
     * @param {*} payload          payload object
     * @returns {String}
     */
    _getBodyByContentType(contentType, payload) {
        switch (contentType) {
            case ApiClient.CONTENT_TYPES.JSON:
                return JSON.stringify({ data: payload });
            case ApiClient.CONTENT_TYPES.FORMDATA:
                return this._getFormData(payload);
            default:
                return this._encodeQueryString(payload);
        }
    }

    _getFormData(payload) {
        if (payload.isMessage) return this._getMessageData(payload);
        const formData = new FormData();
        const file = {
            uri  : payload.path,
            type : payload.mime,
            name : payload.filename || 'file'
        };

        formData.append('file', file);

        return formData;
    }

    _getMessageData(payload) {
        const formData  = new FormData();
        const { message, file } = payload;

        formData.append('file', file);
        formData.append('message', message);

        return formData;
    }

    /**
     * Returns headers by method
     * @param {String} method http method
     * @returns {*}
     */
    _getHeadersByMethod(method) {
        return {
            'Content-Type'  : this._getContentTypeByMethod(method),
            'X-AuthToken'   : this.authToken,
            'Cache-Control' : 'no-cache'
        };
    }

    /**
     * Returns content type by method
     * @param {String} method http method
     * @returns {String}
     */
    _getContentTypeByMethod(method) {
        switch (method.toLowerCase()) {
            case 'get':
                return ApiClient.CONTENT_TYPES.X_WWW_FORM_URLENCODED;
            default:
                return ApiClient.CONTENT_TYPES.JSON;
        }
    }

    /**
     * Converts payload object to query string
     * @param {*} payload payload object
     */
    _encodeQueryString(payload) {
        return Object.keys(payload).map(key => `${key}=${payload[key]}`).join('&');
    }
}
