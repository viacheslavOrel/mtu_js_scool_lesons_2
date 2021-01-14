module.exports = {
    positive: [
        {
            name: 'Palindrome 121',
            input: 121,
            expected: {
                stauts: 200,
                message: '',
                result: true
            }
        },
        {
            name: 'Palindrome -121',
            input: -121,
            expected: {
                stauts: 200,
                message: '',
                result: false
            }
        },
        {
            name: 'Palindrome 10',
            input: 10,
            expected: {
                stauts: 200,
                message: '',
                result: false
            }
        },
        {
            name: 'Palindrome 2002',
            input: 2002,
            expected: {
                stauts: 200,
                message: '',
                result: true
            }
        },
    ],
    negative: [
        {
            name: 'Palindrome "test"',
            input: 'test',
            expected: {
                status: 400,
                message: 'Incorrect type of the incoming data',
                result: null
            }
        },
        {
            name: 'Palindrome ""',
            input: '',
            expected: {
                status: 400,
                message: 'Incorrect type of the incoming data',
                result: null
            }
        },
        {
            name: 'Palindrome "test"',
            input: '121',
            expected: {
                status: 400,
                message: 'Incorrect type of the incoming data',
                result: null
            }
        },
    ]
}