<template>
    <div class="header">
        <div class="header__box-logo">
            <div class="header__logo"></div>
        </div>
        <div class="header__title">
            <span class="header__title-text">Калькулятор стоимости государственной регистрации недвижимости</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TheHeader",
    }
</script>

<style scoped>
    .header{
        width: 100%;
        height: 60px;
        background-color: #004fa3;
        display: flex;
    }
    .header__box-logo{
        width: 10%;
        min-width: 200px;
    }
    .header__logo{
        width: 175px;
        height: 40px;
        background: url("../../assets/logo_nca.png") no-repeat;
        margin: 10px auto auto 10px;
    }
    .header__title{
        width: 80%;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .header__title-text{
        display: inline-block;
        text-transform: uppercase;
        color: white;
        font-size: 24px;
    }
    @media screen and (max-width: 1100px) {
        .header{
            height: 80px;
        }
        .header__box-logo{
            display: none;
        }
        .header__title{
            width: 100%;
        }
        .header__title-text{
            font-size: 22px;
        }
    }
</style>