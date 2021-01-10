module.exports = {
    positive: [
        {
            name: 'Find index from 5 in [1,3,5,6]',
            nums: [1,3,5,6],
            target: 5,
            expected: 2
        },
        {
            name: 'Find index from 2 in [1,3,5,6]',
            nums: [1,3,5,6],
            target: 2,
            expected: 1
        },
        {
            name: 'Find index from 7 in [1,3,5,6]',
            nums: [1,3,5,6],
            target: 7,
            expected: 4
        },
        {
            name: 'Find index from 0 in [1,3,5,6]',
            nums: [1,3,5,6],
            target: 0,
            expected: 0
        },
        {
            name: 'Find index from 0 in [1]',
            nums: [1],
            target: 0,
            expected: 0
        },
    ],
    negative: [
        {
            name: 'Find index form "0" in [0, 1, 2]',
            nums: [0, 1, 2],
            target: '0',
            extend: {
                status: 400,
                message: 'Incorrect type of the incoming data'
            }
        },
        {
            name: 'Find index form 10 in [0, "1", 2]',
            nums: [0, "1", 2],
            target: 10,
            extend: {
                status: 400,
                message: 'Incorrect type of the incoming data'
            }
        },
        {
            name: 'Find index form 10 in [0, 1, 2]',
            nums: [0, 1, 2],
            target: 10,
            extend: {
                status: 400,
                message: 'Incorrect type of the incoming data'
            }
        }
    ]
}
