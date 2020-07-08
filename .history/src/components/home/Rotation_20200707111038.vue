<template>
  <!-- 轮播图 -->
  <div>
      <Carousel v-model="value1" loop>
        <CarouselItem>
            <div v-for="(item,index) in rotation" :key="index">
                <div>{{}}</div>
            </div>
        </CarouselItem>
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
        rotation:[]
    };
  },
  methods: {},
  mounted() {
    this.$api
      .getHome()
      .then(res => {
          this.rotation = res.data[0]
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
</style>