
const TODOS_KEY = 'todos_key'
export default {
  getTodos () {
    //要有默认值，也就是空的JSON数据，否则JSON.parse()会报错
    //get方法，一定要return！！！！！
    return JSON.parse(localStorage.getItem(TODOS_KEY) || '[]')
  },
  setTodos (todos) {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
  }
}
