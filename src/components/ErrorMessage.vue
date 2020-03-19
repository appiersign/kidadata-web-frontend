<template>
    <div v-if="this.$store.state.error" class="container alert alert-danger text-center">
        {{ message }}
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: "ErrorMessage",
        data () {
            return {
                error: false,
                error_message: ''
            }
        },
        computed: mapState({
            message: state => state.error_message
        })
    }
</script>

<style scoped>

</style>