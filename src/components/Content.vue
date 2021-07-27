<template>
  <div class="body">
    <!-- 最新的故事 -->
    <content-item
      v-for="item in stories"
      :key="item.id"
      :imgUrl="item.images"
      :title="item.title"
      :hint="item.hint"
      :url="item.url"
    ></content-item>
    <!-- 下拉刷新 -->
    <div
      class="infinite-list"
      v-infinite-scroll="load"
      style="overflow: auto"
      infinite-scroll-delay="800"
      infinite-scroll-distance="10"
    >
      <div
        class="before infinite-list-item"
        v-for="item in beforeData"
        :key="item.id"
      >
        <!-- 除去最新的故事，上一天的故事开始，故事内容前都会跟着一个日期，作为一个整体 -->
        <el-divider content-position="left">{{ beforeDate(item) }}</el-divider>
        <!-- 每天有六个故事 -->
        <content-item
          v-for="i in item.stories"
          :key="i.id"
          :imgUrl="i.images"
          :title="i.title"
          :hint="i.hint"
          :url="i.url"
        ></content-item>
      </div>
    </div>

    <!-- <button type="button" @click="loadMore">点击加载更多</button> -->
  </div>
  <!-- </mescroll-vue> -->
</template>
<script>
import axios from "axios";
import ContentItem from "../components/ContentItem";
// import MescrollVue from "mescroll.js/mescroll.vue";
export default {
  name: "Content",
  components: {
    ContentItem,
    // MescrollVue,
  },
  data() {
    return {
      stories: [],
      beforeStories: [],
      beforeData: [],
      date: String,
    };
  },
  methods: {
    // 下拉加载函数
    async load() {
      const res = await axios({
        url: "/api/3/news/before/" + this.date,
      });
      if (res?.data) {
        this.beforeData = this.beforeData.concat(res.data);
        this.date -= 1;
      }
      // axios({
      //   url: "/api/3/news/before/" + this.date,
      // }).then((res) => {
      //   this.beforeData = this.beforeData.concat(res.data);
      //   this.date -= 1;
      // });
    },
    // 计算日期
    beforeDate(item) {
      let date = String(item.date).split("");
      let day = date[6] + date[7];
      let month = date[4] == "0" ? date[5] : date[4] + date[5];
      // return month + "月" + day + "日";
      return `${month}月${day}日`;
    },
  },
  computed: {},
  async created() {
    const res = await axios({
      url: "/api/3/stories/latest",
    });
    if (res?.data?.stories) {
      this.stories = res.data.stories;
      this.date = res.data.date;
      console.log(res);
    }
    // const res1 = await axios({
    //   url: "/api/3/news/before/20210727",
    // });
    // if (res?.data?.stories) {
    //   // this.stories = res.data.stories;
    //   // this.date = res.data.date;
    //   console.log(res1);
    // }
    // axios({
    //   url: "/api/3/stories/latest",
    // }).then((res) => {
    //   this.stories = res.data.stories;
    //   this.date = res.data.date;
    // });
  },
};
</script>
<style scoped>
.body,
.before {
  width: 100%;
}
.el-divider__text {
  padding: 0px 23px;
  color: #999999;
  font-weight: bold;
  font-size: 16px;
}
.el-divider__text.is-left {
  left: 0;
}
</style>