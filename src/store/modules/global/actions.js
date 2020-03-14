import { ApiGlobal } from '../../../../api/api.service'
import * as types from './mutation-types'


export default {
    async sendDataForCalculate(context, payload) {
        let result = await ApiGlobal.post('costCalculation', payload);
        context.commit(types.CREATE_RESULT_OBJECT, _.assign(result,payload));
    }
}
