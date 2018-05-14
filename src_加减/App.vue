<template>
  <div>
    <!--<p>clicked:{{$vuex.state.count}}次，count是{{oddOrEven}}</p>-->
    <p>clicked:{{count}}次，count是{{oddOrEven}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">奇数+</button>
    <button @click="incrementAsync">Async+</button>
  </div>
</template>

<script>
  /*
  * 使用这3个函数，可以解析store管理的，对应状态
  * */
  import {mapActions, mapGetters, mapState} from 'vuex'
  /*
  * 这是他们内部实现的逻辑，
  *   可以使用下面的结构，也可以直接写
  *
  * 或者不用他们，直接用 this.$store.xxx来实现
  * */
  // mapGetters (names) {
  //   const result = {}
  //   names.forEach(name => {
  //     result[name] = function () {
  //       return this.$store.state(name)
  //     }
  //   })
  //   return result
  // }


  export default {
    name: 'App',
    // computed: mapGetters(['oddOrEven', 'count']),
    computed: {
      ...mapGetters(['oddOrEven', 'count'])
    },

    methods: {
      ...mapActions(['increment', 'decrement', 'incrementIfOdd', 'incrementAsync'])
    },

  }

</script>

<style>
</style>
