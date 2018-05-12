<template>
    <ul class="todo-main">
      <TodoListItem v-for="(todo, index) in todos" :key="index"
        :todo="todo" :index="index"/>
    </ul>
</template>

<script>

  import {mapState} from 'vuex'
  import TodoListItem from './todoListItem'
  import storageUtils from '../utils/storageUtils'

  export default {

    computed: {
      ...mapState(['todos'])
    },
    //深度监视！
    watch: {
      todos: {
        deep: true,
        //val就是改变后的todos
        // handler: function (val) {
        //   localStorage.setItem('todos_key', JSON.stringify(val))
        // }

        /*
        * 因为handler对应的，本来就是一个函数，
        *   所以可以直接使用storageUtils对象的方法，也是一个函数
        * */
        handler: storageUtils.setTodos
      }
    },
    components: {
      TodoListItem
    }
  }
</script>


<style>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>
