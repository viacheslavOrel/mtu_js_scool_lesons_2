module.exports = {
    positive: [
        {
            name: "Convert III. Should be equal",
            input: 'III',
            extend: 3
        },
        {
            name: "Convert VI. Should be equal",
            input: 'VI',
            extend: 6
        },
        {
            name: "Convert IX. Should be equal",
            input: 'IX',
            extend: 9
        },
        {
            name: "Convert LVIII. Should be equal",
            input: 'LVIII',
            extend: 58
        },
        {
            name: "Convert MCMXCIV. Should be equal",
            input: 'MCMXCIV',
            extend: 1994
        },
        {
            name: "Convert lviii. Should be equal",
            input: 'lviii',
            extend: 58
        },
        {
            name: "Convert McmXCiV. Should be equal",
            input: 'McmXCiV',
            extend: 1994
        }
    ],
    negative: [
        {
            name: "Convert POCA",
            input: 'POCA',
            extend: {
                status: 400,
                message: 'Incorrect type of the incoming data'
            }
        },
        {
            name: "Convert empty",
            input: '',
            extend: {
                status: 400,
                message: 'Incorrect type of the incoming data'
            }
        }
    ]
}