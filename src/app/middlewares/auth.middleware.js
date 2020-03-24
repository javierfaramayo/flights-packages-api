import { verify } from 'jsonwebtoken'
import config from '../../config'

export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1]

  try {
    verify(token, config.JWT.PRIVATE_KEY)
    next()
  } catch (error) {
    res
      .status(401)
      .send({ error: 'Unauthorized.', message: 'Token verification failed.' })
  }
}

export const verifyRole = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1]

  try {
    const data = verify(token, config.JWT.PRIVATE_KEY)
    if (data.role_id === 1) {
      next()
    } else {
      res
        .status(403)
        .send({ error: 'Unauthorized.', message: 'Access denied.' })
    }
  } catch (error) {
    res
      .status(401)
      .send({ error: 'Unauthorized.', message: 'Token verification failed.' })
  }
}
