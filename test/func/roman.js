const { assert } = require('chai');
const got = require('got');
const { positive, negative } = require('../fixtures/roman');

describe('Rout test/post. Positive', () => {
    positive.forEach(({ name, input, extend }) => {
        it(name, async () => {
            const { body } = await got.post('http://localhost:9090/api/tasks/roman', {
                json: {
                    input
                },
                responseType: 'json'
            });
            assert.strictEqual(body.result, extend, 'Error');
        })
    });
});

describe('Rout test/post. Negative', () => {
    negative.forEach(({ name, input, extend: { status, message } }) => {
        it(name, async () => {
            const {statusCode, resMessage} = await got.post('http://localhost:9090/api/tasks/roman', {
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
