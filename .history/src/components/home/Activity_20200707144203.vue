<template>
<!-- 活动版块 -->
 <div>
     <div v-for="(item,index) in activity" :key="index">
         <img :src="item.picUrl" alt="">

     </div>

 </div>
</template>

<script>
 export default {
   name: '',
   props: {
       activity:{
           type:Array
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

</style>