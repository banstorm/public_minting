const express = require('express')
const bodyParser = require('body-parser')
const glob = require('glob')
const cors = require('cors')
const bkfd2Password = require('pbkdf2-password')
const hasher = bkfd2Password()

const db = require('./models')
const app = express()
const server = require('http').createServer(app)
const config = require('./config/config')
const moment = require('moment-timezone')
moment().tz('Asia/Seoul').format()

app.use(cors())
app.use(bodyParser.json({
    limit: '10mb'
}))
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '10mb'
}))

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)
app.use('/upload', express.static('uploads'))
app.use(express.static('public'));

const routers = glob.sync(__dirname + '/routers/*.js')
routers.forEach((router) => {
    require(router)(app)
})


const reset = false;
db.sequelize.sync({ force: reset })
.then(() => {

    server.listen(7708, () => {

    })
    console.log("디비싱크 성공");
})