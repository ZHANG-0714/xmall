<template>
  <!-- 登录 -->
  <div>
    <img src="../assets/01.png" alt class />
    <!-- 卡片 -->
    <div class="sing">
      <Card style="height:600px">
        <div style="text-align:center">
          <h3>A high quality UI Toolkit based on Vue.js</h3>
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
img {
  width: 100%;
  height: 100vh;
  text-align: center;
}
.sing {
  width: 452px;
  position: absolute;
  top: 10%;
  left: 5%;
  background-color: rgba(209, 209, 209, 0.3);
}
</style>