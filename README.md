# README

这是 `Render` 托管平台的一个反代js


## 二次反代

**Nginx**
```
server {
    listen 63044;
    resolver 1.1.1.1 valid=300s;

    location / {
       proxy_pass https://render-biliapi.onrender.com;
       proxy_ssl_name render-biliapi.onrender.com;
       proxy_ssl_server_name on;
    }
    
    # 对房间信息请求api 不使用 cookie
    location /xlive/web-room/v1/index/getInfoByRoom {
        proxy_pass https://render-biliapi.onrender.com/xlive/web-room/v1/index/getInfoByRoom;
        proxy_set_header Cookie "";
        proxy_ssl_name render-biliapi.onrender.com;
        proxy_ssl_server_name on;
    }
}
```
