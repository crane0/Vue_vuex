<template>
  <div class="container">
    <Search></Search>
    <UserMain></UserMain>
  </div>
</template>

<script>
  import Main from './components/Main'
  import Search from './components/Search'

  export default {
    components: {
      Search,
      //不直接用Main作为组件标签，是因为Main是关键字
      UserMain: Main
    }
  }
</script>

<style>
</style>

