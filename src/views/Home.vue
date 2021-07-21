<template>
  <div class="body">
    <Header></Header>
    <Banner></Banner>
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
.body {
  width: 100%;
}
</style>