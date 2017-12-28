const Base = require('./base.js');

module.exports = class extends Base {
  indexAction() {
    // return this.display();
    think.loggger.info(this.ctx.url);
    console.log(this.ctx.url);
    console.log(this.ctx.method);
    console.log(this.ctx.ip);
    console.log(this.userAgent);
    // this.body = 'hello wold';
    this.success('hello', 'OK');
  }

  infoAction() {
    this.assign('title', 'thinkjs');
    return this.display();
  }

  async goodAction() {
    const goods = this.model('goods');
    const data = await goods.select();
    return this.success(data);
  }

};
