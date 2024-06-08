const fs = require('fs');
const http = require('http');
const server = require("./public/serverFile");
const qs = require("querystring")


const servers = http.createServer((request, response) => {
    console.log("URL 요청 데이터:", request.url);

    let filePath = server.getFilePath(request.url);
    let ext = server.getFileExtension(filePath);
    let contentType = server.getContentType(ext);
    if (request.method === 'GET') {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                if (err.code === "ENOENT") {
                    response.writeHead(404, { "Content-Type": "text/html" });
                    response.end("페이지를 찾을 수 없습니다.");
                }
                else {
                    response.writeHead(500);
                    response.end(`서버 오류: ${err.code}`);
                }
            }
            else {
                response.writeHead(200, { "Content-Type": contentType });
                response.end(data);
            }
        });
    }
    else if (request.method === "POST") {
        if (request.url.startsWith("/name")) {
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/javascript');
            var body = '';
            request.on('data', function (data) {
                //request로 들어온 정보를 조각조각 잘라서 data라는 인자를 통해서 수신
                body += data;
            });
            request.on('end', function () {  //정보가 조각조각 들어오다가 끝나면 이 함수 호출하도록 약속
                //post 변수에 post 방식으로 들어온 정보가 들어감
                const post = qs.parse(body);
                const title = post.title;
                const pwd = post.pwd;
                const phone = post.phone;
                console.log(title);
                console.log(pwd);
                console.log(phone);
            });
        }
    }
});

servers.listen(8080, (error) => {
    if (error) {
        console.error(error);
    }
    else {
        console.log("http://localhost:8080");
    }
});