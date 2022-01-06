const express = require("express")
const app = express()
const PORT = 5050

app.get('/', (req, res) => {
    res.send ('Student Name: Hossam Ahmed Assad El-Zoghby <br\> <br\> Student Section: section  2')
})

app.listen(PORT, () => {
    console.log('Example app listening at http://localhost:5050')
})