import { createStore } from "vuex"
import TodoItem, {defaultValue as originTodoItem} from "./interfaces/todoItem"

export default createStore({
  state: {
    timer: {
      time: 25 * 60,
      interval: null,
    },
    todoList: [originTodoItem]
  },
  mutations: {
    
  },
  actions: {
    AddItem: function({state}, payload){
      state.todoList.push(payload)
    }
  }
})