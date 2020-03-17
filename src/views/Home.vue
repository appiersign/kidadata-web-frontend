<template>
    <div>
        <div class="row mt-5">
            <div class="col-md-10 container-fluid">
            </div>
            <div class="container-fluid col-md-10 pl-lg-4 pr-lg-4">
                <h1 class="text-white font-weight-bold">Real Time Air Play Charts of Over 72million Songs!</h1>
            </div>
        </div>
        <div class="row mt-5 px-lg-3">
            <router-link class="col-6 col-lg-3 my-2" to="/charts">
                <article class="col-12 px-0 chart-card mt-sm-4 mb-sm-4">
                    <img src="../../public/assets/images/24daily.jpg" alt="" class="w-100">
                    <h5 class="bg-dark text-white">Top Songs Since 0000hrs</h5>
                </article>
            </router-link>
            <router-link class="col-6 col-lg-3 my-2" to="charts">
                <article class="col-12 px-0 chart-card mt-sm-4 mb-sm-4">
                    <img src="../../public/assets/images/7weekly.jpg" alt="" class="w-100">
                    <h5 class="bg-dark text-white">Top Songs Since Monday</h5>
                </article>
            </router-link>
            <router-link class="col-6 col-lg-3 my-2" to="charts">
                <article class="col-12 px-0 chart-card mt-sm-4 mb-sm-4">
                    <img src="../../public/assets/images/8.png" alt="" class="w-100">
                    <h5 class="bg-dark text-white">Top Songs Since 1st March</h5>
                </article>
            </router-link>
            <router-link class="col-6 col-lg-3 my-2" to="charts">
                <article class="col-12 px-0 chart-card mt-sm-4 mb-sm-4">
                    <img src="../../public/assets/images/9.png" alt="" class="w-100">
                    <h5 class="bg-dark text-white">Top Songs of The Year</h5>
                </article>
            </router-link>
        </div>
        <div class="row mt-5">
            <div class="container-fluid">
                <h4 class="text-white font-weight-bold">Data Collected from Over 30 Radio Stations in Ghana</h4>
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'Home'
    }
</script>
