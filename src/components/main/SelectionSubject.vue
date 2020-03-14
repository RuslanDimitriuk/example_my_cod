<template>
    <div>
        <div class="main-menu__title">{{this.titleSubject}}</div>
        <el-row class="main-menu__btn-box">
            <div class="btn__to-back-box">
                <div class="btn__to-back">
                    <el-button type="warning" icon="el-icon-d-arrow-left" circle title="Назад" @click="backToAction"/>
                </div>
            </div>
            <div class="main-menu__btn-subject">
                <div class="main-menu__btn" v-for="item in buttonInfoSubject">
                    <el-button type="primary" class="btn" @click="onClick(item)">{{item.name}}</el-button>
                </div>
            </div>
        </el-row>
    </div>
</template>

<script>
    import {
        mapState, mapMutations
    } from 'vuex';

    export default {
        name: "SelectionSubject",
        computed: {
            ...mapState('main', ['titleSubject', 'buttonInfoSubject'])
        },
        methods: {
            onClick(data) {
                this.SELECTION_SUBJECT(data);

                this.$router.push({name: 'Registration', params: {idActionType: 'true'}});
            },
            backToAction() {
                this.BACK_TO_ACTION();
            },
            ...mapMutations('main', ['BACK_TO_ACTION', 'SELECTION_SUBJECT'])
        }
    }
</script>

<style scoped>
    .main-menu__title {
        text-transform: uppercase;
        font-size: 22px;
        font-weight: bold;
        text-align: center;
        height: 40px;
        padding-top: 50px;
    }

    .main-menu__btn-box {
        display: flex;
        min-height: 300px;
    }

    .main-menu__btn {
        display: inline-block;
        width: 50%;
        text-align: center;
    }

    .btn {
        width: 250px;
        font-size: 22px;
        margin: 50px;
    }

    .btn__to-back-box {
        width: 25%;
        display: flex;
        justify-content: flex-end;
    }

    .btn__to-back {
        margin-top: 50px;
    }
    .main-menu__btn-subject{
        width: 50%;
    }
    @media screen and (max-width: 1100px) {
        .main-menu__title{
            padding-top: 30px;
        }
        .main-menu__btn-subject{
            width: 100%;
            display: flex;
            flex-direction: column;
        }
        .btn__to-back-box {
            min-width: 60px;
            width: 10%;
        }
        .main-menu__btn-box{
            display: block;
            min-height: 330px;
        }
        .main-menu__btn{
            width: 100%;
        }
        .btn {
            margin: 0px 0px 20px 0px;
        }
        .btn__to-back-box{
            min-height: 40px;
        }
        .btn__to-back{
            margin: 0px;
        }
    }
</style>