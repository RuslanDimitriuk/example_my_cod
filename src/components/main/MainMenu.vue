<template>
    <el-row v-loading="loading"
            element-loading-text="Загрузка данных..."
            element-loading-spinner="el-icon-loading"
            element-loading-background="rgba(0, 0, 0, 0.8)">
        <div class="main-menu">
            <selection-action v-if="isActions"/>
            <selection-subject v-if="!isActions"/>
            <el-row class="main-menu__info">
                <el-col :span="6" class="main-menu__info-box">
                    <div class="main-menu__info-title">
                    <span>
                        {{this.titleInfo}}
                    </span>
                    </div>
                    <div>
                        <ol>
                            <li v-for="(item, i) in itemInfo" class="main-menu__item-lists">{{i+1 + '. '}}<a
                                    :href="item.href" class="main-menu__link">{{item.name}}</a></li>
                        </ol>
                    </div>
                </el-col>
            </el-row>
        </div>
    </el-row>
</template>

<script>
    import {
        mapState, mapActions
    } from 'vuex'
    import SelectionAction from "./SelectionAction";
    import SelectionSubject from "./SelectionSubject";

    export default {
        name: "Main",
        components: {SelectionSubject, SelectionAction},
        computed: {
            ...mapState('main', ['title', 'buttonInfoAction', 'titleInfo', 'itemInfo', 'isActions', 'loading'])
        },
        methods: {
            ...mapActions('main', ['getActionAndSubj'])
        },
        mounted() {
            this.getActionAndSubj();
        }
    }
</script>

<style scoped>
    .main-menu {
    }

    .main-menu__info {
        width: 80%;
        margin: 100px auto;
    }

    .main-menu__info-box {
        border: 2px solid #004fa3;
        border-radius: 5px;
        padding: 20px 10px 20px 10px;
        min-width: 300px;
    }

    .main-menu__info-title {
        margin-bottom: 15px;
        font-size: 20px;
        font-weight: bold;
    }

    .main-menu__item-lists {
        font-size: 18px;
        margin-bottom: 10px;
    }

    .main-menu__link {
        text-decoration: none;
        color: #000;
    }

    .main-menu__link:hover {
        transition: 500ms;
        font-weight: bold;
        color: #004fa3;
    }
    @media screen and (max-width: 1100px) {
        .main-menu__info {
            width: 100%;
            display: flex;
            justify-content: center;
            margin: 30px 0px 20px 0px;
        }
    }
</style>