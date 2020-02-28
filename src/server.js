import app from './app/app'
import config from './config'

app.listen(config.SERVER_PORT, () => {
    console.log(`Server is running at port ${config.SERVER_PORT}`)
})