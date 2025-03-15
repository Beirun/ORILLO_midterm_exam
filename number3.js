const express = require('express');
const app = express();

app.use(express.json());

app.get('/test', (req, res) => {
    res.send({message: 'Express is working! Bernard Jay D. Orillo'});
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
