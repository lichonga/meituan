<template>
  <div>
    <span class="name">按省份选择:</span>
    <m-select
      :list="provinceList"
      title="省份"
      :value="province"
      :sw="provinceActive"
      @change_active="changeWrapperActive"
      @change="changeProvince"
    ></m-select>
    <m-select
      :list="cityList"
      title="城市"
      :value="city"
      :sw="cityActive"
      @change_active="changeCityActive"
      @change="changeCity"
    ></m-select>
    <span>直接搜索:</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option v-for="(item, index) in searchList" :key="item+index" :label="item" :value="item"></el-option>
    </el-select>
  </div>
</template>

<script>
import MSelect from "./select";
export default {
  data() {
    return {
      provinceList: [ "山东", "浙江","沈阳","河北","浙江","沈阳","河北","河南","山西","河南","湛江","浙江"
      ],
      province: "省份",
      cityList: [ "山东","浙江","沈阳","河北","河南","湛江","浙江","沈阳","河北","河南","山西"
      ],
      city: "城市",
      cityActive: false,
      searchWord: "",
      provinceActive: false,
      loading: false,
      searchList: ["河北","河南","山西","湛江","浙江","浙江","沈阳","河北","河南","山西","湛江","浙江","浙江",
        "沈阳","河北","河南","山西","湛江","浙江","沈阳","河北","河南","山西","湛江","浙江"
      ]
    };
  },
  components: {
    MSelect
  },
  methods: {
    changeWrapperActive(flag) {
      this.provinceActive = flag;
      if (flag) {
        this.cityActive = false;
      }
    },
    changeCityActive(flag) {
      this.cityActive = flag;
      if (flag) {
        this.provinceActive = false;
      }
    },
    changeProvince(val) {
      this.province = val;
    },
    changeCity(val) {
      this.city = val;
    },
    remoteMethod(val) {
      //请求后端接口
      console.log(val);
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>