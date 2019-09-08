(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{162:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),a("p",[a("router-link",{attrs:{to:"/others/nginx.html#安装"}},[t._v("nginx 安装")])],1)]),t._m(3),t._m(4),t._m(5),t._m(6),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),a("p",[a("router-link",{attrs:{to:"/linux/others/software-install.html#centos"}},[t._v("centos 安装 nodejs")])],1)]),t._m(7),t._m(8),t._m(9),a("p",[t._v("后台运行ghost")]),t._m(10)])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"ghsot安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ghsot安装","aria-hidden":"true"}},[this._v("#")]),this._v(" ghsot安装")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),s("p",[this._v("基于Centos")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"安装nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装nginx","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装nginx")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"配置nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置nginx","aria-hidden":"true"}},[this._v("#")]),this._v(" 配置nginx")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("vim /etc/nginx/conf.d/ghost.conf")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v(" wanlay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v("   X"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Real"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("IP "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_addr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v("   Host      "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_pass")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2368")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"安装node-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装node-js","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装Node.js")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"安装-ghost"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-ghost","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装 ghost")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -L https://ghost.org/zip/ghost-latest.zip -o ghost.zip  \n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p /var/www/html/ghost\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("unzip")]),t._v(" -uo  ghost.zip -d /var/www/html/ghost  \n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" -R nginx:nginx /var/www/html/ghost/  \n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /var/www/html/ghost/  \n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --production  \n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" config.example.js config.js  \n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" config.js\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"安装pm2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装pm2","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装PM2")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g pm2  \n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("NODE_ENV")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("production pm2 start index.js --name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ghost"')]),t._v("  \npm2 startup centos  \npm2 save\nsystemctl restart nginx\n")])])])}],!1,null,null,null);s.default=e.exports}}]);