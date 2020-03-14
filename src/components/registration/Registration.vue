<template>
    <el-row v-loading="loading"
             element-loading-text="Загрузка данных..."
             element-loading-spinner="el-icon-loading"
             element-loading-background="rgba(0, 0, 0, 0.8)">
        <div class="registration">
            <div class="registration__box">
                <div class="registration__title-box">
                    <div class="to-back">
                        <el-button type="warning" icon="el-icon-d-arrow-left" circle title="Назад" @click="onBack"/>
                    </div>
                    <div class="registration__title">{{this.title}}</div>
                </div>
                <selection-action-reg/>
                <action-list/>
            </div>
            <div class="registration__btn-block">
                <el-button type="primary" class="registration__btn-next" :disabled="arraySelectedActions.length === 0"
                           @click="addArrayActions">{{btnNext}}
                </el-button>
            </div>
        </div>
    </el-row>
</template>

<script>
    import {
        mapState, mapMutations, mapActions
    } from 'vuex'
    import ActionList from "./ActionList";
    import SelectionActionReg from "./SelectionActionReg";

    export default {
        name: "SelectionObjAction",
        components: {SelectionActionReg, ActionList},
        computed: {
            ...mapState('registration', ['title', 'btnNext', 'arraySelectedActions', 'arrayDataToSelect','loading'])
        },
        methods: {
            onBack() {
                this.EDIT_STATUS(false);
                this.$router.push('/');
            },
            addArrayActions() {
                this.ADD_ARRAY_ACTION(this.arraySelectedActions);
                this.$router.push({name: 'Urgency', params: {idActionType: 'true'}});
            },
            ...mapActions('registration', ['getActionCostType']),
            ...mapMutations('main', ['ADD_ARRAY_ACTION', 'EDIT_STATUS'])
        },
        mounted() {
            if (this.arrayDataToSelect.length === 0) {
                this.getActionCostType({status: true});
            }
        }

    }
</script>

<style scoped>
    .registration {
    }

    .registration__title-box {
        width: 100%;
        height: 100px;
        margin-bottom: 50px;
    }

    .to-back {
        margin: 35px 20px 20px 20px;
        float: left;
        order: 2;
    }

    .registration__title {
        width: 100%;
        text-align: center;
        text-transform: uppercase;
        font-size: 22px;
        font-weight: bold;
        height: 40px;
        padding-top: 50px;
    }

    .registration__btn-block {
        width: 90%;
        display: flex;
        justify-content: flex-end;
        margin: 0px auto;
        padding-bottom: 50px;
    }

    .registration__btn-next {
        text-transform: uppercase;
    }

    .registration__box {
        min-height: calc(100vh - 310px);
        margin-bottom: 50px;
    }
    @media screen and (max-width: 1100px){
        .registration__title {
            padding-top: 30px;
            order: 1;
        }
        .to-back {
            margin-top: 0px;
            order: 2;
        }
        .registration__btn-block{
            justify-content: center;
        }
        .registration__title-box {
            display: flex;
            flex-direction: column;
            flex-flow: wrap;
        }
        .registration__box {
            margin-bottom: 30px;
        }
    }
</style>