import express  from "express";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.get('/', (req,res) => {
    res.send('Memes API')
});

app.listen(port, () => console.log(`server runnig at localhost ${port}`));