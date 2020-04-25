import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    index: 0,
    exercices: [
      [10, 10, 10, 1, 1],
      [10, 10, 10, 10, 1, 1, 1, 1],
      [10, 10, 10, 10, 10],
      [10, 10, 1, 1, 1, 1, 1],
      [10, 10, 10],
      [10, 10, 10, 10, 1, 1, 1, 1],
      [10, 10, 1],
      [10, 10, 1, 1, 1],
      [10, 10, 10, 1, 1, 1, 1],
      [10, 10, 1, 1, 1, 1, 1, 1, 1, 1],
      [10, 1, 1, 1, 1, 1, 1],
      [10, 10, 10, 10, 1, 1, 1, 1, 1],
      [10, 10, 10, 10, 1, 1, 1, 1, 1, 1, 1, 1],
      [10, 1, 1, 1, 1, 1, 1, 1],
      [10, 10, 1, 1],
      [10, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [10, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [10, 10, 10, 10, 1, 1, 1],
      [10, 10, 1],
      [10, 10, 1, 1, 1, 1, 1, 1]
    ],
    answers: [
      32,
      44,
      50,
      25,
      30,
      44,
      21,
      23,
      34,
      28,
      16,
      45,
      48,
      17,
      22,
      19,
      29,
      43,
      21,
      26
    ],
    possibleSolutions: [
      [30, 31, 32, 33, 29, 28, 22, 21],
      [41, 42, 43, 44, 45, 46, 47, 48],
      [48, 49, 50, 51, 52, 41, 40, 13],
      [20, 21, 22, 23, 24, 25, 26, 27],
      [22, 23, 25, 30, 20, 32, 33, 31],
      [41, 31, 51, 40, 44, 42, 48, 15],
      [11, 21, 31, 20, 10, 19, 22, 30],
      [20, 21, 22, 23, 24, 25, 26, 27],
      [4, 14, 24, 34, 30, 31, 32, 35],
      [15, 16, 17, 18, 19, 20, 27, 28],
      [12, 13, 14, 15, 16, 17, 18, 19],
      [42, 43, 44, 45, 35, 46, 47, 48],
      [49, 50, 51, 52, 48, 39, 38, 28],
      [10, 12, 13, 14, 15, 16, 17, 18],
      [12, 16, 17, 18, 19, 20, 22, 23],
      [13, 14, 15, 16, 17, 18, 19, 29],
      [19, 25, 26, 27, 28, 29, 30, 31],
      [43, 44, 45, 50, 41, 22, 33, 34],
      [18, 19, 20, 21, 22, 23, 24, 25],
      [21, 22, 23, 24, 25, 26, 27, 28]
    ],
    showAlert: false,
  },
  mutations: {
    increment(state) {
      if (state.index < state.exercices.length - 1) {
        state.index++;
      } else {
        alert("Molt bé has arribat al final de l'exercici!")
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
