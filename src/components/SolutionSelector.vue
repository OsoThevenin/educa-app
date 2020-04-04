<template>
    <div class="container">
        <div class="alert-container">
            <div class="alert" role="alert" v-show="showAlert"
                :class="[{ 'alert-success' : alertType }, { 'alert-danger': !alertType }]">
                {{message}}
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                <div class="row row-cols-4">
                    <div class="column"
                        v-for="num in value"
                        :key="num">
                        <solution-number :value="num" @user-answer="handleUserAnswer($event)"/>
                    </div>
                </div>
                <div class="button-container">
                    <button type="button" class="btn btn-info" @click="handleClick">Comprovar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import SolutionNumber from '@/components/SolutionNumber.vue';

@Component({
    components: {
        SolutionNumber
    },
    computed: {
        showAlert() {
            return this.$store.state.showAlert
        }
    }
})
export default class SolutionSelector extends Vue {
    @Prop() private value!: number[];
    @Prop() private answer!: number;
    private userAnswer: number | undefined;
    private alertType = false;
    private message = '';

    private handleUserAnswer(value: number) {
        this.userAnswer = value;
    }

    private handleClick() {
        this.alertType = this.userAnswer === this.answer;
        if (this.alertType) {
            this.message = 'Molt bé! 👏👏'
        } else {
            this.message = 'Ups! Torna-ho a comptar. 🔍'
        }  
        this.$store.commit('setShowState', true);  
    }
}
</script>

<style scoped>
.alert-container {
    height: 4em;
}
.column {
    padding: 1em 0.5em;
}
.button-container {
    display: flex;
    align-items: flex-end;
    margin-top: 1em;    
}
</style>