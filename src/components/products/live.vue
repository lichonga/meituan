<template>
  <div class="live">
    <div class="header">
      <img src="@/assets/img/1.jpg" alt />
    </div>
    <div class="sel">
      <sel v-for="(item, index) in list" :key = "index" :list="item"  />
    </div>
  </div>
</template>

<script>
import Sel from "./sel.vue";
export default {
  data() {
      return {
          list:[{
              image:'https://p0.meituan.net/scarlett/7116a4ec9f556e5a52b3dd9f5f286cce322856.png@190w_106h_1e_1c',
              title: '火炉火烤烤肉，芝士排骨',
              score: 4.5,
              commentNum: '4',
              address: '顺义城区',
              price: 121
          },{
            image:'https://p0.meituan.net/deal/__26218156__8593562.jpg@190w_106h_1e_1c',
              title: '真金子纸上烤肉（双桥店）',
              score: 4,
              commentNum: '4151',
              address: '双桥',
              price: 63.0
          },{
            image:'https://p1.meituan.net/msmerchant/a37ca3db6263ca6543322b9f7feabe89587705.jpg@190w_106h_1e_1c',
              title: '新辣道鱼火锅（通州罗斯福店）',
              score: 4.5,
              commentNum: '2180',
              address: '通州',
              price: 50
          }]
      }
  },
  components: {
    Sel
  }
};
</script>

<style lang='scss' spend>
@import "@/assets/css/products/live.scss";
</style>