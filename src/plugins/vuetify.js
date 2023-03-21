import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify, {
  theme:{
    primary:'#9652ff',
    secondary:'#3cd1c2',
    info:'#ffaa2c',
    error:'#f83e70'

  }
});
export default new Vuetify({
    icons: {
        iconfont: 'mdi', 
      },
    
});
