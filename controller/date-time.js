
exports.timeStamp = (req , res ) => {
   const date_string = req.params.date_string;
   let date = new Date(date_string)
   if(date == "Invalid Date"){
     date = new Date(parseInt(date_string,10))
   }

  if(date == "Invalid Date"){
    res.send({"error" : "Invalid Date"})
  }else{
    
    res.send( {
      "unix" : date.getTime(),
      "utc" : date.toUTCString(),
    })
  }

}

exports.defaultTimeStamp = (req , res) => {
  const date = new Date()
  res.send({
      "unix" : date.getTime(),
      "utc" : date.toUTCString(),
    })
}