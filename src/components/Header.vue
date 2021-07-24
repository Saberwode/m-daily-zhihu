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
      let date = new Date();
      let year = date.getFullYear();
      return year;
    },
    month() {
      let chin_month = [
        "一",
        "二",
        "三",
        "四",
        "五",
        "六",
        "七",
        "八",
        "九",
        "十",
      ];
      let date = new Date();
      let month1 = date.getMonth(); //存储月份
      let month = chin_month[month1];
      return month;
    },
    day() {
      let date = new Date();
      var day = date.getDate(); //存储日期
      return day;
    },
  },
};
</script>
<style scoped>
@import url("../assets/css/home.css");
</style>