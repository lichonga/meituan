<template>
  <div class="m-products-list">
    <ul>
      <li v-for="item in nav" :key="item.key" :class="{'s-nav-active': item.active}">{{item.name}}</li>
    </ul>
    <el-row>
      <item v-for="(item, index) in productList" :key="index" :meta="item" />
    </el-row>
  </div>
</template>
<script>
import Item from "./item.vue";
// import api from '@/api/index.js'
export default {
  data() {
    return {
      nav: [
        {
          key: "s-default",
          name: "智能排序",
          active: true
        },
        {
          key: "s-price",
          name: "价格最低",
          active: false
        },
        {
          key: "s-score",
          name: "人气最高",
          active: false
        },
        {
          key: "s-comment",
          name: "评价最高",
          active: false
        }
      ],
      productList: [{
          image: "https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=a9e671b9a551f3dedcb2bf64a4eff0ec/4610b912c8fcc3cef70d70409845d688d53f20f7.jpg",
          title: "火鸡老店",
          type: "food",
          score: 4.1,
          commentNum: 0,
          comment: [
            {
              username: "100",
              evalaute: "好吃"
            }
          ],
          tab: ["火锅", "沙河"],
          address: "河北石家庄场平行水电费gas通风格栅是的发个",
          avgPrice: 64,
          deal_items: [
            {
              title: "火机烟，建议1-9人使用",
              price: 909,
              counter_price: 1150,
              saleNum: 40,
              price_type: "元"
            }
          ]
        },{
          image: "https://p1.meituan.net/deal/__36496107__6244819.jpg@214w_120h_1e_1c",
          title: "好伦哥（永定路店）",
          type: "food",
          score: 4.1,
          commentNum: 12182,
          comment: [
            {
              username: "75",
              evalaute: "好吃"
            }
          ],
          tab: ["自助", "永定路"],
          address: "北京市永定路",
          avgPrice: 52,
          deal_items: [
            {
              title: "建议1-4人使用",
              price: 23,
              counter_price: 150,
              saleNum: 60,
              price_type: "元"
            }
          ]
        }
      ]
    }
  },
  components: {
    Item
  }
};
</script>

