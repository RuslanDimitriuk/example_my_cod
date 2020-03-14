import * as types from './mutation-types'

export default {
    [types.ADD_ACTION_SUBJECT](state, payload) {
        state.buttonInfoAction = _.cloneDeep(payload.buttonInfoAction);
        state.buttonInfoSubject = _.cloneDeep(payload.buttonInfoSubject);
        state.loading = false;
    },
    [types.SELECTION_ACTION](state, payload) {
        state.calculationObject.idActionType = payload.idActionType;
        state.calculationObject.actionName = payload.typeName;
        state.isActions = false;
    },
    [types.SELECTION_SUBJECT](state, payload) {
        state.calculationObject.idSubjectType = payload.idSubjectType;
        state.calculationObject.subjectName = payload.name;
        state.isActions = true;
    },
    [types.EDIT_STATUS](state, payload) {
        state.isActions = payload;
    },
    [types.BACK_TO_ACTION](state, payload) {
        state.calculationObject.idActionType = null;
        state.isActions = true;
    },
    [types.ADD_ARRAY_ACTION](state, payload) {
        state.calculationObject.arrayAction = payload;
    },
    [types.UPDATE_URGENCY](state, payload) {
        state.calculationObject.idUrgency = payload;
    },
    [types.ADD_NAME_URGENCY](state, payload) {
        state.calculationObject.nameUrgency = payload;
    },
    [types.RESET_CALCULATION_OBJECT](state, payload) {
        for (let item in state.calculationObject) {
            if (!Array.isArray(state.calculationObject[item])) {
                if (item === 'idUrgency') {
                    state.calculationObject[item] = 1
                } else {
                    state.calculationObject[item] = null
                }
            } else {
                state.calculationObject[item] = []
            }
        }
        state.isActions = true;
    }

}