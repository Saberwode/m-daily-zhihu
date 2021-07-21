<template>
  <!-- <mescroll-vue :up="mescrollUp"> -->
  <div class="body">
    <content-item
      v-for="item in stories"
      :key="item.id"
      :imgUrl="item.images"
      :title="item.title"
      :hint="item.hint"
    ></content-item>
    <!-- <div class="test" v-for="item in 5" :key="item" v-text="1"> -->
    <div class="infinite-list" v-infinite-scroll="load" style="overflow: auto">
      <div
        class="before infinite-list-item"
        v-for="item in beforeData"
        :key="item.id"
      >
        <!-- <button @click="click(item, index)"></button> -->
        <el-divider content-position="left">{{ beforeDate(item) }}</el-divider>

        <content-item
          :imgUrl="item.stories[0].images"
          :title="item.stories[0].title"
          :hint="item.stories[0].hint"
        ></content-item>
        <content-item
          :imgUrl="item.stories[1].images"
          :title="item.stories[1].title"
          :hint="item.stories[1].hint"
        ></content-item>
        <content-item
          :imgUrl="item.stories[2].images"
          :title="item.stories[2].title"
          :hint="item.stories[2].hint"
        ></content-item>
        <content-item
          :imgUrl="item.stories[3].images"
          :title="item.stories[3].title"
          :hint="item.stories[3].hint"
        ></content-item>
        <content-item
          :imgUrl="item.stories[4].images"
          :title="item.stories[4].title"
          :hint="item.stories[4].hint"
        ></content-item>
        <content-item
          :imgUrl="item.stories[5].images"
          :title="item.stories[5].title"
          :hint="item.stories[5].hint"
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

      mescrollUp: {
        callback: this.loadMore,
      },
      mescroll: null, // mescroll实例对象
    };
  },
  methods: {
    click(item, index) {
      console.log(item);
      console.log(index);
    },
    load() {
      // let el = document.querySelector(".body");
      axios({
        url: "/api/3/news/before/" + this.date,
      }).then((res) => {
        // console.log(res);
        // this.addDivider(res.data.stories);
        this.beforeData = this.beforeData.concat(res.data);
        // console.log(this.beforeData);
        // console.log(this.stories);
        this.date -= 1;
        // console.log(this.beforeData[0].stories[0]);
      });
    },
    beforeDate(item) {
      // console.log(item.date - 1);
      console.log(typeof item.date);
      let date = String(item.date).split("");
      console.log(date);
      let day = date[6] + date[7];
      let month = date[4] === 0 ? date[5] : date[4] + date[5];
      console.log(month + "月" + day + 1 + "日");
      return month + "月" + day + "日";
    },
  },
  computed: {},
  created() {
    axios({
      url: "/api/3/stories/latest",
    }).then((res) => {
      // console.log(res);
      this.stories = res.data.stories;
      // console.log(this.stories);
      this.date = res.data.date;
      // console.log(this.date);
    });
  },
};
</script>
<style scoped>
.body,
.before {
  width: 100%;
}
</style>