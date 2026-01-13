const express = require("express");
const app = express();


app.get('/sum/:a', (req,res)=> {
    const a = req.params.a;
    const b = req.query.b;
    const sum = a+b;
    res.send(sum);
})

app.listen(7000, () => {
    console.log("server is running");
})