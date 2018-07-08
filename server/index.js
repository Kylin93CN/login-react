import express from 'express';
import users from './routes/user';

let app = express();
app.use('api/users',users);

app.get('/',(req,res) =>{
    res.send('hello port 6060!'); 
});

app.listen(6060,() => console.log('Running on port 6060!'));