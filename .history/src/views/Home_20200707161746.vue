<template>
  <!-- 首页 -->
  <div>
    <div class="navigation">
      <div class="loop">
        <Rotation :rotation = 'rotation'></Rotation> 
        <Activity :activity = 'activity'></Activity>
        <hotProducts></hotProducts>
      </div>
    </div>
  </div>
</template>

<script>
import Rotation from "../components/home/Rotation"; //轮播图
import Activity from "../components/home/Activity"; //轮播图
export default {
  name: "",
  props: {},
  components: {
     Rotation,
     Activity
  },
  data() {
    return {
      rotation:[],
      activity:[]
    };
  },
  methods: {},
  mounted() {
    this.$api
      .getHome()
      .then(res => {
        this.rotation = res.data[0].panelContents;
        this.activity = res.data[1].panelContents;
        console.log(res.data);
        console.log(this.activity);
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
  background: #EDEDED;
}
.loop {
  width: 1250px;
}
</style>