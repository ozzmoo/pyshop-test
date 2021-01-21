import firebase from 'firebase/app'

export default {
  state: {
    currentUser: null
  },
  getters: {
    currentUser(state) {
      return state.currentUser
    }
  },
  actions: {
    async login({
      commit,
      dispatch
    }, {
      email,
      password
    }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
        if (firebase.auth().currentUser) {
          const currentUser = firebase.auth().currentUser
          commit('setUpCurrentUser', currentUser)
        }
      } catch (error) {
        console.log(error)
      }
    },

    async logout({
      dispatch,
      commit
    }) {
      await firebase.auth().signOut()
    },

    signUp({
      dispath,
      commit
    }, {
      email,
      password
    }) {
      try {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        if (firebase.auth().currentUser) {
          const currentUser = firebase.auth().currentUser
          commit('setUpCurrentUser', currentUser)
        }
      } catch (error) {
        console.log(error)
      }
    }
  },
  mutations: {
    setUpCurrentUser(state, user) {
      state.currentUser = user
    }
  }
}