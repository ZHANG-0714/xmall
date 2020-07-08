<template>
  <!-- 登录 -->
  <div class="ivu--input--with">
    <img src="../assets/01.png" alt class="img" />
    <!-- 卡片 -->
    <div class="sing">
      <Card style="height:600px">
        <!-- 内容 -->
        <div style="text-align:center">
          <!-- 标题 -->
          <img src="../assets/02.png" alt class="imgs" />
          <div class="xmall">使用 XMall 账号 登录官网</div>

          <Form :model="formItem">
            <!-- 账号 -->
            <FormItem>
              <Input
                v-model="formItem.username"
                placeholder="账号"
                style="width: 350px"
                size="large"
                class="input"
              />
            </FormItem>
            <!-- 密码 -->
            <FormItem>
              <Input
                v-model="formItem.password"
                type="password"
                password
                placeholder="密码"
                style="width: 350px"
                size="large"
              />
            </FormItem>
            <!-- 验证 -->
            <FormItem>
              <div class="vpat">
                <div ref="vaptcha" style="width:350px;height:36px">
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
            </FormItem>
            <!-- 记住密码 -->
            <FormItem>
              <div class="single">
                <Checkbox v-model="formItem.single" class="password">记住密码</Checkbox>
                <div class="account">
                  <div class="line">注册 XMall 账号</div>
                  <div>忘记密码 ?</div>
                </div>
              </div>
            </FormItem>
            <!-- 登录按钮 -->
            <FormItem>
              <div class="long">
                <div>
                  <Button type="primary" long>登录</Button>
                </div>
                <div class="primary">
                  <Button long>返回</Button>
                </div>
              </div>
              <!-- 其它账号登录 -->
              <div>
                <div>其它账号登录：</div>
                <img src="../assets/wechat.svg" alt="">
                <img src="../assets/sina.svg" alt="">
                <img src="../assets/qq.svg" alt="">
              </div>
            </FormItem>
          </Form>
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
      formItem: {
        username: "", //账号
        password: "", //密码
        single: false //记住密码
      }
    };
  },
  methods: {
    // 验证
    loadV2Script() {
      if (typeof window.vaptcha === "function") {
        //如果已经加载就直接放回
        return Promise.resolve();
      } else {
        return new Promise(resolve => {
          var script = document.createElement("script");
          script.src = "https://v.vaptcha.com/v3.js";
          script.async = true;
          script.onload = script.onreadystatechange = function() {
            if (
              !this.readyState ||
              this.readyState == "loaded" ||
              this.readyState == "complete"
            ) {
              resolve();
              script.onload = script.onreadystatechange = null;
            }
          };
          document.getElementsByTagName("head")[0].appendChild(script);
        });
      }
    }
  },
  mounted() {
    // 验证
    var config = extend(
      {
        vid: "5efc030de988dd2fc1b8e91b",
        container: this.$refs.vaptcha,
        style: this.vpStyle
      },
      this.$props
    );
    this.loadV2Script().then(() => {
      window.vaptcha(config).then(obj => {
        this.$emit("input", obj);
        obj.render();
      });
    });
  },
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
.xmall {
  margin-top: 10px;
  font-size: 19px;
  color: #333;
}
.input {
  margin-top: 30px;
}
.vpat {
  display: flex;
  justify-content: center;
}
.single {
  width: 350px;
  display: flex;
  text-align: left;
  margin: 0 auto;
}
.account {
  height: 20px;
  display: flex;
  color: #5079d9;
}
.line {
  border-right: 1px solid #ccc;
  margin-right: 10px;
  padding-right: 10px;
}
.password {
  flex: 1;
}
.primary {
  width: 350px;
  margin-top: 10px;
}
.long {
  width: 350px;
  margin: 0 auto;
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(231, 231, 231);
}
</style>