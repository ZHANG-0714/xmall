<template>
  <!-- 首页 -->
  <div>
    <div class="navigation">
      <div class="loop">
        <Rotation :rotation = 'rotation'></Rotation> 
        <Activity></Activity>
      </div>
    </div>
  </div>
</template>

<script>
import Rotation from "../components/home/Rotation"; //轮播图
import Activity from "../components/home/Activity"; //轮播图
export default {
  name: "",
  props: {

  },
  components: {
     Rotation,
     Activity
  },
  data() {
    return {
      rotation:[]
    };
  },
  methods: {},
  mounted() {
    this.$api
      .getHome()
      .then(res => {
        this.rotation = res.data[0].panelContents;
        this.activity = res.data[1]
        console.log(this.rotation);
        console.log(res.data);
      })
      .catch(err => {
        console, log(err);
      });
  },
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