// node_modules 에 있는 express 관련 파일을 가져온다.
var express = require("express");
var path = require("path");

// express 는 함수이므로, 반환값을 변수에 저장한다.
var app = express();

if (process.env.NODE_ENV === "production") {
  //"client/build"는 react의 build파일 경로이다
  app.use(express.static("client/build"));

  //"..client"는 react 프로젝트의 파일 경로, "build"는 react프로젝트 내의 build폴더이다
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

// 3000 포트로 서버 오픈
app.listen(8080, function () {
  console.log("start! express server on port 8080");
});

// 이제 터미널에 node app.js 를 입력해보자.
