<template>
  <!-- 活动版块2 -->
  <div>
    <div class="picUrl">
      <div v-for="(item,index) in section.slice(1,4)" :key="index">
        <img :src="item.picUrl" alt class="img" />
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
.picUrl{
    width: 406px;
    height: 200px;
    background-color: white;
    display: flex;
}
.img {
    width: 400px;
    height: 150px;
}
</style>