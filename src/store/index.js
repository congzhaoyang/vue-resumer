import Vuex from 'vuex'
import Vue from 'vue'
import objectPath from "object-path"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selected: 'profile',
    user: {
        id: '',
        username: ''
    },
    resume: {
        config: [
            { field: 'profile', icon: 'id' },
            { field: 'work history', icon: 'work' },
            { field: 'education', icon: 'book' },
            { field: 'projects', icon: 'heart' },
            { field: 'awards', icon: 'cup' },
            { field: 'contacts', icon: 'phone' },
        ],
        profile: {
            name: 'congzhaoyang',
            city: 'shanghai',
            title: 'font-end developer'
        },
        'work history': [
            { company: 'AL', content: '我的第二份工作是' },
            { company: 'TX', content: '我的第一份工作是' },
        ],
        education: [
            { school: 'AL', content: '文字' },
            { school: 'TX', content: '文字' },
        ],
        projects: [
            { name: 'project A', content: '文字' },
            { name: 'project B', content: '文字' },
        ],
        awards: [
            { name: 'awards A', content: '文字' },
            { name: 'awards B', content: '文字' },
        ],
        contacts: [
            { contact: 'phone', content: '13812345678' },
            { contact: 'qq', content: '12345678' },
        ],
      }
  },
  mutations: {
    initState(state, payload){
      Object.assign(state, payload)
    },
    switchTab (state, payload){
        state.selected = payload // 关于 payload 看这里 http://vuex.vuejs.org/zh-cn/mutations.html#提交载荷（payload）
        localStorage.setItem('state', JSON.stringify(state))
    },
    updateResume(state, {path, value}){
      objectPath.set(state.resume, path, value)
      localStorage.setItem('state', JSON.stringify(state))
    },
    setUser(state, payload) {
        Object.assign(state.user, payload)
        console.log(state.user)
    },
    removeUser(state) {
        state.user.id = null
    }
  }
})
