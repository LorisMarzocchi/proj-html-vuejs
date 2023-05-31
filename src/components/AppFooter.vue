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
        <div class="info pt-5 text-center">
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
                <ul>
                    <li><i class="fa-brands fa-instagram"></i></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>


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



.footer {
    height: 600px;
    padding-inline: 150px;

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
        text-decoration: none;
        color: $color-btn;
        border: 4px solid $color-btn;
        text-align: center;
        padding: 20px;
        padding-inline: 20px;
        font-size: 1.3rem;
        margin-top: 50px;
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
        text-decoration: none;
        color: $color-btn;
        border: 4px solid $color-btn;
        text-align: center;
        padding: 20px;
        font-size: 1.3rem;
        margin-top: 50px;
    }
}
</style>