<template>
  <div>
    <!-- 头部导航 -->
    <div class="home">
      <div class="log">
        <div class="label">M</div>

        <div>
        <Input suffix="ios-search" placeholder="请输入商品信息" style="width: auto" />
      </div>

      </div>
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
.log {
  width: 1250px;
  height: 100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  background: chocolate;
}
.label {
  width: 45px;
  line-height: 45px;
  text-align: center;
  border-radius: 50%;
  background-color: #ffffff;
  font-size: 26px;
  color: #050505;
  font-family: 'Helvetica Neue'
}
</style>