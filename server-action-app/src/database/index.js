import mongoose from 'mongoose';

const connectToDB = async () => {
  const url =
    'mongodb+srv://admin96:LF0cpLjOW5rxZlFu@blog-app.tziwb.mongodb.net/';

  mongoose
    .connect(url)
    .then(() => console.log('Database Connection is successful'))
    .catch((e) => console.log(e));
};

export default connectToDB;
