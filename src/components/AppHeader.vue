<script></script>

<template>
    <div class="navHeader container-fluid">
        <div class="navBar d-flex justify-content-between align-items-center">
            <img src="../assets/imgProject/avadabarbers-logo-x2-200x70.png" alt="">
            <div>
                <font-awesome-icon icon="fa-solid fa-cart-shopping" style="color: white;" />
                <button class="btn btn-link text-decoration-none" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"><font-awesome-icon
                        icon="fa-solid fa-bars" /></button>

                <div class="offcanvas w-100 offcanvas-end" tabindex="-1" id="offcanvasTop"
                    aria-labelledby="offcanvasTopLabel">
                    <div class="offcanvas-header">
                        <h5 id="offcanvasTopLabel">Offcanvas top</h5>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        ...popolare dinamicam
                    </div>
                </div>

            </div>

        </div>
        <div class="infoHeader mt-4 d-flex justify-content-between align-items-center">
            <div>

                <h1>Barber shop</h1>
                <div class="line mt-5"></div>
                <p class="mt-5 mb-5">The pinnacle of male Grooming</p>
                <a class="" href="#">LEARN MORE</a>
            </div>
            <img class="imgfocalmirror" src="../assets/imgProject/avadabarbers_hero_focalmirror-600x825.png" alt="">
        </div>

    </div>
</template>
<style lang="scss" scoped>
@use "../assets/styles/partial/variables.scss" as *;

.navHeader {
    background-image: url("../assets/imgProject/avadabarbers-homepage-hero-bg.jpg");
    background-position-x: center;
    background-size: 100%;
    height: 800px;
    position: relative;

    .btn-link {
        height: 40px;
    }

}

.infoHeader {

    width: 1400px;
    margin: auto;
    color: white;

    h1 {
        font-weight: bold;
        font-family: $font-title;
        color: white;
        font-size: 9rem;
    }

    .line {
        background-color: $color-btn;
        height: 0.5rem;
        width: 450px;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    p {
        font-size: 2rem;
        color: $text-color;
    }

    a {
        text-decoration: none;
        height: 80px;
        display: block;
        width: 250px;
        color: #be9359;
        border: 4px solid $color-btn;
        text-align: center;
        padding: 20px;
        font-size: 1.5rem;
    }
}

.navBar {

    max-width: 1350px;
    margin: auto;
    margin-top: 30px;

    .fa-bars {
        color: white;
        height: 40px;
    }


    button {
        width: 50px;
        height: 2rem;
    }
}
</style>