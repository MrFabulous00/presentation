<template lang="">
  <div>
    <button v-on:click="clearAllNickname">Clear All</button>
  </div>
</template>
<script>
export default {
  methods: {
    clearAllNickname() {
      this.$store.commit("clearAllUsers");
    }
  }
};
</script>
<style lang=""></style>
