(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{332:function(s,a,e){"use strict";e.r(a);var t=e(8),r=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-是什么"}},[s._v("#")]),s._v(" 1.是什么")]),s._v(" "),a("p",[a("strong",[s._v("官网")]),a("a",{attrs:{href:"https://redis.io/docs/latest/operate/oss_and_stack/management/replication/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Redis replication | Docs"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/clxmm/image/img/2024/08/redis-replica202408202127409.png",alt:""}})]),s._v(" "),a("p",[s._v("就是主从复制，master以写为主，Slave以读为主。")]),s._v(" "),a("h2",{attrs:{id:"_2-能干什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-能干什么"}},[s._v("#")]),s._v(" 2.能干什么")]),s._v(" "),a("ul",[a("li",[s._v("读写分离")]),s._v(" "),a("li",[s._v("容灾恢复")]),s._v(" "),a("li",[s._v("数据备份")]),s._v(" "),a("li",[s._v("水平扩容支撑高并发")])]),s._v(" "),a("h2",{attrs:{id:"_3-如何实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-如何实现"}},[s._v("#")]),s._v(" 3.如何实现")]),s._v(" "),a("p",[a("strong",[s._v("配从(库)不配主(库)")])]),s._v(" "),a("h3",{attrs:{id:"_3-1-权限细节-重要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-权限细节-重要"}},[s._v("#")]),s._v(" 3.1 权限细节，重要")]),s._v(" "),a("ul",[a("li",[s._v("master如果配置了requirepass参数，需要密码登陆")]),s._v(" "),a("li",[s._v("那么slave就要配置masterauth来设置校验密码，否则的话master会拒绝slave的访问请求")])]),s._v(" "),a("h3",{attrs:{id:"_3-2-基本操作命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-基本操作命令"}},[s._v("#")]),s._v(" 3.2 基本操作命令")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("info replication：可以查看复制节点的主从关系和配置信息")])]),s._v(" "),a("li",[a("p",[s._v("replicaof 主库IP 主库端口")]),s._v(" "),a("p",[s._v("​\t一般写入进redis.conf配置文件内")])]),s._v(" "),a("li",[a("p",[s._v("slaveof 主库IP 主库端口")]),s._v(" "),a("ul",[a("li",[s._v("每次与master断开之后，都需要重新连接，除非你配置进redis.conf文件")]),s._v(" "),a("li",[s._v("在运行期间修改slave节点的信息，如果该数据库已经是某个主数据库的从数据库，那么会停止和原主数据库的同步关系"),a("strong",[s._v("转而和新的主数据库同步，重新拜码头")])])])]),s._v(" "),a("li",[a("p",[s._v("slaveof no one")]),s._v(" "),a("ul",[a("li",[s._v("使当前数据库停止与其他数据库的同步，"),a("strong",[s._v("转成主数据库，自立为王")])])])])]),s._v(" "),a("h2",{attrs:{id:"_4-具体操作⭐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-具体操作⭐"}},[s._v("#")]),s._v(" 4."),a("strong",[s._v("具体操作")]),s._v("⭐")]),s._v(" "),a("h3",{attrs:{id:"_4-1-架构说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-架构说明"}},[s._v("#")]),s._v(" 4.1 架构说明")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("一个Master两个Slave")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/clxmm/image/img/2024/08/redis_zc202408202150385.png",alt:""}})])]),s._v(" "),a("li",[a("p",[s._v("拷贝多个redis.conf文件")]),s._v(" "),a("ul",[a("li",[s._v("redis6379.conf")]),s._v(" "),a("li",[s._v("redis6380.conf")]),s._v(" "),a("li",[s._v("redis6381.conf")])])]),s._v(" "),a("li",[a("p",[s._v("三边网络相互ping通且注意防火墙配置")])])]),s._v(" "),a("h3",{attrs:{id:"_4-2-三大命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-三大命令"}},[s._v("#")]),s._v(" 4.2 三大命令")]),s._v(" "),a("p",[a("strong",[s._v("主从复制")])]),s._v(" "),a("ul",[a("li",[s._v("replicaof 主库IP 主库端口")]),s._v(" "),a("li",[s._v("配从(库)不配主(库)")])]),s._v(" "),a("p",[a("strong",[s._v("改换门庭")])]),s._v(" "),a("ul",[a("li",[s._v("slaveof 新主库IP 新主库端口")])]),s._v(" "),a("p",[a("strong",[s._v("自立为王")])]),s._v(" "),a("ul",[a("li",[s._v("slaveof no one")])]),s._v(" "),a("p",[a("strong",[s._v("修改配置")]),s._v("-redis6379.conf为例，步骤")]),s._v(" "),a("ol",[a("li",[s._v("开启daemonize yes")]),s._v(" "),a("li",[s._v("注释掉bind 127.0.0.1")]),s._v(" "),a("li",[s._v("protected-mode no")]),s._v(" "),a("li",[s._v("指定端口")]),s._v(" "),a("li",[s._v("指定当前工作目录，dir")]),s._v(" "),a("li",[s._v("pid文件名字,pidfile")]),s._v(" "),a("li",[s._v("log文件名字,logfile")]),s._v(" "),a("li",[s._v("requirepass")]),s._v(" "),a("li",[s._v("dump.rdb名字")]),s._v(" "),a("li",[s._v("aof文件,appendfilename")]),s._v(" "),a("li",[s._v("从机访问主机的通行密码masterauth，必须。从机需要配置，主机不用")])]),s._v(" "),a("p",[a("strong",[s._v("从机配置")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("528")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# replicaof <masterip> <masterport>")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("529")]),s._v(" replicaof "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("530")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("531")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# If the master is password protected (using the "requirepass" configuration')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("532")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# directive below) it is possible to tell the replica to authenticate before")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("533")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# starting the replication synchronization process, otherwise the master will")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("534")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# refuse the replica request.")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("535")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("536")]),s._v(" masterauth 123456abc\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h3",{attrs:{id:"_4-3-常用演示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-常用演示"}},[s._v("#")]),s._v(" 4.3 常用演示")]),s._v(" "),a("h4",{attrs:{id:"_4-3-1-一主二仆"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-1-一主二仆"}},[s._v("#")]),s._v(" 4.3.1 "),a("strong",[s._v("一主二仆")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("方案1：配置文件固定写死")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("配置文件执行： "),a("code",[s._v("replicaof 主库ip 主库port")])])]),s._v(" "),a("li",[a("p",[s._v("配从(库)不配主(库)")]),s._v(" "),a("ul",[a("li",[s._v("配置从机6380")]),s._v(" "),a("li",[s._v("配置从机6381")])])]),s._v(" "),a("li",[a("p",[s._v("先master后两台slave依次启动")])]),s._v(" "),a("li",[a("p",[s._v("主从关系查看")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("日志")]),s._v(" "),a("div",{staticClass:"language-log line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-log"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("19522")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("S "),a("span",{pre:!0,attrs:{class:"token date number"}},[s._v("20 Aug 2024")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token time number"}},[s._v("22:38:41.558")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" Connecting to MASTER "),a("span",{pre:!0,attrs:{class:"token ip-address constant"}},[s._v("192.168.1.105")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("19522")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("S "),a("span",{pre:!0,attrs:{class:"token date number"}},[s._v("20 Aug 2024")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token time number"}},[s._v("22:38:41.558")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" MASTER "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" REPLICA sync started\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("命令:info replication")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("主机")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("nps2-r:db"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v(">")]),s._v(" info replication\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Replication")]),s._v("\nrole:master\nconnected_slaves:2\nslave0:ip"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1,port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6380")]),s._v(",state"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("online,offset"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("714")]),s._v(",lag"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nslave1:ip"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1,port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6381")]),s._v(",state"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("online,offset"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("714")]),s._v(",lag"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nmaster_failover_state:no-failover\nmaster_replid:3a8b4fa7e426f528c3121da5dfbf57ef0a7da109\nmaster_replid2:0000000000000000000000000000000000000000\nmaster_repl_offset:714\nsecond_repl_offset:-1\nrepl_backlog_active:1\nrepl_backlog_size:1048576\nrepl_backlog_first_byte_offset:1\nrepl_backlog_histlen:714\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("从机")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("nps2-r22:db"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v(">")]),s._v(" info replication\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Replication")]),s._v("\nrole:slave\nmaster_host:127.0.0.1\nmaster_port:6379\nmaster_link_status:up\nmaster_last_io_seconds_ago:6\nmaster_sync_in_progress:0\nslave_read_repl_offset:784\nslave_repl_offset:784\nslave_priority:100\nslave_read_only:1\nreplica_announced:1\nconnected_slaves:0\nmaster_failover_state:no-failover\nmaster_replid:3a8b4fa7e426f528c3121da5dfbf57ef0a7da109\nmaster_replid2:0000000000000000000000000000000000000000\nmaster_repl_offset:784\nsecond_repl_offset:-1\nrepl_backlog_active:1\nrepl_backlog_size:1048576\nrepl_backlog_first_byte_offset:715\nrepl_backlog_histlen:70\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])])])])])])])])])]),s._v(" "),a("p",[a("strong",[s._v("主机写数据，从机也能复制到数据")])]),s._v(" "),a("p",[a("strong",[s._v("2.主从问题演示")])]),s._v(" "),a("ol",[a("li",[a("p",[s._v("从机可以执行写命令吗？不可以")])]),s._v(" "),a("li",[a("p",[s._v("从机切入点问题：")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("slave是从头开始复制还是从切入点开始复制?")]),s._v(" "),a("p",[s._v("master启动，写到k3")]),s._v(" "),a("p",[s._v("slave1跟着master同时启动，跟着写到k3")]),s._v(" "),a("p",[s._v("slave2写到k3后才启动，那之前的是否也可以复制？")]),s._v(" "),a("p",[s._v("Y，首次一锅端，后续跟随，master写，slave跟")])])])]),s._v(" "),a("li",[a("p",[s._v("主机shutdown后，从机会上位吗？")]),s._v(" "),a("p",[s._v("​\t主机shutdown后情况如何？从机是上位还是原地待命")]),s._v(" "),a("p",[s._v("​\t从机不动，原地待命，从机数据可以正常使用；等待主机重启动归来")])]),s._v(" "),a("li",[a("p",[s._v("主机shutdown后，重启后主从关系还在吗？青山依旧在")])]),s._v(" "),a("li",[a("p",[s._v("某台从机down后，master继续，从机重启后它能跟上大部队吗？可以的")])])]),s._v(" "),a("p",[a("strong",[s._v("3.方案2：命令操作手动指定")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("从机停机去掉配置文件中的配置项，3台目前都是主机状态，各不从属")])]),s._v(" "),a("li",[a("p",[s._v("3台master")])]),s._v(" "),a("li",[a("p",[s._v("预设的从机上执行命令")]),s._v(" "),a("ul",[a("li",[a("p",[a("code",[s._v("slaveof 主库IP 主库port")])])]),s._v(" "),a("li",[a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/clxmm/image/img/2024/08/redisfz202408212205945.png",alt:""}})])]),s._v(" "),a("li",[a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/clxmm/image/img/2024/08/redis-fz3202408212r206566.png",alt:""}})])]),s._v(" "),a("li",[a("p",[s._v("用命令使用的话，2台从机重启后，关系还在吗？")]),s._v(" "),a("p",[s._v("不在了")])])])])]),s._v(" "),a("p",[a("strong",[s._v("区别")])]),s._v(" "),a("ul",[a("li",[s._v("配置，持久稳定")]),s._v(" "),a("li",[s._v("命令，当次生效")])]),s._v(" "),a("h4",{attrs:{id:"_4-3-2-薪火相传"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-2-薪火相传"}},[s._v("#")]),s._v(" 4.3.2 薪火相传")]),s._v(" "),a("ul",[a("li",[s._v("上一个slave可以是下一个slave的master，slave同样可以接收其他slaves的连接和同步请求，那么该slave作为了链条中下一个的master,可以有效减轻主master的写压力")]),s._v(" "),a("li",[s._v("中途变更转向:会清除之前的数据，重新建立拷贝最新的")]),s._v(" "),a("li",[s._v("slaveof 新主库IP 新主库端口")])]),s._v(" "),a("h4",{attrs:{id:"_4-3-3-反客为主"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-3-反客为主"}},[s._v("#")]),s._v(" 4.3.3 反客为主")]),s._v(" "),a("p",[a("code",[s._v("SLAVEOF no one")]),s._v(" 使当前数据库停止与其他数据库的同步，转成主数据库")]),s._v(" "),a("h2",{attrs:{id:"_5-复制原理和工作流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-复制原理和工作流程"}},[s._v("#")]),s._v(" 5.复制原理和工作流程")]),s._v(" "),a("ul",[a("li",[s._v("slave启动，同步初请\n"),a("ul",[a("li",[s._v("slave启动成功连接到master后会发送一个sync命令")]),s._v(" "),a("li",[s._v("slave首次全新连接master,一次完全同步（全量复制)将被自动执行，slave自身原有数据会被master数据覆盖清除")])])]),s._v(" "),a("li",[s._v("首次连接，全量复制\n"),a("ul",[a("li",[s._v("master节点收到sync命令后会开始在后台保存快照(即RDB持久化，主从复制时会触发RDB)，同时收集所有接收到的用于修改数据集命令缓存起来，master节点执行RDB持久化完后，master将rdb快照文件和所有缓存的命令发送到所有slave,以完成一次完全同步。而slave服务在接收到数据库文件数据后，将其存盘并加载到内存中，从而完成复制初始化")])])]),s._v(" "),a("li",[s._v("心跳持续，保持通信\n"),a("ul",[a("li",[a("code",[s._v("repl-ping-replica-period 10")]),s._v(" master发出PING包的周期，默认是10秒")])])]),s._v(" "),a("li",[s._v("进入平稳，增量复制\n"),a("ul",[a("li",[s._v("Master继续将新的所有收集到的修改命令自动依次传给slave,完成同步")])])]),s._v(" "),a("li",[s._v("从机下线，重连续传\n"),a("ul",[a("li",[s._v("master会检查backlog里面的offset，master和slave都会保存一个复制的offset还有一个masterId，offset是保存在backlog中的。"),a("strong",[s._v("Master只会把已经复制的offset后面的数据复制给Slave")]),s._v(",，类似断点续传")])])])]),s._v(" "),a("h2",{attrs:{id:"_6-复制的缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-复制的缺点"}},[s._v("#")]),s._v(" 6.复制的缺点")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("复制的缺点")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("由于所有的写操作都是先在Master上操作，然后同步更新到Slave上，所以从Master同步到Slave机器有一定的延迟，当系统很繁忙的时候，延迟问题会更加严重，Slave机器数量的增加也会使这个问题更加严重。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/clxmm/image/img/2024/08/redis-fz4202408212218815.png",alt:""}})])])])]),s._v(" "),a("li",[a("p",[s._v("master挂了如何办？")]),s._v(" "),a("ul",[a("li",[s._v("默认情况下，不会在slave节点中自动重选一个master")]),s._v(" "),a("li",[s._v("那每次都要人工干预？"),a("strong",[s._v("无人值守安装变成刚需")])])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);