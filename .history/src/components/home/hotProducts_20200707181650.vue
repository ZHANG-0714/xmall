<template>
  <!-- 热门商品 -->
  <div>
    <div class="hot">热门商品</div>

    <div class="commodity">
      <div v-for="(item,index) in hot" :key="index" class="products" :class="'products'+index">
        <div class="arr">
          <div>
            <img :src="item.picUrl" alt class="img" />
          </div>
          <div class="productName">{{item.productName}}</div>
          <div class="subTitle">{{item.subTitle}}</div>
          <div class="panelId">￥{{item.panelId}}</div>
          <!-- 按钮 -->
          <div class="button">
            <Button>查看详情</Button>
            <Button type="primary">加入购物车</Button>
          </div>
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
  width: 618px;
  height: 400px;
  background: #fff;
  z-index: 5;
}
.products0:hover {
  cursor: pointer;
  height: 395px;
  box-shadow: 6px 8px 10px 0 rgb(163, 163, 163);
  translate: 0 -20px 20px;
  transition: all 1s;
}
.products1:hover {
  cursor: pointer;
  height: 395px;
  box-shadow: -6px 8px 10px 0 rgb(163, 163, 163);
  translate: 0 -20px 20px;
  transition: all 1s;
}
.commodity {
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: white;
}
.img {
  width: 200px;
}
.arr {
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.button {
  display: none;
}
.products:hover {
  .panelId {
    display: none;
  }
  .button {
    display: block;
  }
}
.productName{
    color: #000;
    font-size: 17px;
}
.subTitle{
    font-size: 13px;
    color: #ccc;
}
</style>