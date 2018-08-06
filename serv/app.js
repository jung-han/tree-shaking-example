const express = require("express");

// 익스프레스 앱생성
const app = express();

// 정적리소스 서비스
const staticPath = process.platform.indexOf("win32") > -1
                   ? __dirname + '\\..\\public' 
                   : __dirname + '/../public' ;
app.use(express.static(staticPath));

// 서비스 포트
const PORT = 9999;

// HTTP 서비스 시작
app.listen(PORT, function(){
    console.log(`express is listening on port ${PORT}`);
});

