<template>
  <!-- 首页 -->
  <div>
    <div class="navigation">
      <div class="loop">
        <Rotation :rotation = 'rotation'></Rotation> 
        <Activity :activity = 'activity'></Activity>
        <hotProducts :hot = 'hot'></hotProducts>
      </div>
    </div>
  </div>
</template>

<script>
import Rotation from "../components/home/Rotation"; //轮播图
import Activity from "../components/home/Activity"; //活动版块
import hotProducts from "../components/home/hotProducts"; //热门商品
export default {
  name: "",
  props: {},
  components: {
     Rotation,
     Activity,
     hotProducts
  },
  data() {
    return {
      rotation:[],
      activity:[],
      hot:[]
    };
  },
  methods: {},
  mounted() {
    this.$api
      .getHome()
      .then(res => {
        this.rotation = res.data[0].panelContents; //轮播图
        this.activity = res.data[1].panelContents; //活动版块
        this.hot = res.data[2].panelContents; //热门商品
        console.log(res.data);
        console.log(this.hot);
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