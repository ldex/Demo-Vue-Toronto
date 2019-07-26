<template>
    <div>
        <p>
            Name: {{ fullName }}
            Cpt = {{ cpt }}
        </p>
        <button
            :disabled="!isOk"
            @click="Increment">+</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                cpt: 0,
                isOk: true,
                firstName: '',
                lastName: ''
            }
        },
        computed: {
            fullName() {
                return this.firstName + ' ' + this.lastName
            }
        },
        methods: {
            Increment() {
                this.cpt++;
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>