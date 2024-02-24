<div align="center">
	<h1>Github Oauth授权登录</h1>
</div>

- 修改配置
1. 打开`./views/index.html`文件，修改`client_id`和`redirect_uri`值。
2. 打开`./index.js`文件，修改`client_id`和`client_secret`值。

- 配置项来源
<div style="display: flex">
	<img style="width: 30%" src="https://github.com/southliu/github-oauth/assets/26358837/d339e273-15af-46bf-baa0-0bc967665f29" />
	<img style="width: 30%" src="https://github.com/southliu/github-oauth/assets/26358837/f292e0d7-fc95-41cd-80bc-80ff877bb5c9" />
	<img style="width: 30%" src="https://github.com/southliu/github-oauth/assets/26358837/2baedf5a-5bfc-4e11-976f-3fcd2691098c" />
</div>

- 安装依赖
```bash
pnpm install
```

- 运行

```bash
pnpm dev
```

- 浏览器访问

```bash
http://localhost:5050/
```

