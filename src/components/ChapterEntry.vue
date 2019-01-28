<template>
  <div class="progress-entry">
    <p>{{ chapter.number }}</p>
    <p>{{ chapter.title }}</p>
    <div class="meter">
      <span :style="progressWidth"></span>
    </div>
    <div class="progress-field">
      <input v-model="chapter.progress">
    </div>
    <!-- <p>{{ chapter.progress }}</p> -->
  </div>
</template>

<script>
export default {
  name: "ChapterEntry",
  props: {
    chapter: Object
  },
  computed: {
    progressWidth() {
      let color = "";
      if (this.chapter.progress <= 20) {
        color = "red";
      } else if (this.chapter.progress <= 50) {
        color = "yellow";
      } else if (this.chapter.progress <= 70) {
        color = "orange";
      } else if (this.chapter.progress <= 90) {
        color = "blue";
      } else {
        color = "green";
      }
      return {
        width: this.chapter.progress + '%',
        backgroundColor: color
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
div.progress-entry {
  display: flex;
  padding: 0px 20px;

  > p {
    margin-right: 20px;
  }

  p:nth-child(2) {
    flex-grow: 1;
  }

  div.progress-field {
    align-self: center;
  }

  .meter { 
    flex-grow: 1;
    height: 10px;
    position: relative;
    background: #eee;
    flex-grow: 1;
    border-radius: 25px;
    padding: 5px;
    align-self: center;
    margin-right: 20px;
    box-shadow: inset 0 -1px 1px rgba(255,255,255,0.3);

    > span {
      display: block;
      height: 100%;
      border-radius: 10px;
    }
  }
}

</style>
