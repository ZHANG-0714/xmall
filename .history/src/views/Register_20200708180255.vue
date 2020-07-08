<template>
  <!-- 注册 -->
  <div class="ivu--input--with">
    <img src="../assets/01.png" alt class="img" />

    <div class="sing">
      <Row>
        <Card>
          <p slot="title">注册 XMall 账号</p>
          <!-- 内容 -->
          <div style="text-align:center">
            <Form :model="formItem" :rules="ruleCustom" ref="formItem">
              <!-- 账号 -->
              <FormItem>
                <Input
                  v-model="formItem.username"
                  placeholder="账号"
                  style="width: 350px"
                
                  class="input"
                />
              </FormItem>
              <!-- 密码 -->
              <FormItem>
                <Input
                  v-model="formItem.passwd"
                  type="password"
                  password
                  placeholder="密码"
                  style="width: 350px"
                 
                />
              </FormItem>
              <!-- 重复密码 -->
              <FormItem>
                <Input
                  v-model="formItem.passwdCheck"
                  type="password"
                  password
                  placeholder="重复密码"
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
              <!-- 我已阅读并同意遵守 -->
              <FormItem>
                <div class="single">
                  <Checkbox v-model="formItem.single" class="password">
                    我已阅读并同意遵守
                    <span class="privacy">法律声明</span>
                    和
                    <span class="privacy">隐私条款</span>
                  </Checkbox>
                </div>
              </FormItem>
              <!-- 注册 -->
              <FormItem>
                <div class="long">
                  <Button type="primary" long @click="handleSubmit('formCustom')">注册</Button>
                </div>
                <!-- 其它账号登录 -->
                <div class="other">
                  <div>其它账号登录：</div>
                </div>
              </FormItem>
            </Form>
          </div>
        </Card>
      </Row>
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
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.formItem.passwdCheck !== "") {
          // 对第二个密码框单独验证
          this.$refs.formItem.validateField("passwdCheck");
        }
        callback();
      }
    };
    const validatePassCheck = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.formItem.passwd) {
        callback(new Error("两次密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      formItem: {
        username: "", //账号
        passwd: "", //密码
        passwdCheck: "", //重复密码
        single: false //记住密码
      },
      ruleCustom: {
        passwd: [{ validator: validatePass, trigger: "blur" }],
        passwdCheck: [{ validator: validatePassCheck, trigger: "blur" }]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
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
.sing {
  width: 455px;
  position: absolute;
  top: 5%;
  left: 35%;
  background-color: rgba(209, 209, 209, 0.3);
}
p {
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color: #666;
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
.privacy {
  color: #5079d9;
}
.input {
  margin-top: 20px;
}
</style>