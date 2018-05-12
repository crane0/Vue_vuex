
export default {
  completeCount (state) {
    return state.todos.reduce((preTotal, todo) => preTotal + (todo.complete?1:0) ,0)
  },
  totalSize (state) {
    return state.todos.length
  },
  checkAll (state, getters) {
    return state.todos.length === getters.completeCount && getters.completeCount>0
  }
}
