<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img
          src="https://s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png"
          alt="美团"
          @click="gohome"
        />
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input
            placeholder="搜索商家或地点"
            v-model="ainput"
            @focus="focus"
            @blur="blur"
            clearable
          ></el-input>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item,index) in hotPlaceList" :key="index+'_'+index">
              <router-link :to="{name: 'goods', params: {name: item}}">{{item}}</router-link>
            </dd>
          </dl>
          <dl class="searchList" v-if="isSearchList">
            <dd v-for="(item,index) in searchList" :key="index">
              <router-link :to="{name: 'goods', params: {name:item}}">{{item}}</router-link>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <router-link
            v-for="(item,index) in suggestList"
            :key="item +'~' + index"
            :to="{name: 'goods', params:{name:item}}"
          >{{item}}</router-link>
        </p>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ainput: "",
      isFocus: false,
      hotPlaceList: ["苹果", "华为", "三星", "中兴", "酷派", "OPPLEgsfg"],
      searchList: ['火锅','火锅自助餐', '外卖','烤红薯'],
      suggestList: ["苹果", "华为", "三星", "中兴", "酷派", "OPPLE"]
    };
  },
  computed: {
    isHotPlace: function() {
      return this.isFocus && !this.ainput;
    },
    isSearchList: function() {
      return this.isFocus && this.ainput;
    }
  },
  methods: {
    focus() {
      this.isFocus = true;
    },
    blur() {
      let self = this;
      setTimeout(function() {
        self.isFocus = false;
      }, 200);
    },
    gohome() {
      this.$router.push({ name: "default" }).catch(err => {
        err;
      });
    }
  }
};
</script>