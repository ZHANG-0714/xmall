<template>
  <!-- 首页 -->
  <div>
    <div class="navigation">
      <div class="loop">
        <Rotation></Rotation> 
      </div>
    </div>
  </div>
</template>

<script>
import Rotation from "../components/home/Rotation"; //轮播图
export default {
  name: "",
  props: {

  },
  components: {
     Rotation
  },
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
.navigation{
  width: 100%;

  display: flex;
  justify-content: center;
}
.loop {
  width: 1250px;
}
</style>