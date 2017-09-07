<template>
  <div class="index">
    Index
    <div class="a">
      <div class="b"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Index',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style scoped lang="scss">
  .a {

    .b {
      height: 20px;
      background: red;
    }
  }
</style>
