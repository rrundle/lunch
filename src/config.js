// dev
const baseUri = 'http://localhost:2999'

//production
// const baseURi = 'https://63c31503.ngrok.io'

const cookieExpiration = 7

// TODO add { sameSite: 'lax' } as cookie option to prevent CSRF attacks

export { baseUri, cookieExpiration }
