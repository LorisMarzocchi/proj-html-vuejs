<script>
export default {
    props: {
        name: String,
        address: String,
        city: String,
        mail: String,
        phoneNumber: String,
    },



}
</script>

<template>
    <div class="footer d-flex justify-content-around">
        <div class="shop">
            <img src="../assets/imgProject/avadabarbers_footer_shop_image-400x312.png" alt="">
            <a href="">SHOP OUR RANGE NOW</a>

        </div>
        <div class="info text-center">
            <img style="height: 90px;" src="../assets/imgProject/avadabarbers-logo-x2-200x70.png" alt="">
            <ul class="pt-4">
                <li>{{ name }}</li>
                <li>{{ address }}</li>
                <li>{{ city }}</li>
                <li>{{ mail }}</li>
                <li>{{ phoneNumber }}</li>
            </ul>
            <h3>FOLLOW US</h3>
            <div class="icons" style="color: white; font-size: 2rem;">
                <div class="socials_icons text-light">
                    <i class="fa-brands fa-facebook px-2"><a href="#"></a></i>
                    <i class="fa-brands fa-twitter px-2"><a href="#"></a></i>
                    <i class="fa-brands fa-youtube px-2"><a href="#"></a></i>
                    <i class="fa-brands fa-instagram px-2"><a href="#"></a></i>
                </div>


            </div>
        </div>
        <div class="appointment text-center">
            <img src="../assets/imgProject/avadabarbers_footer_appointment_image-400x312.png" alt="">
            <a href="">BOOK YOUR APPOINTMENT</a>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use "../assets/styles/partial/variables.scss" as *;

.socials_icons {
    padding-top: 50px;
    cursor: pointer;
}

.footer {
    height: 800px;
    padding-top: 80px;
    padding-inline: 250px;

    li {
        padding-right: 27px;
        margin-top: 10px;
        color: $text-color ;
        list-style: none;
        font-size: 1.5rem;
    }

    h3 {
        color: $color-btn;
        padding-top: 2rem;
    }
}


.appointment {
    img {
        width: 100%;
        margin-bottom: 50px;
    }

    a {
        @include linkBtn;

        &:hover {
            color: white;
            border: 4px solid white;
        }
    }
}

.info {
    img {
        margin-bottom: 50px;
    }

    h3 {
        margin-top: 120px;
    }
}

.shop,
.info,
.appointment {
    margin-inline: 40px;
    width: calc((100% / 3) - 40px);
}

.shop {
    text-align: center;

    img {
        width: 100%;
        margin-bottom: 50px;
    }

    a {
        @include linkBtn;

        &:hover {
            color: white;
            border: 4px solid white;
        }
    }
}
</style>