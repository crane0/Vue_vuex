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
  import {mapActions, mapGetters, mapState} from 'vuex'


  export default {
    name: 'App',
    computed: {
      ...mapGetters(['oddOrEven', 'count'])
    },
    methods: {
      ...mapActions(['increment', 'decrement', 'incrementIfOdd', 'incrementAsync'])
    }
  }

</script>

<style>
</style>
