const { assert } = require('chai');
const { positive, negative } = require('../fixtures/roman');
const Helper = require('../taskTestHelper');

const helper = new Helper('/api/tasks/roman');

describe('Rout /api/tasks/roman. Positive', () => {
    positive.forEach(({ name, input, expected }) => {
        it(name, async () => {
            const { body } = await helper.gotPost({ input });
            assert.strictEqual(body.result, expected.result, 'Error');
        })
    });
});

describe('Rout /api/tasks/roman. Negative', () => {
    negative.forEach(({ name, input, expected }) => {
        it(name, async () => {
            const { status, body } = await helper.gotPost({ input });
            assert.equal(status, expected.status, 'Error');
            assert.equal(body, expected.message, 'Error');
        })
    })
})
