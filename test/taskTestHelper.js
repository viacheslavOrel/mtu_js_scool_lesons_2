const got = require('got');

module.exports = class TaskTestHelper {
    constructor(path) {
        this.path = path;
    }

    domein = 'localhost';
    port = '9090';

    get url() {
        return `http://${this.domein}:${this.port}${this.path}`;
    }

    async gotPost(request) {
        try {
            return await got.post(this.url, {
                json: request,
                responseType: 'json'
            });
        } catch (error) {
            return {
                status: error.response.statusCode,
                body: error.response.body
            };
        }
    }
}