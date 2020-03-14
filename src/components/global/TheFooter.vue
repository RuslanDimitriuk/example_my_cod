<template>
    <div class="footer">
        <div class="footer__title">
            <span class="footer__title-text">национальное кадастровое агенство</span>
        </div>
        <div class="footer__info">
            <span class="footer__info-text">Управление разработки информационных систем 2020 ©</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TheFooter"
    }
</script>

<style scoped>
    .footer {
        height: 100px;
        background: #004fa3;
        text-align: center;
    }

    .footer__title {
        width: 90%;
        border-bottom: 2px solid #ffffff;
        margin: 0 auto;
        height: 60px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .footer__title-text {
        text-transform: uppercase;
        font-size: 22px;
        color: #ffffff;
    }

    .footer__info {
        padding-top: 10px;
        margin: 0 auto;
        width: 90%;
    }

    .footer__info-text {
        text-transform: uppercase;
        font-size: 16px;
        color: #ffffff;
    }
</style>