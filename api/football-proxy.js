// /api/football-proxy.js

export default async function handler(req, res) {
  const url =
    "https://api.football-data.org/v4/teams/86/matches?status=SCHEDULED&limit=10&order=desc";

  try {
    const response = await fetch(url, {
      headers: {
        "X-Auth-Token": "898ccbc228804b32b9362871084ecded",
      },
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data." });
  }
}
