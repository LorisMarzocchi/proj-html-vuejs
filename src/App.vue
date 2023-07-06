<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
import 'bootstrap/dist/js/bootstrap.min.js';

export default {
    data() {
        return {
            loading: true,
            ArrMenu: [
                {
                    name: "Home",
                    src: "#",
                },
                {
                    name: "About us",
                    src: "#",
                },
                {
                    name: "Service",
                    src: "#",
                },
                {
                    name: "Shop",
                    src: "#",
                },
                {
                    name: "Our Team",
                    src: "#",
                },
                {
                    name: "Blog",
                    src: "#",
                },
                {
                    name: "Contact us",
                    src: "#",
                },

            ],
            ArrInfoCompany: [
                {
                    name: "Avada Barbers",
                    address: "123 New York Street",
                    city: "New York City",
                    mail: "info@yourwebsite.com",
                    phoneNumber: "+1(555) 555-1212"
                },
            ],



        }
    },
    components: {
        AppHeader,
        AppMain,
        AppFooter,
    },




};

</script>

<template>
    <AppHeader :ArrMenu="this.ArrMenu" />
    <AppMain />
    <AppFooter v-for="info in this.ArrInfoCompany" :key="info.name" :name="info.name" :address="info.address"
        :city="info.city" :mail="info.mail" :phoneNumber="info.phoneNumber" />
</template>

<style lang="scss">
@use "./assets/general.scss" as *;
@import "../node_modules/bootstrap/scss/bootstrap";
@import "@fortawesome/fontawesome-free/css/all.css";
</style>
