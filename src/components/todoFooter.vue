<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="checkAll">
    </label>
    <span>已完成{{completeCount}} / 全部{{totalSize}}</span>
    <button class="btn btn-danger" v-show="completeCount" @click="deleteAllComplete">清除已完成任务</button>
  </div>
</template>

<script>

  import {mapGetters} from 'vuex'

  export default {

    computed: {
      ...mapGetters(['completeCount', 'totalSize']),

      checkAll: {
        /*
        * v-model对于checkbox类型的input，代表着checked的值
        *   get方法，其返回值就是checked的值
        *   get方法，一定要return！！！！！
        *
        * this.completeCount>0
        *   是因为如果，列表中已经没有了，就不应该是选中的状态
        * */
        get () {
          return this.$store.getters.checkAll
        },
        /*
        * v-model对于checkbox类型的input，代表着checked的值
        *   set方法中，传递的参数，就是checked的值
        * */
        set (value) {
          this.$store.dispatch('checkAllTodos', value)
        }
      }

    },

    methods: {
      deleteAllComplete () {
        if(confirm('确定要删除所有选中的？')){
          this.$store.dispatch('deleteCompleteTodos')
        }
      }
    }
  }
</script>

<style>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
