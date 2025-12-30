export const ping = async (req, res) => {
  res.status(200).json({
    app: process.env.APP_NAME,
    environment: process.env.NODE_ENV,
    message: "pong",
  });
};
