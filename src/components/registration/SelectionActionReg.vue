<template>
    <div>
        <el-row v-for="(item, i) in arrayDataToSelect" :key="i">
            <div class="selection-action-reg">
                <div class="selection-action-reg_check-box">
                    <el-checkbox size="medium" class="selection-action-reg_check" v-model="item.modelIsArea">
                        {{item.nameObjectType}}
                    </el-checkbox>
                </div>
                <div v-if="item.modelIsArea" class="selection-action-reg_select-box">
                    <el-select v-model="selectAction" placeholder="Выберите действие"
                               class="selection-action-reg_select" @change="isSelectedAction(item, selectAction)">
                        <el-option
                                v-for="item1 in item.arrayActions"
                                :key="item1.idAction"
                                :label="item1.nameAction"
                                :value="item1.idAction"
                                :disabled="item1.disabled"
                                :title="item1.nameAction">
                        </el-option>
                    </el-select>
                </div>
            </div>
        </el-row>
    </div>
</template>

<script>
    import {
        mapState, mapMutations
    } from 'vuex'

    export default {
        name: "SelectionActionReg",
        data() {
            return {
                selectAction: null
            }
        },
        computed: {
            ...mapState('registration', ['arrayDataToSelect', 'isArea', 'value1']),
        },
        methods: {
            // changeModelIsArea(index) {
            //     this.CHANGE_ACTION(index);
            // },
            isSelectedAction(item, selectAction) {
                let obj = {
                    idObjectType: item.idObjectType,
                    nameObjectType: item.nameObjectType,
                    selectAction: selectAction,
                    nameAction: null,
                    ableMultiSelect: null
                };
                item.arrayActions.some(elem => {
                    if (elem.idAction === selectAction) {
                        obj.ableMultiSelect = elem.ableMultiSelect;
                        obj.nameAction = elem.nameAction;
                        return true
                    } else {
                        return false
                    }
                });
                this.ADD_ACTION_IN_ARRAY(obj);
                this.selectAction = null;
                this.CHECK_ACTION();
            },
            ...mapMutations('registration', ['ADD_ACTION_IN_ARRAY', 'CHECK_ACTION', 'CHANGE_ACTION']),
        }
    }
</script>

<style scoped>
    .selection-action-reg {
        display: flex;
        margin-bottom: 30px;
        height: 60px;
    }

    .selection-action-reg_check-box {
        width: 50%;
        padding-left: 5%;
    }

    .selection-action-reg_check {
        font-weight: bold;
        text-transform: uppercase;
    }

    .selection-action-reg_select-box {
        width: 50%;
        padding-right: 10%;
    }

    .selection-action-reg_select {
        width: 100%;
    }

    @media screen and (max-width: 1100px) {
        .selection-action-reg {
            display: block;
        }

        .selection-action-reg_check-box {
            margin-bottom: 15px;
        }

        .selection-action-reg_select-box {
            width: 90%;
            padding-right: 0%;
            margin: 0px auto;
        }
    }
</style>
<style>
    .el-select-dropdown {
        max-width: 90% !important;
        min-width: 512px;

    }
    @media screen and (max-width: 1100px) {
        .selection-action-reg_check .el-checkbox__label{
            font-size: 16px;
        }
        .el-select-dropdown {
            max-width: 90% !important;
            min-width: 512px;
            transform-origin: center top;
            z-index: 2019;
            position: absolute;
            top: 304px;
            left: 0px !important;
        }
        .el-select-dropdown__item {
            text-overflow: ellipsis;
            line-height: 34px;
            height: 80px;
        }
    }
</style>
