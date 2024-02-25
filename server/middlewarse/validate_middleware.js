let validate = (schema) => async (req, resp, next) => {
 try {
     await schema.parseAsync(req.body);
     next();
 } catch (err) {
     // console.log(" hh=>", err);
     // resp.status(400).json({ mes: "validation failed", error: err.errors });
     next(err.errors)
 }
}

module.exports = validate;
 