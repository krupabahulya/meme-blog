import express  from "express";
import memesRouter from "./routes/memesRouter.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/memes', memesRouter);
app.get('/', (req,res) => {
    res.send('Memes API')
});

app.listen(port, () => console.log(`server runnig at localhost ${port}`));