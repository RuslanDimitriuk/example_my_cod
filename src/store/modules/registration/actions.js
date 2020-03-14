import {ApiMain, ApiRegistration} from '../../../../api/api.service'
import * as types from './mutation-types'


export default {
    async getActionCostType(context) {
        let actionConstType = await ApiRegistration.get('getActionCostType');
        context.commit(types.ADD_ACTION_CONST_TYPE, actionConstType);
    },
    async getUrgencyElements(context) {
        context.commit(types.EDIT_LOADING,true);
        let arrayUrgencyElements = await ApiMain.get('getUrgencyTypes');

        context.commit(types.ADD_URGENCY_ELEMENTS,arrayUrgencyElements);

    }
}
