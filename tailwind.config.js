module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: '#fff',
            primary: {
                base: '#00091B',
                40: '#FFF3E3',
                10: '#E6EBED',
            },
            gray: {
                base: '#3A3A3A',
                40: '#B0B0B0',
                30: '#898989',
                20: '#616161',
            },
            dark: {
                base: '#333',
            },
            light: {
                base: '#F4F5F7',
            },
            red: {
                base: '#E97171',
            },
            green: {
                base: '#2EC1AC',
            }
        },
        extend: {
            fontFamily: {
                poppins: ['Poppins','sans-serif'],
            },
            spacing: {
                '22': '88px',
                '17': '68px'
            }
        },
    },
    plugins: [],
}