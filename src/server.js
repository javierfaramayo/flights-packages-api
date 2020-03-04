import app from './app/app'
import config from './config'
import {connect} from 'mongoose'

app.listen(config.SERVER_PORT, () => {
    connect('mongodb://localhost:27017/api_restful', { useNewUrlParser: true, useUnifiedTopology: true })
    console.log(`Server is running at port ${config.SERVER_PORT}`)
})