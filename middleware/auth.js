import crypto from "node:crypto";

export const auth = async (req, res, next) => {
  const requestCorrelationId = crypto.randomUUID();

  try {
    const token = req.headers.authorization?.startsWith("Bearer ")
      ? req.headers.authorization.slice(7)
      : req.cookies?.accessToken;

    const response = await fetch(process.env.VERIFY_ACCESS_TOKEN_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "X-Request-Id": requestCorrelationId,
        "Content-Type": "application/json",
        "Content-Length": "0",
      },
    });

    if (response.status !== 200) {
      throw new Error("Unauthorized");
    }

    next();
  } catch (e) {
    console.error("Auth error:", e);

    res.status(401).json({ message: "Unauthorized" });
  }
};
