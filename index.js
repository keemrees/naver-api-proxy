const fetch = require('node-fetch');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // ⭐ CORS 해결 핵심

  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: 'Missing query' });
  }

  try {
    const response = await fetch(`https://openapi.naver.com/v1/search/local.json?query=${encodeURIComponent(query)}&display=10&sort=comment`, {
      headers: {
        'X-Naver-Client-Id': 'N_B4B8U_dLcjxirtKaBo',
        'X-Naver-Client-Secret': 'ArBHdc_qzh'
      }
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Proxy failed', detail: err.message });
  }
};
