<template>
  <!-- 轮播图 -->
  <div>
    <Carousel v-model="value1" loop >
      <div class="loop">
        <div v-for="(item,index) in rotation" :key="index">
          <CarouselItem>
            <img :src="item.picUrl" alt class="picUrl" />
            <img :src="item.picUrl2" alt class="picUrl2" />
            <img :src="item.picUrl3" alt class="picUrl3" />
          </CarouselItem>
        </div>
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

.picUrl{

}
</style>