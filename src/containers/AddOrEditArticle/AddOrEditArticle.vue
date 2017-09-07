<template>
  <!--添加或编辑文章-->
  <section class="addOrEditArticle">
    <!--头部-->
    <header class="header">
      <span class="title">{{title}}</span>
    </header>
    <!--内容区域-->
    <section>
      
    </section>
  </section>
</template>

<script>
  export default {
    name: 'AddOrEditArticle',
    data() {
      return {
        title: '添加作品',
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style scoped lang="scss">

  .header {
    display: flex;
    align-items: center;
    height: 60px;
    color: #fff;
    background: #000;
    font-size: 20px;

    .title {
      margin-left: 20px;
    }
  }

</style>
