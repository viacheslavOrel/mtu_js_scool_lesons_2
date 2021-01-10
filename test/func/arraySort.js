const { assert } = require('chai');
const got = require('got');
const { positive, negative } = require('../fixtures/arraySort');

describe('Rout test/post. Positive', () => {
    positive.forEach(({ name, arr1, arr2, expected }) => {
        it(name, async () => {
            const { body } = await got.post('http://localhost:9090/api/tasks/arraySort', {
                json: {
                    arr1,
                    arr2
                },
                responseType: 'json'
            });
            assert.deepEqual(body.result, expected, 'Error');
        })
    });
});

describe('Rout test/post. Negative', () => {
    negative.forEach(({ name, arr1, arr2, extend: { status, message } }) => {
        it(name, async () => {
            const {statusCode, resMessage} = await got.post('http://localhost:9090/api/tasks/arraySort', {
                json: {
                    arr1,
                    arr2
                },
                responseType: 'json'
            });
            assert.equal(statusCode, status, `Expected ${status}`);
            assert.equal(resMessage, message, `Expected ${message}`);
        })
    })
})
