import express from 'express';
import { appRouter } from './routes/app.routes';
import { config } from './config';
import { connectDB } from './database';

const app = express();

app.use(express.json());

// endpoints
app.use('/alo', appRouter);


const startServer = async () => {
  await connectDB();
  app.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}`));
};

startServer();