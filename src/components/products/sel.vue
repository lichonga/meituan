<template>
  <dl id ="s-item" >
    <dt>
      <img :src="list.image" alt="图片" />
    </dt>
    <dd>
      <h3>
        <router-link class='title' to="#">{{list.title}}</router-link>
      </h3>
      <p>
        <el-rate
          class='rate'
          v-model="list.score"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{value}"
        ></el-rate>
        <span class="total">{{list.commentNum}}人评论</span>
      </p>
      <p>
          <span class="addr">{{list.address}}</span>
      </p>
      <p class="pri">
         ￥<span class="price">{{list.price}}</span> 起
      </p>
    </dd>
  </dl>
</template>

<script>
export default {
  props: ["list"]
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/products/sel.scss"
</style>