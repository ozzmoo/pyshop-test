import firebase from 'firebase/app'
export default {
  state: {
    todos: null
  },
  actions: {
    async addTodo({
      commit,
      dispatch
    }, {
      title,
      descr,
      time,
      status
    }) {
      try {
        const currentUser = firebase.auth().currentUser.uid;
        console.log({
          title,
          descr,
          time,
          status
        })
        await firebase.database().ref(`/users/${currentUser}/todos/`).push({
          title,
          descr,
          time,
          status
        })
      } catch (error) {
        console.log(error)
      }
    },
    async getAllTodos({
      commit
    }) {
      try {
        const currentUser = firebase.auth().currentUser.uid;
        let todos = null
        await firebase
          .database()
          .ref("/users/" + currentUser)
          .once("value")
          .then((snapshot) => {
            todos = snapshot.val();
          });
        if (todos !== null) {
          commit('updateTodosList', todos.todos)
        } else {
          commit('updateTodosList', {})
        }
      } catch (error) {
        console.error(error)
      }
    },
    async removeTodo({
      dispatch
    }, {
      id
    }) {
      try {
        const currentUser = firebase.auth().currentUser.uid;
        const ref = firebase.database().ref(`/users/${currentUser}/todos/`)
        ref.child(id).remove()
      } catch (error) {
        console.error(error)
      }
    }
  },
  mutations: {
    updateTodosList(state, todos) {
      state.todos = todos
    }
  },
  getters: {
    todos(state) {
      return state.todos
    }
  }
}