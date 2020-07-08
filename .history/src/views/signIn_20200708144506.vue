<template>
  <!-- 登录 -->
  <div>
    <img src="../assets/01.png" alt class="img" />
    <!-- 卡片 -->
    <div class="sing">
      <Card style="height:600px">
        <div style="text-align:center">
          <!-- 标题 -->
          <img src="../assets/02.png" alt class="imgs" />
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
  width: 115px;
}
.sing {
  width: 455px;
  position: absolute;
  top: 10%;
  left: 35%;
  background-color: rgba(209, 209, 209, 0.3);
}
</style>