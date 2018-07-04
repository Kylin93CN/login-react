import express from 'express';

let app = express();
app.get('/',(req,res) =>{
    res.send('hello sesssssxxxxxxr00sss00ver!');
});

app.listen(3000,() => console.log('Running on port 3000!'));