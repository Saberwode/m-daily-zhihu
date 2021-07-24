<template>
  <!-- 单个项目 -->
  <a :href="url">
    <div class="item">
      <div class="item-content">
        <p class="p-title">{{ title }}</p>
        <p class="p-hint">{{ hint }}</p>
      </div>
      <img :src="imgUrl" alt="" class="item-img" />
    </div>
  </a>
</template>

<script>
export default {
  name: "ContentItem",
  props: {
    title: {
      type: String,
    },
    imgUrl: {
      type: Array,
    },
    hint: {
      type: String,
    },
    url: {
      type: String,
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
.item {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 20px;
}
.item-content {
  display: flex;
  flex-direction: column;
}
.p-title {
  font-size: 20px;
  font-weight: bolder;
}
.p-hint {
  font-size: 15px;
  opacity: 0.6;
}
.item-img {
  width: 100px;
  border-radius: 5px;
}
</style>