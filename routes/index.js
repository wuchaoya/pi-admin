const router = require('koa-router')()
const cpuTemp = require('../utils/cpuTemp');

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})


router.get('/info', async (ctx, next) => {
  const info =  cpuTemp();
	ctx.body = {
	  info: info
}
})



module.exports = router
