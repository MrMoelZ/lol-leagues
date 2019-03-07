
const express = require('express')
const app = express()

app.use('/static', express.static('public'))
app.use('/imgs', express.static('imgs'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(3003, () => {
    console.log('listening on 3003')
})

//loldatabase:europe-west1:myinstance