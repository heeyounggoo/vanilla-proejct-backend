require('dotenv').config()
const createError = require('http-errors')
const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const mongoose = require('mongoose')

const app = express()

mongoose.Promise = global.Promise

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
// app.use(express.static(path.join(__dirname, 'public'

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

mongoose.connect(process.env.MONGO_URI, { useMongoClient: true })
  .then(() => console.log('Success connected to mongodb'))
  .catch((e) => console.error(e))

app.listen(4500, () => console.log('server listening on port 4500'))