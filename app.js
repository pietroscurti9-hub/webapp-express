const express = require('express');
const app = express()
const port = 3000


// importo i router

const router = require('./routers/routerMovie');

app.use('/api/movies', router)



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
