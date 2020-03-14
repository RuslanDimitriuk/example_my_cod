import * as types from './mutation-types'

export default {
    [types.ADD_ACTION_CONST_TYPE](state, payload) {
        state.arrayDataToSelect = _.cloneDeep(payload);
        state.loading = false;
    },
    [types.EDIT_LOADING](state, payload) {
        state.loading = payload;
    },
    [types.ADD_ACTION_IN_ARRAY](state, payload) {
        state.arraySelectedActions.push(payload);
    },
    [types.REMOVE_ACTION](state, payload) {
        let obj = state.arraySelectedActions.splice(payload, 1);
        if (!obj.ableMultiSelect) {
            state.arrayDataToSelect.forEach(element => {
                if (element.idObjectType === obj[0].idObjectType) {
                    element.arrayActions.some(elem => {
                        if (elem.idAction === obj[0].selectAction) {
                            elem.disabled = false;
                            return true
                        }
                    })
                }
            })
        }
    },
    [types.CHECK_ACTION](state, payload) {
        state.arrayDataToSelect.forEach(element => {
            state.arraySelectedActions.forEach(elem => {
                if (element.idObjectType === elem.idObjectType) {
                    element.arrayActions.forEach(elem1 => {
                        if (elem1.idAction === elem.selectAction && !elem1.ableMultiSelect) {
                            elem1.disabled = true;
                        }
                    })
                }
            })
        })
    },
    [types.ADD_URGENCY_ELEMENTS](state, payload) {
        state.arrayUrgencyElem = payload;
        state.loading = false;
    },
    [types.CHANGE_ACTION](state,payload){
        state.arrayDataToSelect[payload].modelIsArea = !state.arrayDataToSelect[payload].modelIsArea;
    },
    [types.RESET_ARRAY_DATA_TO_SELECT](state,payload){
        state.arrayDataToSelect = [];
        state.arraySelectedActions = [];
    }
}