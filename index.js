const express = require('express');
const fetch = require('node-fetch');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/naver', async (req, res) => {
  const query = req.query.query;
  const response = await fetch(`https://openapi.naver.com/v1/search/local.json?query=${encodeURIComponent(query)}&display=10&sort=comment`, {
    headers: {
      'X-Naver-Client-Id': 'N_B4B8U_dLcjxirtKaBo',
      'X-Naver-Client-Secret': 'ArBHdc_qzh'
    }
  });
  const data = await response.json();
  res.json(data);
});

module.exports = app;
