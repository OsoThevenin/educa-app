<template>
  <div class="home">
    <h3>JUGUEM AMB ELS NOMBRES</h3>
    <p>Quants n'hi ha?</p>
    <div class="card">
      <div class="card-body">
        <div v-for="(val, index) in exercices" :key="index">
          <regleta :value="val" :color="getRegletaColor(val)"/>
        </div>
      </div>
    </div>
    <div class="solution-container">
      <solution-selector :value="possibleSolutions" :answer="answer" />
    </div>
    <div class="buttons">
      <button type="button" class="btn btn-secondary" @click="decrementIndex">
        <font-awesome-icon icon="arrow-left"/>
      </button>
      <button type="button" class="btn btn-info" @click="incrementIndex">
        <font-awesome-icon icon="arrow-right"/>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Regleta from '@/components/Regleta.vue'
import SolutionSelector from '@/components/SolutionSelector.vue'
import store from '@/store/index'

export default {
  name: 'Home',
  components: {
    Regleta,
    SolutionSelector
  },
  computed: {
      index(): number {
        return store.state.index;
      },
      exercices(): number[] {
        return store.getters.getExercices
      },
      answer(): number {
        return store.getters.getAnswer
      },
      possibleSolutions(): number[] {
        return store.getters.getPossibleSolutions
      },
  },
  methods: {
      incrementIndex() {
        store.commit('setShowState', false)
        store.commit('increment')
      },
      decrementIndex() {
        store.commit('setShowState', false) 
        store.commit('decrement')
      },
      getRegletaColor(value: number): string {
        if (value === 10) return '#dd2c00';
        else return '#00bcd4'
      }
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  padding: 2%;
}
.card-body {
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.buttons {
  display: flex;
  justify-content: space-between;
  margin: 2.5em 0;
}
.solution-container {
  margin-top: 2em; 
}
</style>
