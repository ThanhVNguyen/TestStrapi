module.exports = {
    async index(ctx) {
        console.log(ctx.request);
        return ctx.request;
      },
};