<template>
  <!-- 轮播图 -->
  <div class="rotation">
    <div class="loop">
      <Carousel v-model="value1" loop>
        <div v-for="(item,index) in rotation" :key="index">
          <CarouselItem>
            <img :src="item.picUrl" alt class="picUrl" />
            <img :src="item.picUrl2" alt class="picUrl2" />
            <img :src="item.picUrl3" alt class="picUrl3" />
          </CarouselItem>
        </div>
      </Carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      value1: 0,
      rotation: []
    };
  },
  methods: {},
  mounted() {
    this.$api
      .getHome()
      .then(res => {
        this.rotation = res.data[0].panelContents;
        console.log(this.rotation);
      })
      .catch(err => {
        console, log(err);
      });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.rotation{
   width: 100%;
   height: 500px;
   margin-top: 50px;
}
.loop {
  width: 1250px;
  height: 500px;
}
.picUrl {
    width: 90%;
    height: 500px;
    position: relative;
}
.picUrl2{
     width: 90%;
     height: 600px;
   position: relative; 
   top: -500px;
}
.picUrl3{
     width: 90%;
   position: relative; 
   top: 0;
}
</style>