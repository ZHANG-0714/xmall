<template>
<!-- 官方精选 品牌周边 品牌精选 -->
 <div>
     <div class="hot">{{brand}}</div>
     <!-- 官方精选 -->
     <div v-for="(item,index) in selected.slice(0,1)" :key="index">
         <div>
             <img :src="item.picUrl" alt="" class="imgs">
         </div>
     </div>
     <div v-for="(item,index) in selected.slice(1,2)" :key="index">
         <div>
             <img :src="item.picUrl" alt="" class="img">
         </div>
     </div>

 </div>
</template>

<script>
 export default {
   name: '',
   props: {
       selected:{
           type: Array
       },
       brand:{
           type :String
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
.hot {
  width: 100%;
  line-height: 60px;
  background: #f3f3f3;
  border: 0.5px solid rgb(216, 215, 215);
  margin-top: 30px;
  padding-left: 30px;
  border-radius: 10px 10px 0 0;
  font-size: 18px;
}
.imgs{
    width: 609px;
    height: 403px;
}
</style>