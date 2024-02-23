import koa from 'koa';
import koaStatic from 'koa-static';
import axios from 'axios';

const client_id = '你的client_id';
const client_secret = '你的client_secret';
const app = new koa();

app.use(koaStatic('./views'));

app.use(async (ctx) => {
    const req = ctx.request;

    // 获取code
    if (req.method === 'GET' && ctx.path === '/oauth/github') {
        const code = req?.query?.code;
        console.log("code:", code);
        const url = `https://github.com/login/oauth/access_token?client_id=${client_id}&client_secret=${client_secret}&code=${code}`;

        const tokenResponse = await axios({
            method: 'post',
            url,
            headers: {
                accept: 'application/json'
            }
        });

        // oauth返回数据
        console.log(tokenResponse.data)
        const { access_token, token_type } = tokenResponse.data;
        
        // 登录成功跳转
        ctx.response.redirect(`/user.html?access_token=${access_token}&token_type=${token_type}`)
    }
});

app.listen(5050, () => {
    console.log('服务在5050端口运行');
});