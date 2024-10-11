const express = require('express');
const mongoose = require('mongoose');


const app = express();
const PORT = 4000;


app.use(express.json());


mongoose.connect('mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('Error de conexión a MongoDB:', err));


app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
const { getAllUsers, createUser } = require('./controllers/userController');


app.get('/api/users', getAllUsers);
app.post('/api/users', createUser);
