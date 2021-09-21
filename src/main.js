import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//!按需引入Vant
import {Form,Field,Overlay,Image as VanImage,SubmitBar,Card,CheckboxGroup,Checkbox,Cell,List,Icon,Row,Col,Toast,Button,Tabbar, TabbarItem,Search,Swipe,SwipeItem,Grid,GridItem,Sidebar,SidebarItem,Divider } from 'vant';
Vue.use(Button);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Search);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(Divider);
Vue.use(Toast);
Vue.use(Col);
Vue.use(Row);
Vue.use(Icon);
Vue.use(List);
Vue.use(Cell);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Card);
Vue.use(SubmitBar);
Vue.use(VanImage);
Vue.use(Overlay);
Vue.use(Form);
Vue.use(Field);



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
