import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nextChapterNumber: 0,
    chapters: []
  },
  mutations: {
    addNewChapter(state, chapter) {
      state.chapters.push({ ...chapter });
    }
  },
  actions: {
    //
  }
});
