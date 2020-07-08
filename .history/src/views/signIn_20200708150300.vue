<template>
  <!-- 登录 -->
  <div>
    <img src="../assets/01.png" alt class="img" />
    <!-- 卡片 -->
    <div class="sing">
      <Card style="height:600px">
        <!-- 内容 -->
        <div style="text-align:center">
          <!-- 标题 -->
          <img src="../assets/02.png" alt class="imgs" />
          <div class="xmall">使用 XMall 账号 登录官网</div>
          <!-- 账号 -->
          <Input v-model="username" placeholder="账号" style="width: 350px" size="large" class="input"/>
          <!-- 密码 -->
          <Input v-model="password" type="password" password placeholder="密码" style="width: 350px" size="large" class="input"/>

           <div class="vpat">
          <div ref="vaptcha" style="width:300px;height:36px">
            <div class="vaptcha-init-main">
              <div class="vaptcha-init-loading">
                <a href="https://www.vaptcha.com/" target="_blank">
                  <img src="https://cdn.vaptcha.com/vaptcha-loading.gif" />
                </a>
                <span class="vaptcha-text">VAPTCHA启动中...</span>
              </div>
            </div>
          </div>
        </div>

        </div>

      </Card>
    </div>
  </div>
</template>

<script>
const extend = function(to, _from) {
  for (const key in _from) {
    to[key] = _from[key];
  }
  return to;
};
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      username:'', //账号
      password:'', //密码
    };
  },
  methods: {
    
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.img {
  width: 100%;
  height: 100vh;
  text-align: center;
}
.imgs {
  width: 103px;
  margin-top: 30px;
}
.sing {
  width: 455px;
  position: absolute;
  top: 5%;
  left: 35%;
  background-color: rgba(209, 209, 209, 0.3);
}
.xmall{
   margin-top: 10px;
  font-size: 19px;
  color: #333;
}
.input{
  margin-top: 30px;
}
</style>