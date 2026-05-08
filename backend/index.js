const express = require("express")
const app = express()
const port = 3000;

app.get("/", (req,res) => {
  res.send("HOLA")
})

app.get("/products", (req,res) =>{
  res.json({
    name: 'producto 1',
    price: 100
  })
})

app.listen(port, () => {
  console.log("mi port"+ port)
})
