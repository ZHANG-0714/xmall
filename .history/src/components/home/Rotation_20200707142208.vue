<template>
  <!-- 轮播图 -->
  <div>
    <Carousel v-model="value1" loop class="arr">
      <div v-for="(item,index) in rotation" :key="index">
        <CarouselItem>
          <img :src="item.picUrl" alt class="picUrl" />
          <img :src="item.picUrl2" alt class="picUrl2" />
          <img :src="item.picUrl3" alt class="picUrl3" />
        </CarouselItem>
      </div>
    </Carousel>
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
.arr {
  width: 99.9%;
  height: 520px;
}
.picUrl {
  width: 100%;
  height: 500px;
  position: relative;
  border-radius: 15px;
  top: 20px;
}
.picUrl2 {
  width: 100%;
  height: 515px;
  position: relative;
  top: -500px;
}
.picUrl3 {
  width: 100%;
  height: 490px;
  position: relative;
  top: -1000px;
//   border-left: 1px solid #F5F5F5;
}
</style>