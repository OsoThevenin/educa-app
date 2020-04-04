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
      <button type="button" class="btn btn-secondary" @click="decrementIndex">Enrere</button>
      <button type="button" class="btn btn-info" @click="incrementIndex">Següent</button>
    </div>
  </div>
</template>

<script lang="ts">
import Regleta from '@/components/Regleta.vue'
import SolutionSelector from '@/components/SolutionSelector.vue'

export default {
  name: 'Home',
  components: {
    Regleta,
    SolutionSelector
  },
  computed: {
      index(): number {
        return this.$store.state.index;
      },
      exercices(): number[] {
        return this.$store.getters.getExercices
      },
      answer(): number {
        return this.$store.getters.getAnswer
      },
      possibleSolutions(): number[] {
        return this.$store.getters.getPossibleSolutions
      },
  },
  methods: {
      incrementIndex() {
        this.$store.commit('setShowState', false)
        this.$store.commit('increment')
      },
      decrementIndex() {
        this.$store.commit('setShowState', false) 
        this.$store.commit('decrement')
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
  margin: 2%;
}
.card-body {
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.buttons {
  display: flex;
  justify-content: space-around;
  margin: 2.5em 0;
}
.solution-container {
  margin-top: 2em; 
}
</style>
