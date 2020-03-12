const config = {
    SERVER_PORT: 3000,
    DDBB: {
        NAME: 'despegarch',
        USER: 'root',
        PASS: 'root',
        PORT: '8889',
        HOST: 'localhost'
    },
    JWT: {
        PRIVATE_KEY: 'secret',
        EXPIRES_TIME: 10
    }
}

export default config