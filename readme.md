几个概念：

1.$router 我们new出来的vue-router，以下称_router

2.$route _router.history.current 由match匹配得到, match调用了createRoute

3.location： 根据Url生成

4.matcher: 只有两个方法,match 和 addRoutes

5.RouteRecord： 根据我们填进去的config生成的记录

TODO:

query support

params support

asyncComponents support

base,name,props support