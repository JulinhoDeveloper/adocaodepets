const jwt = require("jsonwebtoken");
const getToken = require('./get-token')
// middleware to validate token
const checkToken = (req, res, next) => {
  if (!req.headers.authorization){
    return res.status(401).json({message: 'negado'})
  }
  const token = getToken(req)
  if(!token){
    return res.status(401).json({message: 'acesso negado'})
  }
  try {
    const verified = jwt.verify(token, 'nossosecret')
    req.user = verified
    next()
  } catch (error) {
    return res.status(400).json({message: 'inválido'})
  }
}

module.exports = checkToken;