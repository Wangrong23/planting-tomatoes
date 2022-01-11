import { createStore } from "vuex"
import TodoItem from "./interfaces/todoItem"

let todoItem1:TodoItem = {
  title: 'asd',
  time: 15,
  goal: 2
}

export default createStore({
  state: {
    timer: {
      time: 25 * 60,
      interval: null,
    },
    todoList: [todoItem1]
  },
  mutations: {
    
  },
  actions: {
    
  }
})