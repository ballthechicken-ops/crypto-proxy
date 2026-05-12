export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const endpoint = req.query.endpoint || 'ping';
  const url = 'https://api.binance.th/api/v3/' + endpoint;

  const response = await fetch(url);
  const data = await response.json();

  res.json({ success: true, data: data });
}
