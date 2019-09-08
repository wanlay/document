(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{177:function(a,s,e){"use strict";e.r(s);var t=e(0),n=Object(t.a)({},(function(){var a=this.$createElement;this._self._c;return this._m(0)}),[function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"mysql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql","aria-hidden":"true"}},[a._v("#")]),a._v(" mysql")]),e("h2",{attrs:{id:"查看编码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看编码","aria-hidden":"true"}},[a._v("#")]),a._v(" 查看编码")]),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("show")]),a._v(" variables "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("like")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'character%'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 或者")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("show")]),a._v(" variables "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("like")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'collation%'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),e("h2",{attrs:{id:"查看模式-sql-mode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看模式-sql-mode","aria-hidden":"true"}},[a._v("#")]),a._v(" 查看模式 sql_mode")]),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("select")]),a._v(" @"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("@sql_mode")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),e("h2",{attrs:{id:"mysql-cnf"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql-cnf","aria-hidden":"true"}},[a._v("#")]),a._v(" mysql.cnf")]),e("p",[a._v("位于"),e("code",[a._v("/etc/mysql/mysql.conf.d/mysql.cnf")])]),e("div",{staticClass:"language-conf extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("# sql模式，默认为以下加上ONLY_FULL_GROUP_BY \nsql_mode=STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION\n\n# 事务的隔离级别\n# 读取提交内容\ntransaction-isolation=READ-COMMITTED\n\nwait_timeout=2073600\n\n## 设置远程可连接\nbind-address = 0.0.0.0\n\n# 大小写敏感，1：不区分大小写\n# windows默认为 1\nlower_case_table_names = 1\n")])])]),e("h2",{attrs:{id:"example-conf"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-conf","aria-hidden":"true"}},[a._v("#")]),a._v(" example conf")]),e("div",{staticClass:"language-conf extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("[client]\nport = 3306\nsocket = /tmp/mysql.sock\ndefault-character-set = utf8\n\n[mysql]\nprompt=\"MySQL [\\d]> \"\nno-auto-rehash\n\n[mysqld]\nport = 3306\nsocket = /tmp/mysql.sock\nlower_case_table_names = 1     ## ++\nbasedir = /usr/local/mysql\ndatadir = /data/mysql\npid-file = /data/mysql/mysql.pid\nuser = mysql\nbind-address = 0.0.0.0         \nserver-id = 1\n\ninit-connect = 'SET NAMES utf8'  ##++\ncharacter-set-server = utf8      ##++\nskip-name-resolve\n#skip-networking\nback_log = 300\n\nmax_connections = 85\nmax_connect_errors = 6000\nopen_files_limit = 65535\ntable_open_cache = 128\nmax_allowed_packet = 500M\nbinlog_cache_size = 1M\nmax_heap_table_size = 8M\ntmp_table_size = 16M\n\nread_buffer_size = 2M\nread_rnd_buffer_size = 8M\n\n")])])])])}],!1,null,null,null);s.default=n.exports}}]);