const express = require('express');
var cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 3003;

const apiProxy = createProxyMiddleware({
    target: 'http://api.openweathermap.org',
    changeOrigin: true,
    logLevel: 'debug',
    pathRewrite: function (path, req) { return req.originalUrl },
    onProxyRes: function (proxyRes, req, res) {
        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
    }
});

app.use(cors());

app.use(apiProxy);

app.listen(port, () => {
    console.log(`Now listening on port ${port}`); 
});
