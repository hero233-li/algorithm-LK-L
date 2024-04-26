const Koa = require("koa");
const KoaRouter = require("koa-router");
const cors = require("@koa/cors");
const router = new KoaRouter();
const app = new Koa();
app.use(cors());
router.post("/postUpload", async (ctx, next) => {
  ctx.body = "ok";
});
router.get("/getUpload", async (ctx, next) => {
  ctx.body = "ok";
});
app.use(router.routes());
app.listen(4000, () => {
  console.log("服务器运行在 http://localhost:4000");
});
