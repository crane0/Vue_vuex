
import {SEARCH} from './mutations_type'

export default {
  search ({commit}, searchName) {
    commit(SEARCH, {searchName})
  },

}
