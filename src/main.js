import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import IonicVue from '@ionic/vue';
import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(IonicVue);

new Vue({
  render: h => h(App),
}).$mount('#app');
