<script>
export default {
    props: {
        ArrMenu: Array,
    },
};

</script>

<template>
    <div class="navHeader container-fluid">
        <div class="navBar d-flex justify-content-between">
            <img src="../assets/imgProject/avadabarbers-logo-x2-200x70.png" alt="">
            <div class="d-flex align-items-baseline justify-content-end">
                <font-awesome-icon icon="fa-solid fa-cart-shopping"
                    />
                <button class="btn btn-link text-decoration-none" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"><font-awesome-icon
                        icon="fa-solid fa-bars" /></button>

                <div class="offcanvas bg-dark w-100 offcanvas-end" tabindex="-1" id="offcanvasTop"
                    aria-labelledby="offcanvasTopLabel">
                    <div class="offcanvas-header">
                        <h5 id="offcanvasTopLabel">Offcanvas top</h5>
                        <button style="color: white;" type="button" class="btn-close text-reset btn-light btn-close-white"
                            data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body d-flex justify-content-center fs-5 align-items-center bg-dark">
                        <ul style="padding-bottom: 200px;">
                            <li v-for="eleMenu in ArrMenu" :key="eleMenu.name" class=" text-decoration-none mt-3">
                                <a class=" text-decoration-none " style="color: white;" href="#">{{ eleMenu.name }}</a>
                            </li>
                        </ul>

                    </div>
                </div>

            </div>

        </div>
        <div class="presentation mt-4 d-flex justify-content-between align-items-center">
            <div>

                <h1>Barber Shop</h1>
                <div class="line mt-5"></div>
                <p class="mt-5 mb-5">The pinnacle of male Grooming</p>
                <a class="" href="#">LEARN MORE</a>
            </div>
            <img class="imgfocalmirror" src="../assets/imgProject/avadabarbers_hero_focalmirror-400x550.png" alt="">
        </div>

    </div>
</template>
<style lang="scss" scoped>
@use "../assets/styles/partial/variables.scss" as *;

.navHeader {
    background-image: url("../assets/imgProject/avadabarbers-homepage-hero-bg.jpg");
    background-position-x: center;
    background-repeat: no-repeat;
    background-size: 100%;
    padding-top: 2rem;
    position: relative;

    .btn-link {
        height: 70%;
        margin-left: 1rem;
    }

}

.presentation {

    width: 1200px;
    margin: auto;
    color: white;
    padding-bottom: 50px;
    padding-inline: 120px;
    // .imgfocalmirror{
    //     // margin-right: 50px;
    // }

    h1 {
        font-weight: bold;
        font-family: $font-title;
        color: white;
        font-size: 4rem;
    }

    .line {
        background-color: $color-btn;
        height: 0.2rem;
        width: 230px;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1.5rem;
        color: $text-color;
    }

    a {
        @include linkBtn;
        padding-inline: 50px;

        &:hover {
            color: white;
            border: 4px solid white;
        }
    }
}

.navBar {

    max-width: 1200px;
    margin: auto;
    padding-inline: 120px;

    margin-top: 30px;
    margin-bottom: 50px;

    img {
        width: 170px;
    }

    .fa-bars, .fa-cart-shopping {
        color: white;
        height: 2rem;
    }


    button {
        width: 50px;
        height: 2rem;
    }
}
</style>