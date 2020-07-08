<template>
  <!-- 官方精选 品牌周边 品牌精选 -->
  <div>
    <div class="hot">{{brand}}</div>

    <div class="selected">
      <!-- 大图片 -->
      <div v-for="item in selected.slice(0,1)" :key="item.id">
        <div>
          <img :src="item.picUrl" alt class="imgs" />
        </div>
      </div>
      <!-- 大图片旁边的两张图片 -->
      <div v-for="item in selected.slice(1,3)" :key="item.id" class="arr">
        <div class="picUrl">
          <img :src="item.picUrl" alt class="imgc" />
          <div class="productName">{{item.productName}}</div>
          <div class="subTitle">{{item.subTitle}}</div>
          <div class="panelId">{{item.salePrice | fixed}}</div>
          <!-- 按钮 -->
          <div class="button">
            <Button class="see">查看详情</Button>
            <Button type="primary">加入购物车</Button>
          </div>

        </div>
      </div>
    </div>

    <!-- 下面一排图片 -->
    <div class="wares">
      <div v-for="item in selected.slice(3,7)" :key="item.id">
        <div class="picUrl">
          <img :src="item.picUrl" alt class="imgc" />
          <div class="productName">{{item.productName}}</div>
          <div class="subTitle">{{item.subTitle}}</div>
          <div class="panelId">{{item.salePrice | fixed}}</div>
          <!-- 按钮 -->
          <div class="button">
            <Button class="see">查看详情</Button>
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
    selected: {
      type: Array
    },
    brand: {
      type: String
    }
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {},
  //过滤器（对数字进行操作就要用这个）
  filters: {
    fixed(val) {
      return "￥" + Number(val).toFixed(2);
    }
  }
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
.imgs {
  width: 609px;
  height: 430px;
}
.imgc {
  width: 206px;
  height: 206px;
}
.selected {
  display: flex;
}
.picUrl {
  width: 304.5px;
  height: 430px;
  background: white;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.productName {
  color: #000;
  font-size: 17px;
}
.subTitle {
  font-size: 13px;
  color: #ccc;
  margin-top: 5px;
}
.panelId {
  font-size: 19px;
  margin-top: 5px;
  color: #d44d44;
  font-weight: 600;
}
.wares{
    display: flex;
}
.button {
  height: 50px;
  margin-top: 10px;
  display: none;
}
.picUrl:hover{
   cursor: pointer;
  height: 420px;
  box-shadow: 6px 8px 10px 10px rgb(163, 163, 163);
  translate: 0 -20px 20px;
  transition: all 1s;
  .panelId {
    display: none;
  }
  .button {
    display: block;
  }
}
.see{
    margin-right: 20px;
}
.arr{
  height: 400px;
}
</style>