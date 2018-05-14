
import axios from 'axios'

import {LOADING, REQUEST_ERROR, REQUEST_SUCCESS} from './mutations_type'

export default {
  search ({commit}, searchName) {

    //搜索一开始就是loading状态
    commit(LOADING)

    // 发ajax请求进行搜索
    const url = `https://api.github.com/search/users?q=${searchName}`
    axios.get(url)
      .then(response => {
        //使用map，因为数组的每一个元素中，都只取一部分
        const users = response.data.items.map(item => ({
          url: item.html_url,
          avatarUrl: item.avatar_url,
          username: item.login
        }))
        //成功了，
        commit(REQUEST_SUCCESS, {users})
      })
      .catch(error => {
        // 失败了, 提交mutation: 更新状态(失败)
        commit(REQUEST_ERROR, {msg: '请求失败'})
      })
  }
}
