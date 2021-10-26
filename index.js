const express = require('express');

const cors = require('cors')

const app = express();
const port = process.env.Port || 5000;
// port 3000 in not preferable since react uses the same port


app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send("hello from my second node server!!!!1");
});

// app.get('/users', (req, res) => {
//     res.send('here is my users')
// });


// app.get('/users', (req, res) => {
//     res.send({ id: 1, name: 'Sajjad', email: 'sajjad@gmail.com' })
// })

const users = [
    { id: 1, name: 'Sajjad', email: 'sajjad@gmail.com', phone: '0174685969' },
    { id: 2, name: 'Mahmud', email: 'mahmud@gmail.com', phone: '01746859234' },
    { id: 3, name: 'Khan', email: 'khan@gmail.com', phone: '0174685456' },
    { id: 4, name: 'Shahrukh', email: 'shahrukh@gmail.com', phone: '0174685236' },
    { id: 5, name: 'Salman', email: 'salman@gmail.com', phone: '0174587969' },
    { id: 6, name: 'Amir', email: 'amir@gmail.com', phone: '0174123969' },
];
// app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    console.log('hitting the post', req.body)
    // res.send('post got hitted')
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})
app.get('/users', (req, res) => {

    const search = (req.query.search);
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult);
        // use query parameter
    }
    else {
        res.send(users)

    }
});


// dynamic api
app.get('/users/:idi', (req, res) => {
    const id = req.params.idi;
    const user = users[id];
    // console.log(req.params.id)
    res.send(user);
});

app.get('/fruits', (req, res) => {
    res.send(['mango', 'orange', 'apple'])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('amar fazli aam');
})

app.listen(port, () => {
    console.log('listening to port', port)
})

