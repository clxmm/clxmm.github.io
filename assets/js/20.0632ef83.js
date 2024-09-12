(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{338:function(s,t,a){"use strict";a.r(t);var n=a(8),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_1-面试题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-面试题"}},[s._v("#")]),s._v(" 1.面试题")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/clxmm/image/img/2024/08/redis202409112244794.png",alt:""}})]),s._v(" "),t("ul",[t("li",[s._v("你只要用缓存，就可能会涉及到redis缓存与数据库双存储双写，你只要是双写，就一定会有数据一致性的问题，那么你如何解决一致性问题？")]),s._v(" "),t("li",[s._v("双写一致性，你先动缓存redis还是数据库mysql哪一个？why？")]),s._v(" "),t("li",[t("strong",[s._v("延时双删")]),s._v("你做过吗？会有哪些问题？")]),s._v(" "),t("li",[s._v("有这么一种情况，微服务查询redis无mysql有，为保证数据双写一致性回写redis你需要注意什么？"),t("strong",[s._v("双检加锁")]),s._v("策略你了解过吗？如何尽量避免缓存击穿？")]),s._v(" "),t("li",[s._v("redis和mysql双写100%会出纰漏，做不到强一致性，你如何保证"),t("strong",[s._v("最终一致性？")])])]),s._v(" "),t("h2",{attrs:{id:"_2缓存双写一致性问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2缓存双写一致性问题"}},[s._v("#")]),s._v(" 2缓存双写一致性问题")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("如果redis中"),t("strong",[s._v("有数据")])]),s._v(" "),t("p",[s._v("需要和数据库中的值相同")])]),s._v(" "),t("li",[t("p",[s._v("如果redis中"),t("strong",[s._v("无数据")])]),s._v(" "),t("p",[s._v("数据库中的值要是最新值，且准备回写redis")])])]),s._v(" "),t("h3",{attrs:{id:"_2-1缓存按照操作来分-细分2种"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1缓存按照操作来分-细分2种"}},[s._v("#")]),s._v(" 2.1缓存按照操作来分，细分2种")]),s._v(" "),t("ul",[t("li",[s._v("只读缓存")]),s._v(" "),t("li",[s._v("读写缓存\n"),t("ul",[t("li",[s._v("同步直写策略\n"),t("ul",[t("li",[s._v("写数据库后也同步写redis缓存，缓存和数据库中的数据⼀致；")]),s._v(" "),t("li",[s._v("对于读写缓存来说，要想保证缓存和数据库中的数据⼀致，就要采⽤同步直写策略")])])]),s._v(" "),t("li",[s._v("异步缓写策略\n"),t("ul",[t("li",[s._v("正常业务运行中，mysql数据变动了，但是可以在业务上容许出现一定时间后才作用于redis，比如仓库、物流系统")]),s._v(" "),t("li",[s._v("异常情况出现了，不得不将失败的动作重新修补，有可能需要借助kafka或者RabbitMQ等消息中间件，实现重试重写")])])])])])]),s._v(" "),t("h3",{attrs:{id:"_2-2-代码实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-代码实现"}},[s._v("#")]),s._v(" 2.2 代码实现")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("问题")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/clxmm/image/img/2024/08/redis202409112244794.png",alt:""}})])]),s._v(" "),t("li",[t("p",[s._v("多个线程同时去查询数据库的这条数据，那么我们可以在第一个查询数据的请求上使用一个 互斥锁来锁住它。")])]),s._v(" "),t("li",[t("p",[s._v("其他的线程走到这一步拿不到锁就等着，等第一个线程查询到了数据，然后做缓存。")])]),s._v(" "),t("li",[t("p",[s._v("后面的线程进来发现已经有缓存了，就直接走缓存。")]),s._v(" "),t("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://cdn.jsdelivr.net/gh/clxmm/image/img/2024/08/redis202409122147382.png"}})]),s._v(" "),t("li",[t("p",[s._v("code")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Service")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Slf4j")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserService")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CACHE_KEY_USER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user:"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Resource")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserMapper")]),s._v(" userMapper"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Resource")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RedisTemplate")]),s._v(" redisTemplate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n     * 业务逻辑没有写错，对于小厂中厂(QPS《=1000)可以使用，但是大厂不行\n     * @param id\n     * @return\n     */")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("User")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("findUserById")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),s._v(" id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("User")]),s._v(" user "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" key "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CACHE_KEY_USER")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//1 先从redis里面查询，如果有直接返回结果，如果没有再去查询mysql")]),s._v("\n        user "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("User")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" redisTemplate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("opsForValue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("user "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//2 redis里面无，继续查询mysql")]),s._v("\n            user "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" userMapper"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("selectByPrimaryKey")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("user "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//3.1 redis+mysql 都无数据")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//你具体细化，防止多次穿透，我们业务规定，记录下导致穿透的这个key回写redis")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" user"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//3.2 mysql有，需要将数据写回redis，保证下一次的缓存命中率")]),s._v("\n                redisTemplate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("opsForValue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("user"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" user"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n     * 加强补充，避免突然key失效了，打爆mysql，做一下预防，尽量不出现击穿的情况。\n     * @param id\n     * @return\n     */")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("User")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("findUserById2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),s._v(" id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("User")]),s._v(" user "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" key "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CACHE_KEY_USER")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//1 先从redis里面查询，如果有直接返回结果，如果没有再去查询mysql，")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 第1次查询redis，加锁前")]),s._v("\n        user "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("User")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" redisTemplate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("opsForValue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("user "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//2 大厂用，对于高QPS的优化，进来就先加锁，保证一个请求操作，让外面的redis等待一下，避免击穿mysql")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("synchronized")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserService")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//第2次查询redis，加锁后")]),s._v("\n                user "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("User")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" redisTemplate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("opsForValue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//3 二次查redis还是null，可以去查mysql了(mysql默认有数据)")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("user "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//4 查询mysql拿数据(mysql默认有数据)")]),s._v("\n                    user "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" userMapper"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("selectByPrimaryKey")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("user "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//5 mysql里面有数据的，需要回写redis，完成数据一致性的同步工作")]),s._v("\n                        redisTemplate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("opsForValue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setIfAbsent")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("user"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7L")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TimeUnit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DAYS")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" user"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br"),t("span",{staticClass:"line-number"},[s._v("64")]),t("br"),t("span",{staticClass:"line-number"},[s._v("65")]),t("br"),t("span",{staticClass:"line-number"},[s._v("66")]),t("br"),t("span",{staticClass:"line-number"},[s._v("67")]),t("br"),t("span",{staticClass:"line-number"},[s._v("68")]),t("br"),t("span",{staticClass:"line-number"},[s._v("69")]),t("br"),t("span",{staticClass:"line-number"},[s._v("70")]),t("br"),t("span",{staticClass:"line-number"},[s._v("71")]),t("br"),t("span",{staticClass:"line-number"},[s._v("72")]),t("br"),t("span",{staticClass:"line-number"},[s._v("73")]),t("br"),t("span",{staticClass:"line-number"},[s._v("74")]),t("br"),t("span",{staticClass:"line-number"},[s._v("75")]),t("br")])])])]),s._v(" "),t("h2",{attrs:{id:"_3-数据库和缓存一致性的解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-数据库和缓存一致性的解决方案"}},[s._v("#")]),s._v(" 3.数据库和缓存一致性的解决方案")]),s._v(" "),t("p",[s._v("目的："),t("strong",[s._v("总之，我们要达到最终一致性！")])]),s._v(" "),t("p",[s._v("给缓存设置过期时间，定期清理缓存并回写，是保证最终一致性的解决方案。")]),s._v(" "),t("p",[s._v("我们可以对存入缓存的数据设置过期时间，所有的"),t("strong",[s._v("写操作以数据库为准")]),s._v("，对缓存操作只是尽最大努力即可。也就是说如果数据库写成功，缓存更新失败，那么只要到达过期时间，则后面的读请求自然会从数据库中读取新值然后回填缓存，达到一致性，切记，要以mysql的数据库写入库为准。")]),s._v(" "),t("h3",{attrs:{id:"_3-1-四种更新策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-四种更新策略"}},[s._v("#")]),s._v(" 3.1 四种更新策略")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("先更新数据库，再更新缓存×")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("异常1")]),s._v(" "),t("ol",[t("li",[s._v("先更新mysql的某商品的库存，当前商品的库存是100，更新为99个。")]),s._v(" "),t("li",[s._v("先更新mysql修改为99成功，然后更新redis")]),s._v(" "),t("li",[s._v("此时假设异常出现，更新redis失败了，这导致mysql里面的库存是99而redis里面的还是100")])])]),s._v(" "),t("li",[t("p",[s._v("异常2")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("【先更新数据库，再更新缓存】，A、B两个线程发起调用")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("【正常逻辑】")])]),s._v(" "),t("p",[s._v("1 A update mysql 100")]),s._v(" "),t("p",[s._v("2 A update redis 100")]),s._v(" "),t("p",[s._v("3 B update mysql 80")]),s._v(" "),t("p",[s._v("4 B update redis 80")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("【异常逻辑】多线程环境下，A、B两个线程有快有慢，有前有后有并行")])]),s._v(" "),t("p",[s._v("1 A update mysql 100")]),s._v(" "),t("p",[s._v("3 B update mysql 80")]),s._v(" "),t("p",[s._v("4 B update redis 80")]),s._v(" "),t("p",[s._v("2 A update redis 100")])]),s._v(" "),t("li",[t("p",[s._v("最终结果，mysql和redis数据不一致，o(╥﹏╥)o，")]),s._v(" "),t("p",[s._v("mysql80,redis100")])])])])])]),s._v(" "),t("li",[t("p",[s._v("先更新缓存，再更新数据库×")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("业务上一般把mysql作为底单数据库，保证最后解释")])]),s._v(" "),t("li",[t("p",[s._v("异常2")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("【先更新缓存，再更新数据库】，A、B两个线程发起调用")]),s._v(" "),t("p",[t("strong",[s._v("正常逻辑】")])]),s._v(" "),t("p",[s._v("1 A update redis 100")]),s._v(" "),t("p",[s._v("2 A update mysql 100")]),s._v(" "),t("p",[s._v("3 B update redis 80")]),s._v(" "),t("p",[s._v("4 B update mysql 80")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("【异常逻辑】多线程环境下，A、B两个线程有快有慢有并行")])]),s._v(" "),t("p",[s._v("A update redis  100")]),s._v(" "),t("p",[s._v("B update redis  80")]),s._v(" "),t("p",[s._v("B update mysql 80")]),s._v(" "),t("p",[s._v("A update mysql 100")]),s._v(" "),t("p",[s._v("----mysql100,redis80")])])])])])]),s._v(" "),t("li",[t("p",[s._v("先删除缓存，再更新数据库×")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("异常为题")]),s._v(" "),t("p",[s._v("（1）请求A进行写操作，删除redis缓存后，工作正在进行中，更新mysql......A还么有彻底更新完mysql，还没commit")]),s._v(" "),t("p",[s._v("（2）请求B开工查询，查询redis发现缓存不存在(被A从redis中删除了)")]),s._v(" "),t("p",[s._v("（3）请求B继续，去数据库查询得到了mysql中的旧值(A还没有更新完)")]),s._v(" "),t("p",[s._v("（4）请求B将旧值写回redis缓存")]),s._v(" "),t("p",[s._v("（5）请求A将新值写入mysql数据库")]),s._v(" "),t("p",[s._v("**上述情况就会导致不一致的情形出现。 **")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("时间")]),s._v(" "),t("th"),s._v(" "),t("th")])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("t1")]),s._v(" "),t("td",[s._v("请求A进行写操作，删除缓存成功后，工作正在mysql进行中......")]),s._v(" "),t("td")]),s._v(" "),t("tr",[t("td",[s._v("t2")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("1 A还没有更新完mysql，导致B读到了旧值")])]),s._v(" "),t("tr",[t("td",[s._v("t3")]),s._v(" "),t("td",[s._v("A更新完mysql数据库的值，over")]),s._v(" "),t("td")])])])]),s._v(" "),t("li",[t("p",[s._v("解决")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("采用延时双删策略")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/clxmm/image/img/2024/08/redis202409122220656.png",alt:""}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/clxmm/image/img/2024/08/redis202409122221018.png",alt:""}})])]),s._v(" "),t("li",[t("p",[s._v("双删方案面试题")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("这个删除该休眠多久呢")]),s._v(" "),t("ul",[t("li",[s._v("第一种方法：根据业务")]),s._v(" "),t("li",[s._v("第二种方法：新启动一个后台监控程序，比如后面要讲解的WatchDog监控程序，会加时")])])]),s._v(" "),t("li",[t("p",[s._v("这种同步淘汰策略，吞吐量降低怎么办？")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/clxmm/image/img/2024/08/redis202409122223065.png",alt:""}})])]),s._v(" "),t("li",[t("p",[s._v("后续看门狗WatchDog源码分析")])])])])])])])]),s._v(" "),t("li",[t("p",[s._v("先更新数据库，再删除缓存⭐")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("异常问题")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("时间")]),s._v(" "),t("th",[s._v("a")]),s._v(" "),t("th",[s._v("b")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("t1")]),s._v(" "),t("td",[s._v("更新数据库中的值......")]),s._v(" "),t("td")]),s._v(" "),t("tr",[t("td",[s._v("t2")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("缓存中立刻命中，此时B读取的是缓存旧值。")])]),s._v(" "),t("tr",[t("td",[s._v("t3")]),s._v(" "),t("td",[s._v("更新缓存的数据，over")]),s._v(" "),t("td")])])])]),s._v(" "),t("li",[t("p",[s._v("业务指导")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/architecture/patterns/cache-aside",target:"_blank",rel:"noopener noreferrer"}},[s._v("微软云"),t("OutboundLink")],1)]),s._v(" "),t("li",[s._v("阿里：上述的订阅binlog程序在mysql中有现成的中间件叫canal，可以完成订阅binlog日志的功能。")])])]),s._v(" "),t("li",[t("p",[s._v("解决方案")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/clxmm/image/img/2024/08/redis202409122226119.png",alt:""}})]),s._v(" "),t("ol",[t("li",[s._v("可以把要删除的缓存值或者是要更新的数据库值暂存到消息队列中（例如使用Kafka/RabbitMQ等）。")]),s._v(" "),t("li",[s._v("当程序没有能够成功地删除缓存值或者是更新数据库值时，可以从消息队列中重新读取这些值，然后再次进行删除或更新。")]),s._v(" "),t("li",[s._v("如果能够成功地删除或更新，我们就要把这些值从消息队列中去除，以免重复操作，此时，我们也可以保证数据库和缓存的数据一致了，否则还需要再次进行重试")]),s._v(" "),t("li",[s._v("如果重试超过的一定次数后还是没有成功，我们就需要向业务层发送报错信息了，通知运维人员。")])])]),s._v(" "),t("li",[t("p",[s._v("答案")]),s._v(" "),t("ul",[t("li",[s._v("最终一致性\n"),t("ul",[t("li",[s._v("流量充值，先下发短信实际充值可能滞后5分钟，可以接受")]),s._v(" "),t("li",[s._v("电商发货，短信下发但是物流明天见")])])])])])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);