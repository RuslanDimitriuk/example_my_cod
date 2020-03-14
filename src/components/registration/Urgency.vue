<template>
    <el-row v-loading="loading"
            element-loading-text="Загрузка данных..."
            element-loading-spinner="el-icon-loading"
            element-loading-background="rgba(0, 0, 0, 0.8)">
        <div class="urgency">
            <div class="urgency__box">
                <div class="urgency__title-box">
                    <div class="to-back">
                        <el-button type="warning" icon="el-icon-d-arrow-left" circle title="Назад" @click="onBack"/>
                    </div>
                    <div class="urgency__title">{{urgencyTitle}}</div>
                </div>
                <el-radio-group v-model="radioUrgency" class="urgency__radio">
                    <el-radio v-for="(item, i) in arrayUrgencyElem" :key="i" :label="item.idUrgency"
                              class="urgency__radio-elem">{{item.name}}
                    </el-radio>
                </el-radio-group>
            </div>
            <div class="btn-box">
                <el-button type="primary" class="btn" :disabled="calculationObject.idUrgency === null"
                           @click="onClickCalculate">{{calculate}}
                </el-button>
            </div>
        </div>
    </el-row>
</template>

<script>
    import {
        mapState, mapActions, mapMutations
    } from 'vuex'

    export default {
        name: "Timing",
        computed: {
            ...mapState('registration', ['arrayUrgencyElem', 'urgencyTitle','calculate','loading']),
            ...mapState('main', ['calculationObject']),
            radioUrgency: {
                get() {
                    return this.calculationObject.idUrgency
                },
                set(value) {
                    this.UPDATE_URGENCY(value);
                }
            }
        },
        methods: {
            onBack() {
                this.$router.push({name: 'Registration', params: {idActionType: 'true'}})
            },
            addNameUrgency(id) {
                this.arrayUrgencyElem.some(elem => {
                    if(elem.idUrgency === id){
                        this.ADD_NAME_URGENCY(elem.name);
                        return true;
                    }
                })
            },
            onClickCalculate() {
                this.addNameUrgency(this.radioUrgency);
                this.$router.push({name: 'Result', params: {idActionType: 'true'}})
            },
            ...mapActions('registration', ['getUrgencyElements']),
            ...mapMutations('main', ['UPDATE_URGENCY','ADD_NAME_URGENCY'])
        },
        mounted() {
            this.getUrgencyElements();
        }
    }
</script>

<style scoped>
    .urgency {
        width: 100%;
    }

    .urgency__title-box {
        width: 100%;
        height: 100px;
        margin-bottom: 50px;
    }

    .to-back {
        margin: 35px 20px 20px 20px;
        float: left;
    }

    .urgency__title {
        width: 100%;
        text-align: center;
        text-transform: uppercase;
        font-size: 22px;
        font-weight: bold;
        height: 40px;
        padding-top: 50px;
    }

    .urgency__radio {
        width: 90%;
        margin: 0px auto;
        display: flex;
        flex-direction: column;
    }
    .urgency__radio-elem{
        font-weight: bold;
        text-transform: uppercase;
        margin-bottom: 50px;
    }

    .urgency__box{
        height: calc(100vh - 260px);
    }
    .btn-box{
        display: flex;
        justify-content: flex-end;
        width: 90%;
        margin: 0px auto;
    }
    .btn {
        text-transform: uppercase;
    }
    @media screen and (max-width: 1100px){
        .urgency__title {
            padding-top: 30px;
            order: 1;
        }
        .to-back {
            margin-top: 0px;
            order: 2;
        }
        .btn-box{
            justify-content: center;
        }
        .urgency__title-box {
            display: flex;
            flex-direction: column;
            flex-flow: wrap;
        }
    }
</style>
<style>
    .urgency__radio-elem .el-radio__label{
        font-size: 16px;
    }
</style>