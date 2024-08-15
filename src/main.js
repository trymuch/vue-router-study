// 这是一个总的js模块，其他的模块都引入到了改模块中
// 这个js文件被引入到了index.html中
import "@/assets/main.less";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// 创建web应用实例
const app = createApp(App);
// 注册路由器实例
app.use(router);
// 将app挂载到app元素上
app.mount("#app");