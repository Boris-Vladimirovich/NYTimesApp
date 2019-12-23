export function decodeError(error) {
    switch (true) {
        case error?.fault?.detail?.errorcode === 'policies.ratelimit.QuotaViolation':
            return {
                title : 'Error',
                msg   : error?.fault?.faultstring
            };
        case error?.fault?.detail?.errorcode === 'oauth.v2.InvalidApiKey':
            return {
                title : 'Error',
                msg   : error?.fault?.faultstring
            };
        default:
            return {
                title : 'Error',
                msg   : 'Unknown error'
            };
    }
}
