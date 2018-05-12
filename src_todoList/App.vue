<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader></TodoHeader>
      <TodoList></TodoList>
      <TodoFooter></TodoFooter>
    </div>
  </div>
</template>

<script>
  import TodoHeader from './components/todoHeader'
  import TodoList from './components/todoList'
  import TodoFooter from './components/todoFooter'
  import storageUtils from './utils/storageUtils'


  export default {
    name: 'App',

    components: {
      TodoHeader,
      TodoList,
      TodoFooter
    }
  }
</script>

<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>

