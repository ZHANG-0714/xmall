<template>
  <div>
    <!-- 头部导航 -->
    <div class="home ivu--input--with">
      <div class="log">
        <!-- Mlog -->

        <div>
          <div class="label">M</div>
        </div>

        <div class="frame">
          <!-- 搜索框 -->
          <div class="fors">
            <Input suffix="ios-search" placeholder="请输入商品信息" style="width: auto" v-model="value" />
          </div>
          <!-- 全部商品 -->
          <div class="for">全部商品</div>
          <!-- 捐赠 -->
          <div class="for">捐赠</div>
          <div class="forc">|</div>
          <!-- 小人图标 -->
          <div class="for">
            <Icon type="ios-person" size="30" color="#999999" />
          </div>
          <!-- 购物车图标 -->
          <div class="for">
            <Icon type="md-cart" size="25" color="#999999" />
          </div>
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
    return {
      value: ""
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
  justify-content: space-between;
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
.frame {
  margin-right: 30px;
  display: flex;
  align-items: center;
}
.for {
  margin-right: 40px;
  color: #c8c8c8;
  width: 58px;
}
.for:hover{
    color: #fff;
    cursor: pointer;
}
.forc {
  margin-right: 40px;
  color: #373737;
}
.fors {
   
  margin-right: 30px;
}
</style>