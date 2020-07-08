<template>
  <!-- 活动版块 -->
  <div>
    <div class="activity">
      <div v-for="(item,index) in activity" :key="index" class="shaky">
        <div class="">
            <img :src="item.picUrl" alt :class="'imgr'+index" class="img" />
        </div>
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
  z-index: 10;
  border: 0.5px solid rgb(216, 215, 215);
}
.shaky{
 z-index: 10
}
.shaky:hover {
  cursor: pointer;
  box-shadow: 0 0 10px 1px rgb(221, 221, 221);

}
.imgr0 {
  border-radius: 10px 0 0 10px;
}
.imgr3 {
  border-radius: 0 10px 10px 0;
}
</style>