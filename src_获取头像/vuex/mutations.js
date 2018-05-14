
import axios from 'axios'
import {SEARCH} from './mutations_type'

export default {
  [SEARCH] (state, {searchName}) {
    state.initView = false
    state.loading = true
    /*
    * 设置为空，因为当搜索完一次之后，下次点击搜索时，应该从loading开始，
    *   也就是说，原来查询出来的 users应该清空
    * */
    state.users = []
    state.errorMsg = ''

    // 发ajax请求进行搜索
    const url = `https://api.github.com/search/users?q=${searchName}`
    axios.get(url)
      .then(response => {
        //成功了，
        state.loading = false
        //使用map，因为数组的每一个元素中，都只取一部分
        state.users = response.data.items.map(item => ({
          url: item.html_url,
          avatarUrl: item.avatar_url,
          username: item.login
        }))
      })
      .catch(error => {
        state.loading = false
        state.errorMsg = '请求失败!'
      })
  },
}
