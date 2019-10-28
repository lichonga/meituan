<template>
  <div class="m-istyle">
    <dl @mouseover="over">
      <dt>{{nav.title}}</dt>
      <dd
        v-for="(item, index) in nav.list"
        :key="index"
        :class="{active:kind == item.tab}"
        :data-type="item.tab"
      >{{item.text}}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item, index) in list" :key="index">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="item.image" class="image" />
          <div class="cbody">
            <div class="poi-info">
              <div class="title" :title="item.atitle">{{item.atitle}}</div>
              <div class="sub-title" :title="item.sub_title">{{item.sub_title}}</div>
              <div class="price-info" v-if="item.rentNum && item.price_info.current_price">
                <span class="current-price-wrapper">
                  <span class="price-symbol numfont">¥</span>
                  <span class="current-price numfont">{{item.price_info.current_price}}</span>
                </span>
                <span class="old-price">门市价¥{{item.price_info.old_price}}</span>
                <span class="sold bottom-right-info">{{item.address}}</span>
              </div>
              <div class="price-info" v-if="!item.rentNum">
                <span class="current-price-wrapper">
                  <span class="price-symbol numfont"></span>
                  <span class="current-price numfont">抢光了</span>
                </span>
              </div>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["nav"],
  data() {
    return {
      kind: "all",
       list: [{
        image:'https://p0.meituan.net/msmerchant/0a56a205c9a62ac5df50900dc412b2b01651570.jpg@368w_208h_1e_1c',
        atitle:'幸福西饼生日蛋糕店（马家楼店）',
        sub_title:'全心全意/提拉米苏（2选1）1个，约2磅，心形',
        address:'草桥/公益西桥',
        rentNum:10,
        price_info:{
          current_price:120,
          old_price:200
        }
      },{
        image:'https://p0.meituan.net/msmerchant/0a56a205c9a62ac5df50900dc412b2b01651570.jpg@368w_208h_1e_1c',
        atitle:'幸福西饼生日蛋糕店（马家楼店）',
        sub_title:'全心全意/提拉米苏（2选1）1个，约2磅，心形',
        address:'草桥/公益西桥',
        rentNum:10,
        price_info:{
          current_price:120,
          old_price:200
        }
      },{
        image:'https://p0.meituan.net/msmerchant/0a56a205c9a62ac5df50900dc412b2b01651570.jpg@368w_208h_1e_1c',
        atitle:'幸福西饼生日蛋糕店（马家楼店）',
        sub_title:'全心全意/提拉米苏（2选1）1个，约2磅，心形',
        address:'草桥/公益西桥',
        rentNum:10,
        price_info:{
          current_price:120,
          old_price:200
        }
      }]
    };
  },

  methods: {
    over(e) {
      var dom = e.target;
      var tagName = dom.tagName.toLowerCase();
      if (tagName != "dd") {
        return false;
      }
      this.kind = dom.getAttribute("data-type");
      //动态获取ajax请求更改list；
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>