<template>
    <div>
        <div class="row mt-5">
            <div class="col-md-10 container-fluid">
            </div>
            <div class="container-fluid col-md-10 pl-lg-4 pr-lg-4">
                <h1 class="text-white font-weight-bold">Sign Up below, you're just a step away from the fun!</h1>
            </div>
        </div>
        <div class="row mt-5 px-lg-3">
            <div v-if="error" class="container alert alert-danger">
                {{ error_message }}
            </div>
            <form action="#" class="col-12" v-on:submit.prevent="handleSubmit">
                <div class="row">
                    <div class="col-12 col-md-6 form-group">
                        <label for="first_name" class="text-white">
                            First Name:
                        </label>
                        <input id="first_name" type="text" class="form-control bg-dark text-white" ref="first_name" required>
                    </div>
                    <div class="col-12 col-md-6 form-group">
                        <label for="last_name" class="text-white">
                            Last Name:
                        </label>
                        <input id="last_name" type="text" class="form-control bg-dark text-white" ref="last_name" required>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-6 form-group">
                        <label for="gender" class="text-white">
                            Gender:
                        </label>
                        <select id="gender" class="form-control bg-dark text-white" ref="gender" required>
                            <option value="" disabled selected></option>
                            <option value="male">male</option>
                            <option value="female">female</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-6 form-group">
                        <label for="email" class="text-white">
                            Email:
                        </label>
                        <input id="email" type="email" class="form-control bg-dark text-white" ref="email" required>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-6 form-group">
                        <label for="password" class="text-white">
                            Password:
                        </label>
                        <input id="password" type="password" class="form-control bg-dark text-white" ref="password" required minlength="5" v-on:keyup="resetErrors">
                    </div>
                    <div class="col-12 col-md-6 form-group">
                        <label for="password_confirmation" class="text-white">
                            Retype Password:
                        </label>
                        <input id="password_confirmation" type="password" class="form-control bg-dark text-white" ref="password_confirmation" required minlength="5" v-on:keyup="resetErrors">
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-12 col-md-6 offset-md-6 form-group">
                        <button class="btn btn-block btn-light">sign up</button>
                    </div>
                </div>
            </form>
        </div>
        <div class="row mt-5 px-lg-3">
            <div class="container">
                <h4 class="text-center text-white">Sign Up Using</h4>
            </div>
            <div class="col-12 mt-4">
                <div class="d-flex flex-row row justify-content-center">
                    <div class="col-2">
                        <a href="#" class="btn btn-danger"><i class="fab fa-google"></i> gmail</a>
                    </div>
                    <div class="col-2">
                        <a href="#" class="btn btn-primary"><i class="fab fa-facebook-f"></i> facebook</a>
                    </div>
                    <div class="col-2">
                        <a href="#" class="btn btn-secondary"><i class="fab fa-twitter"></i> twitter</a>
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
    import firebase from '../firebase';

    export default {
        name: 'SignUp',
        data () {
            return {
                user : {
                    first_name: '',
                    last_name: '',
                    gender: '',
                    email: '',
                    password: '',
                },
                error: false,
                error_message: ''
            }
        },
        methods: {
            handleSubmit: function () {
                if (this.$refs.password.value !== this.$refs.password_confirmation.value) {
                    this.error_message = 'password mismatch';
                    return this.error = true;
                }
                this.user.gender = this.$refs.gender;
                this.user.first_name = this.$refs.first_name;
                this.user.last_name = this.$refs.last_name;

                firebase.auth().createUserWithEmailAndPassword(this.$refs.email.value, this.$refs.password.value)
                .then(() => this.store.commit('SET_AUTH_USER'))
                .catch(error => console.error(error));
            },
            resetErrors: function () {
                this.error = false;
            }
        }
    }
</script>
