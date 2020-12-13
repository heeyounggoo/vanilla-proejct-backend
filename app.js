require('dotenv').config()
const createError = require('http-errors')
const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

mongoose.Promise = global.Promise

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
// app.use(express.static(path.join(__dirname, 'public'

// router
app.use('/api/types', require('./routes/types'))
app.use('/api/config', require('./routes/config'))

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Success connected to mongodb'))
  .catch((e) => console.error(e))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.log(req, res)
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.send('error')
})

app.listen(5000, () => console.log('server listening on port 5000'))