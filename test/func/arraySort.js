const { assert } = require('chai');
const Helper = require('../taskTestHelper');
const { positive, negative } = require('../fixtures/arraySort');

const helper = new Helper('/api/tasks/arraySort');

describe('Rout /api/tasks/arraySort. Positive', () => {
    positive.forEach(({ name, arr1, arr2, expected }) => {
        it(name, async () => {
            const { body } = await helper.gotPost({ arr1, arr2 })
            assert.deepEqual(body.result, expected.result, 'Error');
        })
    });
});

describe('Rout /api/tasks/arraySort. Negative', () => {
    negative.forEach(({ name, arr1, arr2, expected}) => {
        it(name, async () => {
            const {status, body} = await helper.gotPost({ arr1, arr2 });
            assert.equal(status, expected.status, 'Error');
            assert.equal(body, expected.message, 'Error');
        })
    })
})
