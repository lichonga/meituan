<template>
    <div class="slide">
      <el-carousel>
         <el-carousel-item v-for="item in imgList" :key="item.img">
            <img :src="item.img" alt="">
         </el-carousel-item>
      </el-carousel>
  
    </div>

</template>

<script>
export default {
    data(){
        return {
            imgList:[{
                url:'sdfasdf',
                img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1022109268,3759531978&fm=26&gp=0.jpg'
            },
            {
                url:'skdfh',
                img:'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg'
            },{
                url: '#ass',
                img: 'http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg'
            }, {
                url: '#vc',
                img: 'http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg'
            }]
        }
    }
}
</script>

<style scoped>

</style>