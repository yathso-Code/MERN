let errorMiddleware = (err, req, resp, next)=>{
   let status = err.status || 500;
   // let message = err.message || "BACKEND ERROR";
   // let extraDetails = err.extraDetails || "Error form BACKEND";
  
   return resp.json(err[0].message);
}

module.exports = errorMiddleware;