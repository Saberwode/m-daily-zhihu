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
      //  var date = new Date();
      //  var year = date.getFullYear();      //存储年
      //  var month = padaDate(date.getMonth()+1);    //存储月份
      //  var day = padaDate(date.getDate());         //存储日期
      //  var hours = padaDate(date.getHours());      //存储时
      //  var minutes = padaDate(date.getMinutes());  //存储分
      //  var seconds = padaDate(date.getSeconds());  //存储秒
      let date = new Date();
      let year = date.getFullYear();
      // let month = padaDate(date.getMonth() + 1);
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
      // var month = padaDate(date.getMonth() + 1); //存储月份
      let month1 = date.getMonth(); //存储月份
      let month = chin_month[month1];
      return month;
    },
    day() {
      let date = new Date();
      // var day = padaDate(date.getDate()); //存储日期
      var day = date.getDate(); //存储日期
      return day;
    },
  },
};
</script>
<style scoped>
@import url("../assets/css/home.css");
</style>