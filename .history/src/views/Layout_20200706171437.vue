<template>
  <div>
    <!-- 头部导航 -->
    <div class="home">
        <div class="log">
            <div class="label">M</div>
        </div>
         <div>
        Props：
        <Input prefix="ios-contact" placeholder="Enter name" style="width: auto" />
        <Input suffix="ios-search" placeholder="Enter text" style="width: auto" />
    </div>
    <div style="margin-top: 6px">
        Slots：
        <Input placeholder="Enter name" style="width: auto">
            <Icon type="ios-contact" slot="prefix" />
        </Input>
        <Input placeholder="Enter text" style="width: auto">
            <Icon type="ios-search" slot="suffix" />
        </Input>
    </div>
        
    </div>


    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
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
.home {
  width: 100%;
  height: 100px;
  background: #050505;
}
.log{
    width: 1250px;
     height: 100px;
     margin: 0 auto;
    display: flex;
    align-items: center;
    background: chocolate;
}
.label{
    width: 45px;
    line-height: 45px;
    text-align: center;
    border-radius: 50%;
    background-color: #FFFFFF;
    font-size: 27px;
    color: #050505;
}
</style>