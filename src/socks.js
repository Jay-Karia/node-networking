import express from 'express'
import axios from 'axios'
import SocksProxyAgent from 'socks-proxy-agent'

const proxyOptions = "socks5";
const httpsAgent = new SocksProxyAgent(proxyOptions);

const app = express();

app.get('/sta/*', async (req, res, next) => {
  console.log(req)

  const { data } = await axios({
    httpsAgent,
    method: 'GET',
    url: `https://service.tereno.net${req.path}`,
  })

  console.log(data)
  res.send(data)
})
app.listen(3000)
