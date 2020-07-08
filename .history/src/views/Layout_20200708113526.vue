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
            <Tooltip placement="bottom-end" theme="light">
              <Icon type="md-cart" size="25" />
              <div slot="content">
                <Icon type="ios-cart-outline" size="60" />
                <div class="shopping">您的购物车竟然是空的！</div>
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
    <!-- 首页 -->
    <Affix :offset-top="0" @on-change="change">
      <div class="offset">
        <!-- 循环出来的标题 不滚动时-->
        <div v-if="status === false" class="heading">
          <div class="title">
            <div v-for="(item,index) in title" :key="index">
              <div>
                <span class="spot">▪</span>
                <span class="spots">{{item}}</span>
              </div>
            </div>
          </div>
        </div>
        <!-- 图标 滚动时-->
        <div class="hide" v-else>
          <div class="title">
            <div class="head">
              <div v-for="(item,index) in title" :key="index">
                <div>
                  <span class="spot">▪</span>
                  <span class="spots">{{item}}</span>
                </div>
              </div>
            </div>
            <div class="display">
              <!-- 小人图标 -->
              <div class="person">
                <Icon type="ios-person" size="30" />
              </div>
              <!-- 购物车图标 -->
              <div class="person ivu--input--with">
                <Tooltip placement="bottom-end" theme="light">
                  <Icon type="md-cart" size="25" />
                  <div slot="content">
                    <Icon type="ios-cart-outline" size="60" />
                    <div class="shopping">您的购物车竟然是空的！</div>
                  </div>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Affix>
    <!-- 首页的子组件 -->
    <router-view></router-view>
    <!-- 尾部导航栏 -->
    <div class="tail">
      <div class="navigation">
        <div class="handbook">
          <!-- 订单服务 -->
        <div class="order">
          <div class="form">订单服务</div>
          <div class="form">服务支持</div>
          <div class="form">自助服务</div>
          <div class="form">其他项目</div>
          <div class="form">友情链接</div>
          <div class="form">关注我吧</div>
        </div>

        <div class="guide">
          <!-- 购买指南 -->
        <div class="purchase">
          <div><a href="">购买指南</a></div>
          <div><a href="">支付方式</a></div>
          <div><a href="">送货政策</a></div>
        </div>
        <!-- 支付方式 -->
        <div class="purchase">
          <div><a href="">官方开源</a></div>
          <div><a href="">项目前端</a></div>
          <div><a href="">项目后端</a></div>
        </div>
        <!-- 个人博客 -->
        <div class="purchase">
          <div><a href="">个人博客</a></div>
          <div><a href="">个人简介</a></div>
          <div><a href="">个人视频</a></div>
        </div>
        <!-- XPay支付系统 -->
        <div class="purchase">
          <div><a href="">XPay支付系统</a></div>
          <div><a href="">数据共享</a></div>
          <div><a href="">待开发...</a></div>
        </div>
        <!-- 宇cccc -->
        <div class="purchase">
          <div><a href="">宇cccc</a></div>
          <div><a href="">Smartisan</a></div>
          <div><a href="">Vue</a></div>
        </div>
        <!-- 腾讯 QQ -->
        <div class="purchase">
          <div><a href="">腾讯 QQ</a></div>
          <div><a href="">新浪微博</a></div>
          <div><a href="">官方邮箱</a></div>
        </div>
      </div>
        </div>
      <!-- 1282522949 -->
      <div class="number">
        <div class="time">1282522949</div>
        <div class="hour">周一至周日 10:00-23:00（限Starrer或捐赠人联系）</div>
        <Button size="default">在线帮助</Button>
      </div>


      </div>
  <!-- Copyright -->
      <div>
        <div>Copyright ©2017, exrick.cn Co., Ltd. All Rights Reserved.本网站设计内容大部分属锤子科技</div>
        <div>|</div>
        <div><a href="">法律声明</a></div>
      </div>

    </div>
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
  display: flex;
  align-items: center;
}
.heading {
  width: 100%;
  height: 90px;
  box-shadow: 0 0 10px 1px rgb(221, 221, 221);
  display: flex;
  align-items: center;
  justify-content: center;
}
.hide {
  width: 100%;
  height: 60px;
  box-shadow: 0 0 10px 1px rgb(221, 221, 221);
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
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
.content {
  width: 500px;
}
.shopping {
  margin-top: 10px;
  font-size: 16px;
}
.tail {
  width: 100%;
  height: 350px;
}
.navigation {
  width: 1250px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
  // background: rgb(252, 241, 221);
  margin: 0 auto;
  display: flex;
}
.number{
 padding-top: 80px;
 text-align: right;
}
.handbook{
  flex: 1;
}
.order {
  display: flex;
  padding-top: 80px;
}
.form {
  width: 149px;
  font-size: 13px;
}
.guide{
  display: flex;
}
a{
  color: #9696B0;
   font-size: 12px;
}
.purchase{
  width: 149px;
  margin-top: 10px;
}
.time{
  color: #646464;
  font-size: 30px;
}
.hour{
  color: #c3c3c3;
  font-size: 13px;
}
Button{
  margin-top: 10px;
  width: 140px;
}
</style>