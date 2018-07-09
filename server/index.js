import express from 'express';
import users from './routes/user';
import bodyParser from 'body-parser';

let app = express();

// 使用bodyParser处理post数据
app.use(bodyParser.json());

app.use('/api/users',users);

app.get('/',(req,res) =>{
    res.send('hello port 6060!'); 
});

app.listen(6060,() => console.log('Running on port 6060!'));