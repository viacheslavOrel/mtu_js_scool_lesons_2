module.exports = {
    positive: [
        {
            name: "Convert III. Should be equal",
            input: 'III',
            expected: {
                status: 200,
                message: '',
                result: 3
            }
        },
        {
            name: "Convert VI. Should be equal",
            input: 'VI',
            expected: {
                status: 200,
                message: '',
                result: 6
            }
        },
        {
            name: "Convert IX. Should be equal",
            input: 'IX',
            expected: {
                status: 200,
                message: '',
                result: 9
            }
        },
        {
            name: "Convert LVIII. Should be equal",
            input: 'LVIII',
            expected: {
                status: 200,
                message: '',
                result: 58
            }
        },
        {
            name: "Convert MCMXCIV. Should be equal",
            input: 'MCMXCIV',
            expected: {
                status: 200,
                message: '',
                result: 1994
            }
        },
        {
            name: "Convert lviii. Should be equal",
            input: 'lviii',
            expected: {
                status: 200,
                message: '',
                result: 58
            }
        },
        {
            name: "Convert McmXCiV. Should be equal",
            input: 'McmXCiV',
            expected: {
                status: 200,
                message: '',
                result: 1994
            }
        }
    ],
    negative: [
        {
            name: "Convert POCA",
            input: 'POCA',
            expected: {
                status: 400,
                message: 'Incorrect type of the incoming data',
                result: null
            }
        },
        {
            name: "Convert empty",
            input: '',
            expected: {
                status: 400,
                message: 'Incorrect type of the incoming data',
                result: null
            }
        }
    ]
}