# 这是第一个Vue项目
## 制作首页App组件
1. 完成header区域，使用mint-ui的header组件
2. 制作底部的tab bar区域，mui
+ 在制作购物车图标时要拷贝扩展图标和拓展字体添加到项目中
3. 中间的路由区域放置router-view来展示路由匹配到的组件

## 改造tabbar为 router-link

## 设置路由高亮
路由激活对应的组件时可通过 `linkActiveClass`覆盖默认组件样式

## 点击tabbar中的组件链接，展示对应组件

## 制作首页轮播图

## 加载首页轮播图数据

1. 获取数据，使用vue-resource npm i vue-resource -S
2. 使用 vue-resource 的this.$http.get 获取数据
3. 获取到的数据保存到data中
4. 使用 v-for 循环将数据渲染到每个 iten 项

## 改造九宫格区域的样式