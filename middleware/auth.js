export const auth = (req, res) => {
  try {
    const token = req.headers.authorization?.startsWith("Bearer ")
      ? req.headers.authorization.slice(7)
      : req.cookies?.accessToken;

    const payload = verifyAccessToken(token, {
      secret: process.env.JWT_ACCESS_SECRET,
    });

    req.user = payload;

    next();
  } catch (e) {
    res.status(401).json({ message: "Unauthorized" });
  }
};
