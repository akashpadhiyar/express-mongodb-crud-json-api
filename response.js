 
module.exports = {
    errorResponse: function(err,res) {
        res.status(err.status || 500);
        res.end(JSON.stringify({
            flag: 0,
            message: err.message,
            error: err
          
          }));
    },
    successResponse: function(message,res,data) {
        res.status(200);
        res.end(JSON.stringify({
            flag: 1,
            message: message,
            data: data
            
          }));
    }
}