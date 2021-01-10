module.exports = {
    positive: [
        {
            name: 'Palindrome 121',
            input: 121,
            expected: true
        },
        {
            name: 'Palindrome -121',
            input: -121,
            expected: false
        },
        {
            name: 'Palindrome 10',
            input: 10,
            expected: false
        },
        {
            name: 'Palindrome 2002',
            input: 2002,
            expected: true
        },
    ],
    negative: [
        {
            name: 'Palindrome "test"',
            input: 'test',
            extend: {
                status: 400,
                message: 'Incorrect type of the incoming data'
            }
        },
        {
            name: 'Palindrome ""',
            input: '',
            extend: {
                status: 400,
                message: 'Incorrect type of the incoming data'
            }
        },
        {
            name: 'Palindrome "test"',
            input: '121',
            extend: {
                status: 400,
                message: 'Incorrect type of the incoming data'
            }
        },
    ]
}