<template>
    <div>
        <div class="row mt-5">
            <div class="col-md-10 container-fluid">
            </div>
            <div class="container-fluid col-md-10 pl-lg-4 pr-lg-4">
                <h1 class="text-white font-weight-bold">Sign in below, you're just a step away from the fun!</h1>
            </div>
        </div>
        <div class="row mt-5 px-lg-3">
            <div v-if="error" class="container alert alert-danger">
                {{ error_message }}
            </div>
            <form action="#" class="col-12" v-on:submit.prevent="handleSubmit">
                <div class="row">
                    <div class="col-12 col-md-6 col-md-6 offset-md-3 form-group">
                        <label for="email" class="text-white">
                            Email:
                        </label>
                        <input id="email" type="email" class="form-control bg-dark text-white" ref="email" required>
                    </div>
                    <div class="col-12 col-md-6 col-md-6 offset-md-3 form-group">
                        <label for="password" class="text-white">
                            Password:
                        </label>
                        <input id="password" type="password" class="form-control bg-dark text-white" ref="password"
                               required minlength="5" v-on:keyup="resetErrors">
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-12 col-md-6 offset-md-3 form-group">
                        <button class="btn btn-block btn-light">sign in</button>
                    </div>
                </div>
            </form>
        </div>
        <div class="row mt-5 px-lg-3">
            <div class="container">
                <h4 class="text-center text-white">Sign In Using</h4>
            </div>
            <div class="col-12 mt-4">
                <div class="row">
                    <div class="col-6 offset-3 d-flex flex-row justify-content-around">
                        <a href="#" class="btn btn-danger"><i class="fab fa-google mx-auto"></i> <span class="d-none d-sm-inline">gmail</span></a>
                        <a href="#" class="btn btn-primary"><i class="fab fa-facebook-f mx-auto"></i> <span class="d-none d-sm-inline">facebook</span></a>
                        <a href="#" class="btn btn-secondary"><i class="fab fa-twitter mx-auto"></i> <span class="d-none d-sm-inline">twitter</span></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="container-fluid">
                <h4 class="text-white font-weight-bold">Data Collected from Over 30 Radio Stations in Ghana</h4>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'SignIn',
        data() {
            return {
                credentials: {
                    email: '',
                    password: '',
                },
                error: false,
                error_message: ''
            }
        },
        methods: {
            handleSubmit: function () {
                this.credentials.email = this.$refs.email.value;
                this.credentials.password = this.$refs.password.value;
                this.$store.dispatch('signIn', this.credentials);
            },
            resetErrors: function () {
                this.error = false;
            }
        }
    }
</script>
