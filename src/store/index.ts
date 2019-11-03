import Vue from "vue";
import Vuex from "vuex";
import firebase from 'firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      loggedIn: false as Boolean,
      data: null
    },
    // projects: [] as Array<Object>,
    // notifications: [] as Array<Object>
  },
  getters: {
    user(state): Object {
      return state.user;
    },
    // projects(state): Array<Object> {
    //   return state.projects;
    // }
  },
  mutations: {
    SET_LOGGED_IN(state, value): void {
      state.user.loggedIn = value;
    },
    SET_USER(state, data): void {
      state.user.data = data;
    },
    // SET_PROJECTS(state, value): void {
    //   state.projects.push(value);
    // },
    // SET_NOTIFICATIONS(state, value): void {
    //   state.notifications.push(value);
    // }
  },
  actions: {
    fetchUser({ commit }, user): void {
      commit('SET_LOGGED_IN', user !== null);
      if(user) {
        commit('SET_USER', {
          displayName: user.displayName,
          email: user.email
        })
      } else {
        commit('SET_USER', null);
      }
    },

    // fetchProjects({ commit }): void {
    //   var projectsRef = firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).collection('projects');
      
    //   projectsRef.onSnapshot(snap => {
    //     commit('SET_PROJECTS', null)
    //     snap.forEach(doc => {
    //       var project = doc.data();
    //       project.id = doc.id;
    //       commit('SET_PROJECTS', project)
    //     })
    //   })
    // }
  },
  modules: {}
});
