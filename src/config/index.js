const config = {
    SERVER_PORT: 3000,
    DDBB: {
        NAME: 'despegarch',
        USER: 'root',
        PASS: '',
        PORT: '3306',
        HOST: '127.0.0.1'
    },
    JWT: {
        PRIVATE_KEY: 'secret',
        EXPIRES_TIME: 10
    }
}

export default config