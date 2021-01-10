const { assert } = require('chai');
const got = require('got');
const { positive, negative } = require('../fixtures/nexIndex');

describe('Rout test/post. Positive', () => {
    positive.forEach(({ name, nums, target, expected }) => {
        it(name, async () => {
            const { body } = await got.post('http://localhost:9090/api/tasks/nextIndex', {
                json: {
                    nums,
                    target
                },
                responseType: 'json'
            });
            assert.strictEqual(body.result, expected, 'Error');
        })
    });
});

describe('Rout test/post. Negative', () => {
    negative.forEach(({ name, nums, target, extend: { status, message } }) => {
        it(name, async () => {
            const {statusCode, resMessage} = await got.post('http://localhost:9090/api/tasks/nextIndex', {
                json: {
                    nums,
                    target
                },
                responseType: 'json'
            });
            assert.equal(statusCode, status, `Expected ${status}`);
            assert.equal(resMessage, message, `Expected ${message}`);
        })
    })
})
