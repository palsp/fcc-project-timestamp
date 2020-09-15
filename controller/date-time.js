

exports.timeStamp = (req , res ) => {
  const date_string = req.body.date_string;
  const date = new Date(date_string)
  let rv;
  if(date){  
    return JSON.stringify( {
      "unix" : date.getTime(),
      "utc" : date.toUTCString(),
    })
  }else {
    return JSON.stringify({"error" : "Invalid Date"})
  }
}