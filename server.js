const express = require('express');
const cors = require('cors');

const app = express();


app.use(cors());

app.get("/", (req, res) => {
    res.send("Node server running")
})

app.get('http://localhost:8080/employeeList', (req, res) => {

    res.then((resp) => {
        console.log(resp)
        res.json(resp)
    }).catch((err) => {
        console.log(err)
    })
})

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});