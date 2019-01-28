<template>
  <div id="app">
    <h1>Write Track</h1>
    <add-chapter-form />
    <div class="progress-table">
      <template v-for="(item, index) in chapters" :chapter="item">
        <chapter-entry :key="item.number" :chapter="item" />
      </template>
    </div>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
import AddChapterForm from "./components/AddChapterForm.vue";
import ChapterEntry from "./components/ChapterEntry.vue";

export default {
  name: "app",
  computed: {
    ...mapState(["chapters"])
  },
  components: {
    ChapterEntry,
    AddChapterForm
  }
};
</script>
<style lang="stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

div.progress-table {
  // display: grid;
  // grid-template-columns: repeat(3, 1fr);
}

</style>
