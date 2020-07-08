<template>
  <div>
    <!-- 头部导航 -->
    <div class="home">
        <div class="label">M</div>
    </div>


    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.home {
  width: 100%;
  height: 100px;
  background: #050505;
}
.label{
    width: 30px;
    height: 30px;
    background-color: #FFFFFF;
}
</style>