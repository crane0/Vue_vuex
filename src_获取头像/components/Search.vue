<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="searchName" @keyup.enter="search"/>
      <button @click="search">Search</button>
    </div>
  </section>
</template>

<script>

  export default {

      data () {
        return {
          searchName: ''
        }
      },
      methods: {
        search () {
          const searchName = this.searchName.trim()
          if(searchName){
            //分发一个search消息
            this.$store.dispatch('search', searchName)
          }

        }
      }
  }
</script>

<style>
</style>
