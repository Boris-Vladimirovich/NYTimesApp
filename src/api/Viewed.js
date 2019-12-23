import Base from './Base.js';

class Viewed extends Base {
    getList(period = 1, params) {
        return this.apiClient.get({
            requestURL : `viewed/${period}.json`,
            params
        });
    }
}

export default Viewed;
