<template>
  <!-- 首页 -->
  <div>
    <div class="navigation">
      <Rotation></Rotation>
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

</style>