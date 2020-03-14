import { ApiMain } from '../../../../api/api.service'
import * as types from './mutation-types'

export default {
    async getActionAndSubj(context) {
        let buttonInfoAction = await ApiMain.get('getActionTypes');
        let buttonInfoSubject = await ApiMain.get('getSubjectTypes');
        let obj = {
            buttonInfoAction: buttonInfoAction,
            buttonInfoSubject: buttonInfoSubject};
        context.commit(types.ADD_ACTION_SUBJECT,obj);

    }
}