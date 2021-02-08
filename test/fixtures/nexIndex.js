module.exports = {
    positive: [
        {
            name: 'Find index from 5 in [1,3,5,6]',
            nums: [1, 3, 5, 6],
            target: 5,
            expected: {
                status: 200,
                message: '',
                result: 2
            }
        },
        {
            name: 'Find index from 2 in [1,3,5,6]',
            nums: [1, 3, 5, 6],
            target: 2,
            expected: {
                status: 200,
                message: '',
                result: 1
            }
        },
        {
            name: 'Find index from 7 in [1,3,5,6]',
            nums: [1, 3, 5, 6],
            target: 7,
            expected: {
                status: 200,
                message: '',
                result: 4
            }
        },
        {
            name: 'Find index from 0 in [1,3,5,6]',
            nums: [1, 3, 5, 6],
            target: 0,
            expected: {
                status: 200,
                message: '',
                result: 0
            }
        },
        {
            name: 'Find index from 0 in [1]',
            nums: [1],
            target: 0,
            expected: {
                status: 200,
                message: '',
                result: 0
            }
        },
    ],
    negative: [
        {
            name: 'Find index form "0" in [0, 1, 2]',
            nums: [0, 1, 2],
            target: '0',
            expected: {
                status: 400,
                message: 'Incorrect type of the incoming data',
                result: null
            }
        },
        {
            name: 'Find index form 10 in [0, "1", 2]',
            nums: '[0, 1, 2]',
            target: 10,
            expected: {
                status: 400,
                message: 'Incorrect type of the incoming data',
                result: null
            }
        }
    ]
}
