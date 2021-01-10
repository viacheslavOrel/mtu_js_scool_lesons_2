module.exports = {
    positive: [
        {
            name: 'Sort [2,3,1,3,2,4,6,7,9,2,19] by [2,1,4,3,9,6]',
            arr1: [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19],
            arr2: [2, 1, 4, 3, 9, 6],
            expected: [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19]
        },
        {
            name: 'Sort [2,3,1,3,2,4,6,7,9,2,19] by [0]',
            arr1: [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19],
            arr2: [0],
            expected: [1, 2, 2, 2, 3, 3, 4, 6, 7, 9, 19]
        }
    ],
    negative: [
        {
            name: 'Sort [2,3,1,3,2,4,6,7,9,2,19] by []',
            arr1: [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19],
            arr2: [],
            extend: {
                status: 400,
                message: 'Incorrect type of the incoming data'
            }
        },
        {
            name: 'Sort [2,3,1,3,2,4,6,7,9,2,19] by 1',
            arr1: [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19],
            arr2: 1,
            extend: {
                status: 400,
                message: 'Incorrect type of the incoming data'
            }
        },
        {
            name: 'Sort "[2,3,1,3,2,4,6,7,9,2,19]" by "[2,1,4,3,9,6]"',
            arr1: '[2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19]',
            arr2: '[2,1,4,3,9,6]',
            extend: {
                status: 400,
                message: 'Incorrect type of the incoming data'
            }
        }
    ]
}