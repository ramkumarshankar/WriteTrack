<template>
  <form @submit.prevent="handleSubmit">
    <label for="chapterNumber">Chapter Number</label>
    <input id="chapterNumber" v-model="chapter.number">
    <label for="chapterTitle">Chapter Title</label>
    <input id="chapterTitle" v-model="chapter.title">
    <button class="primary" type="submit">Add</button>
  </form>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: 'AddChapterForm',
  data() {
    return {
      chapter: {
        number: this.nextChapterNumber,
        title: '',
        progress: 0
      }
    }
  },
  computed: {
    ...mapState(["nextChapterNumber"])
  },
  methods: {
    ...mapMutations(["addNewChapter"]),
    handleSubmit () {
      this.addNewChapter(this.chapter);
      this.setEmptyForm();
    },
    setEmptyForm () {
      this.chapter.number++;
      this.chapter.title = '';
      this.chapter.progress = 0;
    }
  }
}
</script>

<style lang="stylus" scoped>

form > * {
  display: block;
}
</style>
