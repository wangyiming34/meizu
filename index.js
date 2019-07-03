const Koa = require("koa");
const Router = require("koa-router");
const koaBody = require("koa-body");
const static = require("koa-static");
const fs = require("fs");
const db = require("./static/js/knex.js");
const http = require("http");

var app = new Koa();
var router = new Router();
//
app.use(
  koaBody({
    multipart: true
  })
);
app.use(static("static"));
app.use(router.routes());
app.use(router.allowedMethods());

router
  .get("/login", context => {
    context.type = "html";
    context.body = fs.readFileSync("./static/html/login.html");
  })
  .post("/login", async context => {
    // console.log(context.request.body)
    var { username, password } = context.request.body;

    var data = await db("names")
      .where({
        username,
        password
      })
      .select("id");

    if (data && data.length > 0) {
      context.body = { code: 200, mes: "登陆成功" };
    } else {
      context.body = { code: -1, mes: "账号或密码错误" };
    }
  })
  .get("/register", context => {
    context.type = "html";
    context.body = fs.readFileSync("./static/html/register.html");
  })
  .post("/register", async context => {
    var { username, password, repasswd } = context.request.body;
    // console.log(username,password,repasswd)
    if (password !== repasswd) {
      context.body = { code: -2, mes: "两次密码不一致，请重新输入" };
      return;
    }
    var data = await db("names")
      .where({
        username
      })
      .select("id");

    if (data && data.length > 0) {
      context.body = { code: -3, mes: "此用户名已被使用，请重新注册" };
      return;
    }
    // console.log(username,password)
    await db("names").insert({ username, password });
    context.body = { code: 200, mes: "恭喜您，注册成功！" };
  })
  .get("/", context => {
    context.type = "html";
    context.body = fs.readFileSync("./static/html/index.html");
  })
  .get("/store", context => {
    context.type = "html";
    context.body = fs.readFileSync("./static/html/store.html");
  });
app.listen(8080, "localhost", () => {
  console.log("starting");
});
//
