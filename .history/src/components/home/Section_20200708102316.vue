<template>
  <!-- 活动版块2 -->
  <div>
      <div v-for="(item,index) in section.slice(1,4)" :key="index">
          <img :src="item.picUrl" alt="">
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
</style>