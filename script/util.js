module.exports = {
  handler (req, res, promise) {
    console.log('handler')
    console.log('➡️', req.method, req.body)
    promise
      .then(data => {
        res.join(data)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  },
  handleInsertMany (data, err) {
    if (data) console.log(data)
    if (err) console.log(err)
  }
}