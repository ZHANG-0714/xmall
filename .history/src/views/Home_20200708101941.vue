<template>
  <!-- 首页 -->
  <div>
    <div class="navigation">
      <div class="loop">
        <Rotation :rotation="rotation"></Rotation>
        <Activity :activity="activity"></Activity>
        <hotProducts :hot="hot"></hotProducts>
        <!-- 官方精选 品牌周边 品牌精选 -->
        <Selected :selected="selected1" :brand="brand1"></Selected>
        <Selected :selected="selected2" :brand="brand2"></Selected>
        <Selected :selected="selected3" :brand="brand3"></Selected>

        <Section :Section='Section'></Section>
      </div>
    </div>
  </div>
</template>

<script>
import Rotation from "../components/home/Rotation"; //轮播图
import Activity from "../components/home/Activity"; //活动版块
import hotProducts from "../components/home/hotProducts"; //热门商品
import Selected from "../components/home/Selected"; //官方精选 品牌周边 品牌精选
import Section from "../components/home/Section"; //活动版块2
export default {
  name: "",
  props: {},
  components: {
    Rotation,
    Activity,
    hotProducts,
    Selected,
    Section
  },
  data() {
    return {
      rotation: [], //轮播图
      activity: [], //活动版块
      hot: [], //热门商品
      // 内容
      selected1: [], //官方精选
      selected2: [], //品牌周边
      selected3: [], //品牌精选
      // 商品分类标题
      brand1: '', //官方精选
      brand2: '', //品牌周边
      brand3: '', //品牌精选
      // 活动版块2
      section: []
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
        // 内容
        this.selected1 = res.data[3].panelContents; //官方精选
        this.selected2 = res.data[4].panelContents; //品牌周边
        this.selected3 = res.data[5].panelContents; //品牌精选
        //商品分类标题
        this.brand1 = res.data[3].name; //官方精选
        this.brand2 = res.data[4].name; //品牌周边
        this.brand3 = res.data[5].name; //品牌精选
        // 活动版块2
        this.section = res.data[6].panelContents; //活动版块2
        console.log(res.data);
        console.log(this.selected1);
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
.navigation {
  width: 100%;
  display: flex;
  justify-content: center;
  background: #ededed;
}
.loop {
  width: 1250px;
}
</style>