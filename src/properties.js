const dev = {
    PRODUCT_URL: 'http://localhost:8080',
    AI_URL: 'http://localhost:8082'
};

const prod = {
    PRODUCT_URL: 'https://one-for-all-product-service-7840cb2fb213.herokuapp.com',
    AI_URL: 'https://one-for-all-ai-service-f9084e4163ee.herokuapp.com'
};


export const properties = process.env.NODE_ENV === 'production' ? prod : dev;