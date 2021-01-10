module.exports = {
    positive: [
        {
            name: 'Test ()',
            input: '()',
            expected: true
        },
        {
            name: 'Test ()[]{}',
            input: '()[]{}',
            expected: true
        },
        {
            name: 'Test ([)]',
            input: '([)]',
            expected: false
        },
        {
            name: 'Test {{}[[[())()()()',
            input: '{{}[[[())()()()',
            expected: false
        }
    ],
    negative: [
        {
            name: 'Test {0}',
            input: '{0}',
            extend: {
                status: 400,
                message: 'Incorrect type of the incoming data'
            }
        },
        {
            name: 'Test ""',
            input: '',
            extend: {
                status: 400,
                message: 'Incorrect type of the incoming data'
            }
        }
    ]
}
