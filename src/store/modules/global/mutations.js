import * as types from './mutation-types'
export default {
    [types.CREATE_RESULT_OBJECT] (state, payload) {
        state.resultObject = _.cloneDeep(payload);
        state.loading = false;
    }
}