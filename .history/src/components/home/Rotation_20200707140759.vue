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
  width: 100%;
  height: 500px;
}
.picUrl {
  width: 100%;
  height: 500px;
  position: relative;
  border-radius: 10px;
}
.picUrl2 {
  width: 100%;
  height: 520px;
  position: relative;
  top: -525px;
  z-index: 9999;
}
.picUrl3 {
  width: 100%;
  height: 490px;
  position: relative;
  top: -1000px;
}
</style>