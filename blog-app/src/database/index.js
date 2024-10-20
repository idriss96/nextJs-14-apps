import mongoose from 'mongoose';

const connectToDB = async () => {
  const connectionUrl =
    'mongodb+srv://admin96:LF0cpLjOW5rxZlFu@blog-app.tziwb.mongodb.net/';

  mongoose
    .connect(connectionUrl)
    .then(() => console.log('blog database connection is successful')
    .catch((error) => console.log(error))
    );
};

export default connectToDB;