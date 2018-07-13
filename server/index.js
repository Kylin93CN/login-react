import express from 'express';
import bodyParser from 'body-parser';

import users from './routes/user';
import auth from './routes/auth';

let app = express();

// 使用bodyParser处理post数据
app.use(bodyParser.json());

app.get('/',(req,res) => {
  res.send('hello port 6060!'); 
});

app.use('/api/users',users);

app.use('/api/auth',auth);

app.listen(6060,() => console.log('Running on port 6060!'));