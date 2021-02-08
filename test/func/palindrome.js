const { assert } = require('chai');
const { positive, negative } = require('../fixtures/palindrome');
const Helper = require('../taskTestHelper');

const helper = new Helper('/api/tasks/palindrome');

describe('Rout /api/tasks/palindrome. Positive', () => {
    positive.forEach(({ name, input, expected }) => {
        it(name, async () => {
            const { body } = await helper.gotPost({ input });
            assert.strictEqual(body.result, expected.result, 'Error');
        })
    });
});

describe('Rout /api/tasks/palindrome Negative', () => {
    negative.forEach(({ name, input, expected }) => {
        it(name, async () => {
            const { status, body } = await helper.gotPost({ input });
            assert.equal(status, expected.status, 'Error');
            assert.equal(body, expected.message, 'Error');
        })
    })
})
