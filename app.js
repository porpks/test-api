import express from 'express'

const app = express()
const port = 4000

app.get('/', async (req, res) => {
    res.json('Hello World!')

})

app.get('*', (req, res) => {
    res.status(404).send('Not found')
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})
