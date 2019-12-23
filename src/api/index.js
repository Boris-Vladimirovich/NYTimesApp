import ApiClient        from './ApiClient';

import ViewedAPI        from './Viewed';

export default function apiConstruct({
    API_URL,
    API_PREFIX,
    API_KEY,
    onConnectionError = () => {}
}) {
    const api = new ApiClient({
        apiUrl : API_URL,
        prefix : API_PREFIX,
        apiKey : API_KEY,
        onConnectionError
    });

    return {
        apiClient : api,
        viewed    : new ViewedAPI({ apiClient: api })
    };
}
