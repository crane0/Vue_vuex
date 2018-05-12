<template>
    <div class="todo-header">
      <input type="text" v-model="inputTodo" @keyup.enter="add" placeholder="请输入你的任务名称，按回车键确认">
    </div>
</template>

<script>
    export default {

        data () {
          return {
            inputTodo: ''
          }
        },
        methods: {
          add () {
            //得到
            const inputTodo = this.inputTodo.trim()
            //检查输入
            if(!inputTodo){
              alert('必填项！')
              return
            }
            //封装对象(数组元素是对象)
            const todo = {
              title: inputTodo,
              complete: false
            }
            /*
            * 调用添加函数
            *   这里传递的是字符串，否则会当做变量使用，没有定义就会报错
            * */
            this.$store.dispatch('addTodo', todo)

            this.inputTodo = ''
          }
        }
    }
</script>

<style>
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>
