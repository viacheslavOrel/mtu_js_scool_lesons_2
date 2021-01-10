const { assert } = require('chai');
const got = require('got');
const { positive, negative } = require('../fixtures/brackets');

describe('Rout test/post. Positive', () => {
    positive.forEach(({ name, input, expected }) => {
        it(name, async () => {
            const { body } = await got.post('http://localhost:9090/api/tasks/brackets', {
                json: {
                    input
                },
                responseType: 'json'
            });
            assert.strictEqual(body.result, expected, 'Error');
        })
    });
});

describe('Rout test/post. Negative', () => {
    negative.forEach(({ name, input, extend: { status, message } }) => {
        it(name, async () => {
            const {statusCode, resMessage} = await got.post('http://localhost:9090/api/tasks/brackets', {
                json: {
                    input
                },
                responseType: 'json'
            });
            assert.equal(statusCode, status, `Expected ${status}`);
            assert.equal(resMessage, message, `Expected ${message}`);
        })
    })
})