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

    <div class="before" v-for="item in beforeStories" :key="item.id">
      <content-item
        :imgUrl="item.images"
        :title="item.title"
        :hint="item.hint"
      ></content-item>
      <!-- </div> -->
    </div>
    <button type="button" @click="loadMore">点击加载更多</button>
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
    loadMore() {
      // let el = document.querySelector(".body");
      axios({
        url: "/api/3/news/before/" + this.date,
      }).then((res) => {
        // console.log(res);
        // this.addDivider(res.data.stories);
        this.beforeStories = this.beforeStories.concat(res.data.stories);
        // console.log(this.beforeData);
        // console.log(this.stories);
        this.date -= 1;
        // console.log(this.beforeData[0].stories[0]);
      });
    },
    addDivider(item) {
      let body = document.querySelector(".divider");
      let divider = document.createElement("el-divider");
      divider.appendChild(body);
      divider.setAttribute("content-position", "left");
      divider.innerText = this.beforeDate(item);
    },
    beforeDate(item) {
      console.log(item.date - 1);
      console.log(typeof item.date);
      let date = String(item.date).split("");
      let day = date[6] + date[7];
      let month = date[0] === 0 ? date[1] : date[0] + date[1];
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
.body {
  max-width: 100%;
}
</style>