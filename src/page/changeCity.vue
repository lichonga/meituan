<template>
  <div class="page-changeCity">
    <el-row>
      <province />
    </el-row>
    <el-row>
      <hot title="热门城市" :list="hotList" />
    </el-row>
    <el-row>
      <hot title="最近访问" :list="rencentList" />
    </el-row>
    <el-row>
      <Category />
    </el-row>
  </div>
</template>

<script>
import Province from "@/components/changeCity/province.vue";
import Hot from "@/components/changeCity/hot.vue";
import Category from "@/components/changeCity/category.vue";
export default {
  data() {
    return {
      rencentList: ["山东", "浙江", "沈阳", "河北", "河南", "山西", "湛江"],
      hotList: ["山东","浙江","沈阳","河北","河南","山西","湛江","浙江","浙江","沈阳","河北","河南","山西" ]
    };
  },
  components: {
    Province,
    Hot,
    Category
  }
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/hot.scss";
</style>