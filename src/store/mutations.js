
import {ADD_TODO, DELETE_TODO, DELETE_COMPLETE_TODOS, CHECKALL_TODOS} from './mutations_type'

export default {
  [ADD_TODO] (state, {todo}) {
    state.todos.unshift(todo)
  },
  [DELETE_TODO] (state, {index}) {
    state.todos.splice(index, 1)
  },
  [DELETE_COMPLETE_TODOS] (state) {
    state.todos = state.todos.filter(todo => !todo.complete)
  },
  [CHECKALL_TODOS] (state, isSelected) {
    state.todos.forEach(todo => todo.complete = isSelected)
  }
}
