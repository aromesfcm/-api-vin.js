export default async function handler(req, res) {
  const { vin } = req.query;

  if (!vin || vin.length !== 17) {
    return res.status(400).json({ success: false, message: "Invalid or missing VIN." });
  }

  const API_KEY = "c7ca89c5-1cad-4292-a7ac-26ab859d96ed";
  const apiUrl = `https://api.carapi.app/v2/vehicles/vin/${vin}?apikey=${API_KEY}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error("CarAPI error:", error);
    return res.status(500).json({ success: false, message: "Failed to fetch vehicle data." });
  }
}
