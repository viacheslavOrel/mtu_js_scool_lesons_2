module.exports = {
    positive: [
        {
            name: 'Test ()',
            input: '()',
            expected: {
                status: 200,
                message: '',
                result: true
            }
        },
        {
            name: 'Test ()[]{}',
            input: '()[]{}',
            expected: {
                status: 200,
                message: '',
                result: true
            }
        },
        {
            name: 'Test ([)]',
            input: '([)]',
            expected: {
                status: 200,
                message: '',
                result: false
            }
        },
        {
            name: 'Test {{}[[[())()()()',
            input: '{{}[[[())()()()',
            expected: {
                status: 200,
                message: '',
                result: false
            }
        }
    ],
    negative: [
        {
            name: 'Test {0}',
            input: '{0}',
            expected: {
                status: 400,
                message: 'Incorrect type of the incoming data',
                result: null
            }
        },
        {
            name: 'Test ""',
            input: '',
            expected: {
                status: 400,
                message: 'Incorrect type of the incoming data',
                result: null
            }
        }
    ]
}
