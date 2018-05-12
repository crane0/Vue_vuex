
import {ADD_TODO, DELETE_TODO, DELETE_COMPLETE_TODOS, CHECKALL_TODOS} from './mutations_type'

export default {
  addTodo ({commit}, todo) {
    commit(ADD_TODO, {todo})
  },
  deleteTodo ({commit}, index) {
    commit(DELETE_TODO, {index})
  },
  deleteCompleteTodos ({commit}) {
    commit(DELETE_COMPLETE_TODOS)
  },
  checkAllTodos ({commit}, value) {
    commit(CHECKALL_TODOS, {value})
  }
}
