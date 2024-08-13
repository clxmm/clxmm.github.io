(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{329:function(s,a,e){"use strict";e.r(a);var r=e(8),t=Object(r.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-文档"}},[s._v("#")]),s._v(" 1.文档")]),s._v(" "),a("p",[a("strong",[s._v("官网")]),s._v(" "),a("a",{attrs:{href:"https://redis.io/docs/manual/persistence/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://redis.io/docs/manual/persistence/"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("中文官网："),a("a",{attrs:{href:"https://redis.com.cn/topics/persistence.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Redis持久化"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"_2-redis持久化方案-rdb和aof"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-redis持久化方案-rdb和aof"}},[s._v("#")]),s._v(" 2.Redis持久化方案（RDB和AOF）")]),s._v(" "),a("p",[a("img",{attrs:{src:"/img/redis/redis-aop-rdf.png",alt:""}})]),s._v(" "),a("h3",{attrs:{id:"_2-1-rdb-redis-database"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-rdb-redis-database"}},[s._v("#")]),s._v(" 2.1 RDB（Redis DataBase）")]),s._v(" "),a("ul",[a("li",[s._v("RDB（Redis 数据库）：RDB 持久性以指定的时间间隔执行数据集的时间点快照。")]),s._v(" "),a("li",[s._v("实现类似照片记录效果的方式，就是把某一时刻的数据和状态以文件的形式写到磁盘上，也就是快照。这样一来即使故障宕机，快照文件也不会丢失，数据的可靠性也就得到了保证。这个快照文件就称为RDB文件(dump.rdb)，其中，RDB就是Redis DataBase的缩写。")]),s._v(" "),a("li",[s._v("在指定的时间间隔内将内存中的数据集快照写入磁盘，也就是行话讲的Snapshot内存快照，它恢复时再将硬盘快照文件直接读回到内存里")]),s._v(" "),a("li",[s._v("Rdb保存的是dump.rdb文件")])]),s._v(" "),a("h4",{attrs:{id:"_2-1-1-使用说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-使用说明"}},[s._v("#")]),s._v(" 2.1.1 使用说明")]),s._v(" "),a("p",[s._v("查找配置文件中"),a("code",[s._v("SNAPSHOTTING")]),s._v("的配置")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("自动触发配置")]),s._v(" "),a("ul",[a("li",[s._v("修改配置文件")])]),s._v(" "),a("div",{staticClass:"language-conf line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 触发规则，5s内有两次变动\nsave 5 2\n\n# 默认保存文件的名称\ndbfilename dump.rdb\n\n# 配置dump文件的保存位置。默认 ./\ndir ./back\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("ul",[a("li",[s._v("重启服务")])]),s._v(" "),a("div",{staticClass:"language-redis line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('127.0.0.1:6379> CONFIG get dir\n1) "dir"\n2) "/home/app/redis/redis-7.0.0/back"\n127.0.0.1:6379> CONFIG get save\n1) "save"\n2) "5 2"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("ul",[a("li",[a("p",[s._v("触发")]),s._v(" "),a("p",[s._v("再5s内设置两个值")])]),s._v(" "),a("li",[a("p",[s._v("恢复")]),s._v(" "),a("ol",[a("li",[s._v("备份dump.rdb")]),s._v(" "),a("li",[s._v("清空数据库")]),s._v(" "),a("li",[s._v("停止redis服务")]),s._v(" "),a("li",[s._v("用备份的dump文件替换redis服务的dump")]),s._v(" "),a("li",[s._v("启动服务，数据恢复")])])]),s._v(" "),a("li",[a("p",[s._v("手动触发")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("Redis提供了两个命令来⽣成RDB⽂件，分别是save和bgsave")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("save")]),s._v(": 在主程序中执⾏"),a("strong",[s._v("会阻塞")]),s._v(" ,当前redis服务器，直到持久化工作完成")])]),s._v(" "),a("li",[a("p",[s._v("使用save")]),s._v(" "),a("div",{staticClass:"language-redis line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("set k1 v1\nsave\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("c(默认)")])]),s._v(" "),a("li",[a("p",[s._v("Redis会在后台异步进行快照操作，"),a("strong",[s._v("不阻塞")]),s._v(",快照同时还可以响应客户端请求,该触发方式会fork一个子进程由子进程复制持久化过程。")])]),s._v(" "),a("li",[a("p",[s._v("Redis会使用bgsave对当前内存中的所有数据做快照，这个操作是子进程在后台完成的，这就允许主进程同时可以修改数据。")])]),s._v(" "),a("li",[a("p",[s._v("使用")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" k1 k2\nsave\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("可以通过lastsave命令获取最后一次成功执行快照的时间")])])])])])])]),s._v(" "),a("h3",{attrs:{id:"_2-2-aof-append-only-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-aof-append-only-file"}},[s._v("#")]),s._v(" 2.2 AOF（Append Only File）")])])}),[],!1,null,null,null);a.default=t.exports}}]);