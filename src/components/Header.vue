<template>
  <div class="header">
    <div class="date">
      <div class="day">{{ day }}</div>
      <div class="month">{{ month }}月</div>
    </div>
    <el-divider direction="vertical"></el-divider>
    <div class="header-r">
      <div class="title">知乎日报</div>

      <el-avatar icon="el-icon-user-solid" class="avatar"></el-avatar>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  computed: {
    date() {
      const date = new Date();
      let year = date.getFullYear();
      return year;
    },
    month() {
      const nzhcn = require("../../node_modules/nzh/cn"); //直接使用简体中文
      const date = new Date();
      let month1 = date.getMonth(); //存储月份
      month1 = nzhcn.encodeS(month1 + 1);
      // console.log(month1);
      return month1;
    },
    day() {
      const date = new Date();
      let day = date.getDate(); //存储日期
      return day;
    },
  },
};
</script>
<style scoped>
@import url("../assets/css/home.css");
</style>