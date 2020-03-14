<template>
    <div>
        <div class="main-menu__title">{{this.titleAction}}</div>
        <el-row class="main-menu__btn-box">
            <div class="main-menu__btn-block">
                <div class="main-menu__btn" v-for="item in buttonInfoAction">
                    <el-button type="primary" class="btn" @click="onClick(item)" :title="item.typeName" :disabled="item.idActionType !== 1">{{item.shortTypeName}}</el-button>
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
        name: "SelectionAction",
        computed: {
            ...mapState('main', ['titleAction', 'buttonInfoAction'])
        },
        methods: {
            onClick(data) {
                    this.SELECTION_ACTION(data);
            },
            ...mapMutations('main', ['SELECTION_ACTION']),
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
        justify-content: center;
        min-height: 300px;
    }

    .main-menu__btn-block{
        width: 50%;
    }

    .main-menu__btn {
        display: inline-block;
        width: 50%;
        text-align: center;
    }

    .btn {
        min-width: 270px;
        font-size: 22px;
        margin: 50px;
    }
    @media screen and (max-width: 1100px) {
        .main-menu__title {
            font-size: 26px;
            padding-top: 30px;
            margin-bottom: 30px;
        }
        .main-menu__btn-block{
            width: 270px;
            display: flex;
            flex-direction: column;
        }
        .btn {
            margin: 0px 0px 20px 0px;
        }
    }
</style>