<template>
    <el-row v-loading="loading"
            element-loading-text="Загрузка данных..."
            element-loading-spinner="el-icon-loading"
            element-loading-background="rgba(0, 0, 0, 0.8)">
        <div class="title">{{title}}</div>
        <div class="result">
            <div>
                <div class="result__title">{{fieldsResult.typeAction}}</div>
                <div>{{resultObject.actionName}}</div>
            </div>
            <div>
                <div class="result__title">{{fieldsResult.typeSubject}}</div>
                <div>{{resultObject.subjectName}}</div>
            </div>
            <div>
                <div class="result__title">{{fieldsResult.actions}}</div>
                <div>
                    <div v-for="(item, i) in resultObject.arrayAction" :key="i" class="result__element">
                        <div class="result__element-info">
                            <div class="result__element-label">{{i+1 +'.'}}</div>
                            <span>{{item.nameAction}}, {{item.nameObjectType}}</span></div>
                    </div>
                </div>
            </div>
            <div>
                <div class="result__title">{{fieldsResult.urgency}}</div>
                <div>{{resultObject.nameUrgency}}</div>
            </div>
            <div>
                <div class="result__title">{{fieldsResult.value}}</div>
                <div><span>{{fieldsResult.valuePre}}</span><span
                        class="result__num-cost">{{resultObject.value}}</span><span>{{fieldsResult.valuePost}}</span>
                </div>
            </div>
            <div>
                <div class="result__title">{{fieldsResult.notation}}</div>
                <div>{{resultObject.notation}}</div>
            </div>
        </div>
        <div class="result__btn-block">
            <el-button type="primary" class="result__btn-next" @click="newCalculate">{{newCalc}}</el-button>
        </div>
    </el-row>
</template>
<script>
    import {
        mapState, mapMutations, mapActions
    } from 'vuex'

    export default {
        name: "Result",
        computed: {
            ...mapState('global', ['title', 'fieldsResult', 'resultObject', 'newCalc', 'loading']),
            ...mapState('main', ['calculationObject'])
        },
        methods: {
            newCalculate() {
                this.$confirm('Данные будут потеряны! Вы действительно хотите начать новый расчет?', 'Внимание!', {
                    confirmButtonText: 'Да',
                    cancelButtonText: 'Отмена',
                    type: 'warning'
                })
                    .then(_ => {
                        this.RESET_CALCULATION_OBJECT();
                        this.RESET_ARRAY_DATA_TO_SELECT();
                        this.$router.push('/');
                    })
                    .catch(_ => {
                    });
            },
            ...mapActions('global', ['sendDataForCalculate']),
            ...mapMutations('main', ['RESET_CALCULATION_OBJECT']),
            ...mapMutations('registration', ['RESET_ARRAY_DATA_TO_SELECT'])
        }
        ,
        mounted() {
            this.sendDataForCalculate(this.calculationObject);
        }
    }
</script>

<style scoped>
    .result {
        width: 90%;
        margin: 0px auto 50px auto;
        min-height: calc(100vh - 410px);
    }

    .title {
        width: 100%;
        text-align: center;
        text-transform: uppercase;
        font-size: 22px;
        font-weight: bold;
        height: 40px;
        padding-top: 50px;
    }

    .result__title {
        font-size: 20px;
        font-weight: bold;
        margin-top: 20px;
        margin-bottom: 10px;
    }

    .result__element {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
    }

    .result__element-info {
        display: flex;
    }

    .result__element-label {
        margin-right: 10px;
        font-weight: bold;
    }

    .result__btn-block {
        width: 90%;
        display: flex;
        justify-content: flex-end;
        margin: 0px auto;
        padding-bottom: 50px;
    }

    .result__btn-next {
        text-transform: uppercase;
    }

    .result__num-cost {
        font-size: 20px;
        font-weight: bold;
    }
    @media screen and (max-width: 1100px){
        .title {
            padding-top: 30px;
        }
        .result__btn-block{
            justify-content: center;
        }
    }

</style>