<template>
  <!-- 活动版块 -->
  <div>
    <div class="activity">
      <div v-for="(item,index) in activity" :key="index">
        <img :src="item.picUrl" alt :class="'imgr'+index" class="img" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    activity: {
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
.activity {
  width: 100%;
  margin-top: 30px;
  display: flex;
}
.img {
  width: 312px;
  border: 0.5px solid rgb(216, 215, 215);
}
.img:hover {
  cursor: pointer;
  background: #ccc;
  z-index: 10px;
}
.imgr0 {
  border-radius: 20px 0 0 20px;
}
.imgr3 {
  border-radius: 0 20px 20px 0;
}
</style>