import express from 'express';
import { appRouter } from './app.routes';
import { config } from './config';

const app = express();

app.use(express.json());

// endpoints
app.use('/alo', appRouter);


app.listen(config.PORT, () => {
  console.log(`server is running ${config.PORT}`);
});