<template>
  <div class="body">
    <!-- 头部 -->
    <Header></Header>
    <!-- 轮播图 -->
    <Banner></Banner>
    <!-- 具体故事内容 -->
    <Content></Content>
  </div>
</template>

<script>
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Content from "@/components/Content";
export default {
  name: "Home",
  components: {
    Banner,
    Header,
    Content,
  },
};
</script>

<style scoped>
/* @import url("../assets/css/main.css"); */

body {
  width: 100%;
}
</style>