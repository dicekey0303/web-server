const express = require('express');
const path = require("path");
const app = express();

//おまじない(リクエストのBODYから取得する)
app.use(express.urlencoded({extended:false}));
//htmlのフォルダを指定する
app.use(express.static(path.join(__dirname,"public")));

// app.get('/', function (req, res) {
//   res.send('トップページ!!!')
// })

// app.get('/about', function (req, res) {
//   res.send('aboutページ')
// })


app.post('/api/v1/quiz', function (req, res) {
  const answer = req.body.answer;
  if(answer==="2"){
    res.redirect("/correct.html");
  }else{
    res.redirect("/wrong.html");
  }


})


//APIなどはURI(endポイント)を指定したjsonを返す等(stringifyはsend内で自動処理)
// app.get('/api/v1/users', function (req, res) {
//   res.send({
//     name: "Mike",
//     age: 30,
//   })
// })

const PORT = process.env.PORT || 3000;
app.listen(PORT,function(){
  console.log("サーバー稼働中(3000port)");
})
