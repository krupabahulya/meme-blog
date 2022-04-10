import express  from "express";
import memesRouter from "./routes/memesRouter.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
  });
app.use('/memes', memesRouter);
app.get('/', (req,res) => {
    res.send('Memes API')
});

app.listen(port, () => console.log(`server runnig at localhost ${port}`));