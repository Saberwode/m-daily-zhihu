<template>
  <div class="body">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="item in stories" :key="item.id">
        <img :src="item.image" alt="" />
        <p class="main-title">{{ item.title }}</p>
        <p class="author">{{ item.hint }}</p>
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Banner",
  data() {
    return {
      swiperOptions: {
        pagination: ".swiper-pagination",
        // 是否可以点击
        paginationClickable: true,
        loop: true,
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
        // 这种方式设置会报错。。
        // autoplay: {
        //   delay: 1000,
        //   disableOnInteraction: false,
        // },
      },
      stories: [],
      // author:[],
    };
  },
  created() {
    axios({
      url: "/api/3/stories/latest",
    }).then((res) => {
      this.stories = res.data.top_stories;
      console.log(res);
      // this.author = res.data.top_stories;
    });
  },
};
</script>
<style scoped>
body {
  width: 100%;
}
img {
  width: 100%;
}
.author {
  margin-top: -45px;
  margin-bottom: 30px;
  color: #ffffff;
  margin-left: 20px;
}
.main-title {
  position: absolute;
  bottom: 60px;
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  left: 20px;
}
.swiper-pagination {
  position: relative;
  bottom: 10px;
  left: 10px;
  margin-left: 120px;
  margin-top: -30px;
  padding-bottom: 10px;
  color: #ffffff;
}
.swiper-container {
  --swiper-theme-color: #ffffff;
  /* --swiper-pagination-color: #00ff33; */
  /* --swiper-theme-color: #ff6600; */
}
.swiper-pagination-bullet {
  background: #ffffff;
  opacity: 0.2;
}
</style>