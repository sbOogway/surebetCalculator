const express = require("express")
const app = express()
const port = 4000


app.listen(port, () => {
	console.log(`running on port ${port}`)
})

app.get('/', (req, res) => {
	res.send("yo")
})
