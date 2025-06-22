const validate = (schema) => (req, res, next) => {
  const { error, value } = schema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json({
      status: 'error',
      errors: error.details.map(err => ({
        message: err.message,
        path: err.path.join('.')
      }))
    });
  }
  req.validatedBody = value; // optionally attach to req
  next();
};
export default validate;