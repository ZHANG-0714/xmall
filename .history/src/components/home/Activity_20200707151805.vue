<template>
  <!-- 活动版块 -->
  <div>
    <div class="activity">
      <div v-for="(item,index) in activity" :key="index">
        <img :src="item.picUrl" alt :class="'img'+index"/>
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
  border: 1px solid #ccc;
}
.img0{
border-radius: 20px;
}
</style>