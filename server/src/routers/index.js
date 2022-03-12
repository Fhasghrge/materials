const Router = require('koa-router');
const { generatorAvator } = require('../util')
const moment = require('moment');
const getDB = require('../sql');
const router = new Router({prefix: '/api'})

router.post('/postComments', async (ctx) => {
  const { username, comments } = ctx.request.body;
  const [key, avatorUrl] = generatorAvator();
  try {
    const db = await getDB();
    await db.collection('comments').insertOne({
      avatorKey: key,
      username,
      comments,
      avatorUrl,
      ip: ctx.request.ip,
      date: moment().format('MMMM Do YYYY, h:mm:ss a')
    })
    ctx.response.body = {
      errcode: 0
    }
  } catch (error) {
    ctx.body = {
      errocde: 1,
      message: error.message || 'unknow error'
    }
  }
})

router.get('/getComments', async (ctx) => {
  try {
    const db = await getDB();
    const comments = await db.collection('comments').find({}).toArray();
    ctx.body = {errocde: 0, data: comments};
  } catch (error) {
    ctx.body = {
      errocde: 1,
      message: error.message || 'unknow error'
    }
  } 
})

router.get('/search/:key', async (ctx) => {
  const key = ctx.params.key;
  if(key.length < 5) {
    ctx.response.status = 400;
    ctx.body = 'error request'
    return;
  }
  try {
    const db = await getDB()
    const results = await db
      .collection('translations')
      .find({'$or': [
        {'chin': {$regex : key}},
        {'eng': {$regex : key}}
      ]}).toArray()
    ctx.body = {errcode: 0, data: results};
  } catch (error) {
    ctx.body = {
      errocde: 1,
      message: error.message || 'unknow error'
    }
  }
})


module.exports = router;