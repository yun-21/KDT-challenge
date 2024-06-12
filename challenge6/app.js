const fs = require('fs');
const http = require('http');
const server = require("./public/serverFile");
const qs = require("querystring");
const names = require("./public/name")


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
            response.setHeader('Content-Type', 'text/html; charset=utf-8');
            var body = '';
            request.on('data', function (data) {
                //request로 들어온 정보를 조각조각 잘라서 data라는 인자를 통해서 수신
                body += data;
            });
            request.on('end', function () {  //정보가 조각조각 들어오다가 끝나면 이 함수 호출하도록 약속
                //post 변수에 post 방식으로 들어온 정보가 들어감
                const str = new URLSearchParams(body);
                const title = str.get("title");
                const email = str.get("email");
                const phone = str.get("phone");
                class InnerData{
                    constructor(){
                        this.title = title;
                        this.email = email;
                        this.phone = phone;
                    }
                    set title(value){
                        if(typeof(value)==='string'){
                            this._title=value;
                        }else{
                            throw new Error("이름이 문자열이 아닙니다.")
                        }
                    }
                    get title(){
                        return this._title;
                    }

                    set email(value){
                        if(typeof(value)==='string'){
                            this._email=value;
                        }else{
                            throw new Error("이메일이 문자열 아닙니다.")
                        }
                    }
                    get email(){
                        return this._email;
                    }
                }
                const app = () =>{
                    const inData = new InnerData();
                    function inFunc(){
                        if(inData.title !== ''){
                            return `<h1>당신의 이름은 <span style="color:blue">${inData.title}</span>이군요</h1>`
                        }
                        else{
                            return `<h1>당신은 이름이 없네요.</h1>`
                        }
                    }
                    function onFunc(){
                        if(inData.email !== ''){
                            const gol = inData.email.split('').indexOf('@');
                            const a =inData.email.split('').splice(gol+1)
                            const dot = a.indexOf('.');
                            a.splice(dot);
                            if(a.join('')==='naver'){
                                return `<h1>당신은 <span style="color:blue">네이버</span>를 사용하시는군요</h1>`
                            }
                            else if(a.join('')==='hanmail'){
                                return `<h1>당신은 <span style="color:blue">다음</span>을 사용하시는군요</h1>`
                            }
                            else if(a.join('')==='kakao'){
                                return `<h1>당신은 <span style="color:blue">카카오</span>를 사용하시는군요</h1>`
                            }
                            else if(a.join('')==='gmail'){
                                return `<h1>당신은 <span style="color:blue">구글</span>을 사용하시는군요</h1>`
                            }
                            else{
                                return `<h1>어디 메일을 사용하시는건가요?</h1>`
                            }
                        }
                    }
                    function phFunc(){
                        const a = inData.phone.split('')
                        a.splice(inData.phone.split('').indexOf('-'))
                        if(a.join('')==='010'){
                            return `<h2>${a.join('')}을 사용하시네요</h2>`
                        }else if(a.join('')==='011'){
                            return `<h2>${a.join('')}? 예전 번호를 계속 사용하시나봐요</h2>`
                        }else{
                            return `<h2>핸드폰 번호를 제대로 작성해주세요</h2>`
                        }
                    }

                    return inFunc()+onFunc()+phFunc()
                }
                response.write(app());
                response.end();
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