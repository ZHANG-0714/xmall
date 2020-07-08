<template>
  <!-- 注册 -->
  <div>
    <img src="../assets/01.png" alt class="img" />

    <div class="sing">
      <Row>
          <Card>
            <p slot="title">注册 XMall 账号</p>
            
          </Card>
      </Row>

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
.sing {
  width: 455px;
  position: absolute;
  top: 5%;
  left: 35%;
  background-color: rgba(209, 209, 209, 0.3);
}
p{
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    color: #666;
}
</style>