require('dotenv').config();

const app=require('./app');

app.use('/app',express.static(path.join(__dirname, 'angular')))

res.sendFile(path.join(__dirname,"angular","index.html"));

const port =process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server Started on port  ${port}`)
});