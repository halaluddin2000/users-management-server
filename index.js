const express = require('express');
const app = express();

const port = process.env.PORT || 5000;


const users = [
    { id: 1, name: 'helal', email: 'helal@gmail.com' },

    { id: 2, name: 'belal', email: 'belal@gmail.com' },
    {
        id: 3, name: 'jelal', email: 'jelal@gmail.com',
    }]

app.get('/', (req, res) => {
    res.send('users management server is running')
})
app.get('/users', (req, res) => {
    res.send(users)
})
app.listen(port, () => {
    console.log(`server is running on PORT: ${port}`)
})