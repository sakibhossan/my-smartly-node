const express = require('express');
var cors = require('cors');
const e = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use (express.json());

app.get('/', (req, res) => {
    res.send('Hello from my  over own my personal smartly smartly pant!!')

});
const users = [
    { id: 1, name: 'Sabana', email: 'sabana@gmail.com', phone: '017888888'},
    { id: 2, name: 'sabnur', email: 'sabnur@gmail.com', phone: '01788677888'},
    { id: 3, name: 'sakib', email: 'sakib@gmail.com', phone: '01788566888'},
    { id: 4, name: 'nahid', email: 'nahid@gmail.com', phone: '0178867888'},
    { id: 5, name: 'srabonti', email: 'srabonti@gmail.com', phone: '017877888'},
    { id: 6, name: 'hasib', email: 'hasib@gmail.com', phone: '017678888'},
    { id: 7, name: 'koyel', email: 'koyel@gmail.com', phone: '01788788988'},

]



app.get('/users', (req, res) => {
    if(req.query.name){
const search = req.query.name.toLowerCase();
const matched = users.filter(user => user.name.toLowerCase().includes(search))
res.send(matched);
    }
    else{
        res.send(users);
    }
 
});
app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);

    res.send(user);
});
app.post('/user', (req, res) =>{
    console.log('request',req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})
app.get('/fruits', (req, res) =>{
    res.send(['mango', 'apple','oranges'])
})
app.listen(port, () => {
    console.log('Listening to port', port);
})