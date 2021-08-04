<template lang="">
  <div>
    <ul>
      <li
        v-for="(nickname, index) in this.$store.state.nicknames"
        v-bind:key="nickname.item"
      >
        <span>{{ nickname.item }}</span>
        <button v-on:click="removeUser(nickname, index)">삭제</button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  methdos: {
    removeUser(nickname, index) {
      this.$store.commit("removeOneUser", { nickname, index });
    }
  }
};
</script>
<style lang=""></style>
