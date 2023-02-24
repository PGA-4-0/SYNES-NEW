module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                'madalit': ['Madani Light', 'sans-serif'],
                'madareg': ['Madani Regular', 'sans-serif'],
                'madamed': ['Madani Medium', 'sans-serif'],
                'madasb': ['Madani SB', 'sans-serif'],
                'madabold': ['Madani Bold', 'sans-serif'],
                'madaxb': ['Madani XB', 'sans-serif'],
                'madablack': ['Madani Black', 'sans-serif'],
            },
            screens: {
                xs: "300px",
                "xs-max": { max: "456px" },
                sm: "576px",
                "sm-max": { max: "576px" },
                md: "768px",
                "md-max": { max: "768px" },
                lg: "992px",
                "lg-max": { max: "992px" },
                xl: "1200px",
                "xl-max": { max: "1200px" },
                "2xl": "1320px",
                "2xl-max": { max: "1320px" },
            },
        },

    },
    plugins: [],
}