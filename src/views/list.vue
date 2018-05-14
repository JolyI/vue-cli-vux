<template>
  <div class="list">
      <grid :cols="3" :show-lr-borders="true">
          <grid-item lable="Grid" v-for="i in 9" :label="str" :icon="imgurl">
          </grid-item>
      </grid>
  </div>
</template>
<script>
import {Grid,GridItem} from 'vux'
export default {
  components :{
      Grid,
      GridItem
  },
  data(){
      return {
          str:'测试',
          imgurl:'http://img.hb.aicdn.com/3aff1a932405ca4ee2a8392d351a0aa016846d401e358-keGE6s_fw658',
      }
  }

}
</script>

