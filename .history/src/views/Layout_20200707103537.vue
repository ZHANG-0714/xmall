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
          <div class="cart">
            <Icon type="ios-person" size="30" />
          </div>
          <!-- 购物车图标 -->
          <div class="cart">
            <Icon type="md-cart" size="25" />
          </div>
        </div>
      </div>
    </div>
    <!-- 首页 -->
    <Affix :offset-top="0" @on-change="change">
      <div class="offset">
        
          <!-- 循环出来的标题 不滚动时-->
          <div v-if="status === false" class="heading">
            <div v-for="(item,index) in title" :key="index">
              <div>
                <span class="spot">▪</span>
                <span class="spots">{{item}}</span>
              </div>
            </div>
          </div>
          <!-- 图标 滚动时-->

          <div class="hide" v-else>
            <div class="head">
              <div v-for="(item,index) in title" :key="index">
                <div>
                  <span class="spot">▪</span>
                  <span class="spots">{{item}}</span>
                </div>
              </div>
            </div>
            <div class="display">
              <div class="person">
                <Icon type="ios-person" size="30" />
              </div>
              <div class="person">
                <Icon type="md-cart" size="25" />
              </div>
            </div>
          </div>

      </div>
    </Affix>

    <div class="arr"></div>

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
      status: false,
      value: "",
      title: [
        "全部",
        "品牌周边",
        "捐赠名单",
        "后台管理系统",
        "XPay支付系统",
        "XBoot开发平台",
        "宣传视频",
        "Github",
        "商用授权"
      ]
    };
  },
  methods: {
    change(status) {
      this.status = status;
    }
  },
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
  margin-right: 30px;
  color: #c8c8c8;
  width: 58px;
}
.for:hover {
  color: #fff !important;
  cursor: pointer;
}
.cart {
  color: #999999;
  width: 58px;
}
.cart:hover {
  color: #fff !important;
  cursor: pointer;
}
.forc {
  margin-right: 50px;
  color: #373737;
}
.fors {
  margin-right: 30px;
}
.offset {
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
}
.title {
  width: 1250px;
  height: 100px;
}
.heading {
  width: 100%;
  height: 90px;
  box-shadow: 3px 2px 15px 1px rgb(202, 202, 202);
  display: flex;
  align-items: center;
}
.hide {
  width: 100%;
  height: 60px;
  box-shadow: 3px 2px 15px 1px rgb(202, 202, 202);
  display: flex;
  align-items: center;
}
.head {
  display: flex;
  flex: 1;
}
.spot {
  margin-right: 10px;
}
.spots {
  margin-right: 10px;
  font-size: 14px;
}
.arr {
  height: 1000px;
}
.Icon {
  color: #999999;
}
.person {
  margin-right: 30px;
}
.display {
  display: flex;
  margin-right: 35px;
}
</style>