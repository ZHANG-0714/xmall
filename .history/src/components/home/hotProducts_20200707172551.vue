<template>
  <!-- 热门商品 -->
  <div>
    <div class="hot">热门商品</div>

    <div class="commodity">
      <div v-for="(item,index) in hot" :key="index" class="products">
        <div class="arr">
          <div>
            <img :src="item.picUrl" alt class="img" />
          </div>
          <div>{{item.productName}}</div>
          <div>{{item.subTitle}}</div>
          <div>￥{{item.panelId}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    hot: {
      type: Array
    }
  },
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
.hot {
  width: 100%;
  line-height: 60px;
  background: #f3f3f3;
  border: 0.5px solid rgb(216, 215, 215);
  margin-top: 30px;
  padding-left: 30px;
  border-radius: 10px 10px 0 0;
  font-size: 18px;
}
.products {
  width: 625px;
  height: 500px;
  z-index: 5;
}
.products:hover{
    cursor: pointer;
    height: 480px;
   box-shadow: 0 0 10px 1px rgb(163, 163, 163); 
   translate: 0 -20px 20px;
   transition: all 1s;
}
.commodity {
  width: 100%;
  display: flex;
  background: #ffffff;
}
.img {
  width: 200px;
}
.arr {
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>