export default function idValidator(req, res, next) {
  const id = req.params.id
  console.log(id, 'middleware')
  if (!id) return next()

  if (isNaN(parseInt(id))) {
    return res
      .status(402)
      .send({ error: "Bad request.", message: "Id must be a number" })
  }

  return next()
}
