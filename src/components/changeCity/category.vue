<template>
<div class="categroy">
    <dl class="m-categroy">
        <dt>按拼音首字母选择</dt>
        <dd v-for="item in list" :key="item">
            <a :href="'#city-' + item">{{item}}</a>
        </dd>
        
    </dl>
    <dl class="m-categroy-section" :id="'city-'+index" v-for="(item, index) in cityGroup" :key="index">
        <dt>{{index}}</dt>
        <dd> 
            <span v-for="(city) in item" :key="city.id">{{city.name}}</span>
        </dd>
    </dl>
</div>

</template>

<script>
export default {
    data(){
        return {
            list:`ABCDEFGHIJKLMNOPQRSTUVWXYZ`.split(''),
            cityList:[
            ],
            cityGroup: {},

        }
    },
    created(){
        let data = [{
                "id":1,
                "name":"北京",
                "pinyin":"beijing",
                "acronym":"bj",
                "rank":"s",
                "firstChar":"b"
            },{
                "id":10,
                "name":"上海",
                "pinyin":"shanghai",
                "acronym":"sh",
                "rank":"s",
                "firstChar":"s"
            },{
                "id":20,
                "name":"广州",
                "pinyin":"guangzhou",
                "acronym":"gz",
                "rank":"s",
                "firstChar":"g"
            },
            {
                "id":30,
                "name":"深圳",
                "pinyin":"shenzhen",
                "acronym":"sz",
                "rank":"s",
                "firstChar":"s"
            }];
            let obj = {};
            data.forEach((item,index)=>{
                if(!obj[item.firstChar.toUpperCase()]){
                    obj[item.firstChar.toUpperCase()] = [];
                }
                obj[item.firstChar.toUpperCase()].push(item);

            });
             this.cityGroup = obj;
    }
}
</script>

<style lang="scss">
@import "@/assets/css/changecity/categroy.scss"
</style>