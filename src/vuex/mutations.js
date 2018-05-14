
import {LOADING, REQUEST_ERROR, REQUEST_SUCCESS} from './mutations_type'

export default {
  [LOADING] (state) {
    state.initView = false
    state.loading = true
    state.users = []
    state.errorMsg = ''
  },
  [REQUEST_SUCCESS] (state, {users}) {
    state.loading = false
    state.users = users
  },
  [REQUEST_ERROR] (state, {msg}) {
    state.loading  = false
    state.errorMsg = msg
  },
}
