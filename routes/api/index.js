const route = require('express').Router()

route.use('/users', require('./users'))
route.use('/students', require('./students'))

exports = module.exports = {
    route
}