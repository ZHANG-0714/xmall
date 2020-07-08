<template>
  <!-- 活动版块2 -->
  <div>
    <div class="picUrl">
      <div v-for="(item,index) in section.slice(1,4)" :key="index">
        <img :src="item.picUrl" alt class="img" :class="'img'+index" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    section: {
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
.picUrl {
  margin-top: 30px;
  width: 100%;
  height: 200px;
  background-color: white;
  display: flex;
  border-radius: 20px;
}
.img {
  width: 315px;
  height: 200px;
  margin-right: 101px;
}
.img0 {
  border-radius: 20px 0 0 20px;
}
</style>