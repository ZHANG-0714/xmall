<template>
<!-- 热门商品 -->
 <div>
     <div class="hot">热门商品</div>
     <div v-for="(item,index) in hot" :key="index">
         <img :src="item.picUrl" alt="">
     </div>

 </div>
</template>

<script>
 export default {
   name: '',
   props: {
       hot:{
           type: Array
       }
   },
   components: {

   },
   data () {
     return {

     }
   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.hot{
    width: 100%;
    line-height: 60px;
    background: #F3F3F3;
    border: 0.5px solid rgb(216, 215, 215);
    margin-top: 30px;
    padding-left: 30px;
    border-radius: 10px 10px 0 0;
    font-size: 18px;

}
</style>