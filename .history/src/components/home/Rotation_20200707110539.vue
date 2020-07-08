<template>
  <!-- 轮播图 -->
  <div></div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
        rotation:[]
    };
  },
  methods: {},
  mounted() {
    this.$api
      .getHome()
      .then(res => {
          this.rotation = res.data
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