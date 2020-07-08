<template>
  <div>
    <!-- 头部导航 -->
    <div class="home">
      <div class="log">
          <!-- Mlog -->
        <div class="label">M</div>
        <!-- 搜索框 -->
        <div>
          <Input suffix="ios-search" placeholder="请输入商品信息" style="width: auto" v-model="value"/>
        </div>
        <!-- 全部商品 -->
        <div>全部商品</div>
        <div>捐赠</div>

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
    return {
        value: ''
    };
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
  display: flex;
  justify-content: center;
  background: #050505;
}
.log {
  width: 1250px;
  height: 100px;
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
  font-family: "Helvetica Neue";
}
</style>