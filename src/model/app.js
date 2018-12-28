import {findInArray, getHistory, getState, setState, setStateReducer} from "../util/uitls";
import {effects} from 'dva/saga'

const INIT_STATE = {
    lists: {},
    bottom: "广场",
    strangers: [],
    strangers_limit: 10,
    strangers_offset: 0,
    filter_range: [0, 10],
    filter_generID: "2"
}
const namespace = 'app'
const MODEL = {
    namespace,
    state: INIT_STATE,
    reducers: {
        setState: setStateReducer
    },
    effects: {
        * snapShot({payload}, {call, put}) {
            var state = yield  getState(namespace)
            var newState = {
                ...state,
                ...payload
            }
            yield setState(newState)(namespace)
        },

    },
    subscriptions: {
        setup({dispatch, history}) {
        },
    },
};

export default MODEL
