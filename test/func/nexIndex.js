const { assert } = require('chai');
const { positive, negative } = require('../fixtures/nexIndex');
const Helper = require('../taskTestHelper');

const helper = new Helper('/api/tasks/nextIndex');

describe('Rout /api/tasks/nextIndex. Positive', () => {
    positive.forEach(({ name, nums, target, expected }) => {
        it(name, async () => {
            const { body } = await helper.gotPost({ nums, target });
            assert.strictEqual(body.result, expected.result, 'Error');
        })
    });
});

describe('Rout /api/tasks/nextIndex. Negative', () => {
    negative.forEach(({ name, nums, target, expected }) => {
        it(name, async () => {
            const { status, body } = await helper.gotPost({ nums, target });
            assert.equal(status, expected.status, 'Error');
            assert.equal(body, expected.message, 'Error');
        })
    })
})
