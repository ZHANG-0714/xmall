<template>
  <!-- 热门商品 -->
  <div>
    <div class="hot">热门商品</div>

    <div class="commodity">
      <div class="arr">
        <div v-for="(item,index) in hot" :key="index" class="products">
          <img :src="item.picUrl" alt class="img" />
          <div>{{item.productName}}</div>
          <div>{{item.subTitle}}</div>
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
  border: 0.5px solid rgb(216, 215, 215);
}
.arr{
 width: 100%;
  display: flex; 
  align-items: center;
}
.commodity {
  width: 100%;
  text-align: center;
  background: #ffffff;
}
.img {
  width: 200px;
}
</style>