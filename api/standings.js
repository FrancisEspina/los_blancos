export default async function handler(req, res) {
  const BASE_URL =
"https://api.football-data.org//v4/competitions/";
  const API_KEY = process.env.VITE_API_KEY;

  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Build query string from incoming request (e.g. status=FINISHED)
  const queryString = new URLSearchParams(req.query).toString();
  const fullUrl = `${BASE_URL}${queryString ? `?${queryString}` : ""}`;

  try {
    const response = await fetch(fullUrl, {
      headers: {
        "X-Auth-Token": API_KEY,
      },
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("API error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
}
