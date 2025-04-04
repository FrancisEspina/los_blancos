export default async function handler(req, res) {
  const API_URL = "https://api.football-data.org/v4/matches";
  const API_KEY = "898ccbc228804b32b9362871084ecded";

  try {
    const response = await fetch(API_URL, {
      headers: {
        "X-Auth-Token": API_KEY,
      },
    });

    const data = await response.json();
    res.status(200).json(data); // ✅ this sends the response to the client
  } catch (error) {
    console.error("API error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
}
