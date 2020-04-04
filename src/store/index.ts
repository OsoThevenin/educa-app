import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    index: 0,
    exercices: [
      [10, 1, 1],
      [1, 1, 1, 1],
      [10],
      [10, 1, 1, 1, 1, 1],
      [10, 10],
      [10, 1, 1, 1, 1],
      [10, 10, 1],
      [10, 1, 1, 1],
      [10, 10, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [10, 1, 1, 1, 1, 1, 1],
      [10, 10, 1, 1, 1, 1, 1],
      [10, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [10, 10, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      [10, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [10, 10, 1, 1, 1],
      [10, 1],
      [1, 1, 1, 1, 1, 1]
    ],
    answers: [
      12,
      4,
      10,
      15,
      20,
      14,
      21,
      13,
      24,
      8,
      16,
      25,
      18,
      7,
      22,
      9,
      19,
      23,
      11,
      6
    ],
    possibleSolutions: [
      [10, 11, 12, 13, 8, 9, 22, 21],
      [1, 2, 3, 4, 5, 6, 7, 8],
      [8, 10, 11, 9, 12, 1, 20, 13],
      [10, 11, 12, 13, 14, 15, 16, 17],
      [15, 16, 17, 18, 20, 21, 22, 23],
      [12, 13, 15, 14, 1, 2, 3, 4],
      [1, 11, 21, 20, 19, 22, 18, 15],
      [10, 11, 12, 13, 14, 15, 16, 17],
      [4, 14, 24, 25, 20, 21, 22, 23],
      [5, 6, 7, 8, 9, 10, 11, 18],
      [12, 13, 14, 15, 16, 17, 18, 19],
      [22, 23, 24, 25, 15, 16, 17, 18],
      [9, 10, 11, 12, 20, 19, 18, 17],
      [1, 2, 3, 4, 5, 6, 7, 8],
      [12, 16, 17, 18, 19, 20, 22, 23],
      [3, 4, 5, 6, 7, 8, 9, 10],
      [9, 15, 16, 17, 18, 19, 20, 21],
      [13, 14, 15, 20, 21, 22, 23, 24],
      [8, 9, 10, 11, 12, 13, 14, 15],
      [1, 2, 3, 4, 5, 6, 7, 8]
    ],
    showAlert: false,
  },
  mutations: {
    increment(state) {
      if (state.index <= state.exercices.length) {
        state.index++;
      }
    },
    decrement(state) {
      if (state.index > 0) {
        state.index--;
      }
    },
    setShowState(state, value: boolean) {
      state.showAlert = value;
    }
  },
  actions: {
  },
  getters: {
    getExercices(state) {
      return state.exercices[state.index]
    },
    getAnswer(state) {
      return state.answers[state.index]
    },
    getPossibleSolutions(state) {
      return state.possibleSolutions[state.index]
    }
  },
  modules: {
  }
})
