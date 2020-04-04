<template>
    <div class="content">
        <div class="regleta" 
            v-for="n in value" :key="n"
            :style="{backgroundColor: color}">
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Regleta extends Vue {
    @Prop() private value!: number;
    @Prop() private color!: string;
}
</script>

<style scoped lang="scss">
.content {
    padding: 4px;
}
.regleta {
    width: 1em;
    height: 1em;
    border: 1px #000 solid;
}
</style>