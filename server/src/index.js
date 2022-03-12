const Koa = require('koa');
const bodyParser = require('koa-bodyparser')();
const staticCache = require('koa-static-cache');
const path = require('path');
const logger = require('koa-logger')
require('dotenv').config();

const router = require('./routers')

const app = new Koa();

app.use(logger())
app.use(bodyParser);
app.use(staticCache(path.resolve(__dirname, './public')))

app.use(router.routes());

app.listen(4000, () => {
  console.log('server is listening');
})