<template>
  <div id="app">
    <button>
      <NuxtLink to="/SignupPage">추가하기</NuxtLink>
    </button>
    <ListHeader></ListHeader>
    <ListList></ListList>
    <ListFooter></ListFooter>
  </div>
</template>

<script>
import ListHeader from "@/components/ListHeader.vue";
import ListList from "@/components/ListList.vue";
import ListFooter from "@/components/ListFooter.vue";

export default {
  components: {
    ListHeader: ListHeader,
    ListList: ListList,
    ListFooter: ListFooter
  }
};
</script>

<style></style>

<!--<template>
  <ListPage />
</template>

<script>
export default {};
</script>-->
