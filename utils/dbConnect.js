import mongoose from 'mongoose';
import getConfig from 'next/config';

const connection = {};
const { serverRuntimeConfig } = getConfig();

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect(serverRuntimeConfig.DB_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}

export default dbConnect;
