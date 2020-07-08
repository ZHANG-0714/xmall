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
        </div>

      </Card>
    </div>
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
  font-size: 17px;
}
</style>