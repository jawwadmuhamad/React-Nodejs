const express = require('express');
const app = express();
app.get("/", (req, resp)=>{
    resp.send("hey its working..")
});

app.listen(5000);