<p align="center">
<!-- <img src="docs/.vuepress/public/images/logo.png" alt="hexo-encrypt-token"> -->
</p>
<h1 align="center">hexo-encrypt-token</h1>

> :cake: 自用 Hexo 简单反爬虫方案, 同时给与友好SEO, 修改自 [D0n9X1n/hexo-blog-encrypt](https://github.com/D0n9X1n/hexo-blog-encrypt)

[![repo size](https://img.shields.io/github/repo-size/yiyungent/hexo-encrypt-token.svg?style=flat)]()
[![LICENSE](https://img.shields.io/github/license/yiyungent/hexo-encrypt-token.svg?style=flat)](https://github.com/yiyungent/hexo-encrypt-token/blob/master/LICENSE)
[![NPM version](https://img.shields.io/npm/v/hexo-encrypt-token.svg)](https://www.npmjs.com/package/hexo-encrypt-token)
[![NPM downloads](https://img.shields.io/npm/dt/hexo-encrypt-token)](https://www.npmjs.com/package/hexo-encrypt-token)
[![QQ Group](https://img.shields.io/badge/QQ%20Group-894031109-deepgreen)](https://jq.qq.com/?_wv=1027&k=q5R82fYN)

## Intro

> 自用 Hexo 简单反爬虫方案, 同时给与友好SEO, 修改自 [D0n9X1n/hexo-blog-encrypt](https://github.com/D0n9X1n/hexo-blog-encrypt)

> 采用加密文章内容并自动解密的方式简单反爬虫, 同时提供SEO友好内容

## Usage

```bash
npm install hexo-encrypt-token --save
```

```html
<head>
  <!-- hexo-encrypt-token -->
  <script>
    // hexo-encrypt-token
    var storage = window.localStorage;
    var storageName = 'hexo-encrypt-token'; 
    // 下方自行调节: tokenJsonStr
    var tokenJsonStr = `{
      "dk": {
        "alg": "A256CBC",
        "ext": true,
        "k": "5YxPbPj0WL0xWESGtmtvC42cHRrluRMA8Lgo85Xzv10",
        "key_ops": [ "decrypt" ],
        "kty": "oct"
      },
      "iv": "802b4349e5eb3aad98158dde9b831b85",
      "hmk": {
        "alg": "HS256",
        "ext": true,
        "k": "5YxPbPj0WL0xWESGtmtvC42cHRrluRMA8Lgo85Xzv10",
        "key_ops": [ "verify" ],
        "kty": "oct"
      }
    }`;
    storage.setItem(storageName, tokenJsonStr);
  </script>
  <!-- End hexo-encrypt-token -->
</head>
```

```powershell
$token="admin"
# 此脚本可批量设置 ./source/_posts 目录下的所有 md 文章的 password 
# $token="admin" 即为设置 password 为 admin
./password.ps1
```

## 使用案例

- [Visual Studio Code 配置 LaTex | 笔记 | yiyun's Blog](https://moeci.com/posts/%E5%88%86%E7%B1%BB-%E6%9D%82%E8%AE%B0/vscode-latex-notebook/)


## Related Projects

- [D0n9X1n/hexo-blog-encrypt: Yet, just another hexo plugin for security.](https://github.com/D0n9X1n/hexo-blog-encrypt)
  - 本项目修改自其项目 

## Donate

hexo-encrypt-token is an MIT licensed open source project and completely free to use. However, the amount of effort needed to maintain and develop new features for the project is not sustainable without proper financial backing.

We accept donations through these channels:

- <a href="https://afdian.net/@yiyun" target="_blank">爱发电</a>

## Author

**hexo-encrypt-token** © [yiyun](https://github.com/yiyungent), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by yiyun with help from contributors ([list](https://github.com/yiyungent/hexo-encrypt-token/contributors)).

> GitHub [@yiyungent](https://github.com/yiyungent) Gitee [@yiyungent](https://gitee.com/yiyungent)


