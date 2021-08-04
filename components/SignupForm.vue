<template lang="">
  <form>
    <div>
      <label for="newUsername">이름: </label>
      <input id="newUsername" type="text" v-model="newUsername" />
    </div>
    <div>
      <label for="newPassword">비밀번호: </label>
      <input id="newPassword" type="password" v-model="newPassword" />
    </div>
    <div>
      <label for="newNickname">아이디: </label>
      <input id="newNickname" type="text" v-model="newNickname" />
    </div>
    <button type="text" v-on:click="addNickname">
      회원 가입
    </button>
    <!--<Modal v-if="showModal" @close="showModal = false">

      <h3 slot="header">
        축하 !!
        <i class="closeModalBtn fas fa-times" @click="showModal = false"></i>
      </h3>
      <div slot="body">가입을 축하드립니다!!</div></div>
    </Modal>-->
    <NuxtLink to="/">리스트목록</NuxtLink>
    <!--<NuxtLink to="/index" v-on:click="addNickname">회원 가입</NuxtLink>-->
  </form>
</template>
<script>
// import Modal from '@/components/Modal';

export default {
  data() {
    return {
      newUsername: "",
      newPassword: "",
      newNickname: ""
      // showModal: false
    };
  },
  methods: {
    addNickname() {
      if (this.newUsername && this.newPassword && this.newNickname !== "") {
        // console.log("####");
        debugger;
        this.$store.commit("addOneUser", this.newNickname);
        // console.log("####");
        // this.clearInput();
      }
      console.log("####");
      // else {
      //     this.showModal = !this.showModal;
      // }
    },
    clearInput() {
      (this.newUsername = ""), (this.newPassword = ""), (this.newNickname = "");
    }
    // consoel.log('입력')
  }
  // components: {
  //   Modal: Modal,
  // },
};
</script>
<style lang=""></style>
