export default () => ({
  database: {
    mongodb_user: process.env.MONGO_USERNAME,
    mongodb_password: process.env.MONGO_PASSWORD,
    mongodb_uri: process.env.MONGO_URI,
  },
});
