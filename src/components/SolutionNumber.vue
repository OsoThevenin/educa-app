<template>
    <button type="button" class="btn btn-outline-secondary" @click="handleClick(value)">
        {{value}}
    </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SolutionNumber extends Vue {
    @Prop() private value!: number;

    private handleClick(value: number) {
        this.$emit('user-answer', value);
    }
}
</script>