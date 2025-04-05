const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();
const port = process.env.PORT || 80;

// 设置反向代理
app.use("/", createProxyMiddleware({
  target: "https://api.live.bilibili.com",
  changeOrigin: true,
  pathRewrite: {
    "^/": "/", // 将所有路径直接转发到目标服务器
  },
  logLevel: "debug"
}));

app.listen(port, "0.0.0.0", () => console.log(`反向代理服务器运行在 http://0.0.0.0:${port}`));