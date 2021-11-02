import useritem from '@/api/useritem';


const state = {
    data: null,
    isLoading: false,
    error: null
};

export const mutationTypes = {
    getUseritemStart: '[useritem] Get useritem start',
    getUseritemSuccess: '[useritem] Get useritem success',
    getUseritemFailure: '[useritem] Get useritem failure'
};

export const actionTypes = {
    getUseritem: '[useritem] Get useritem'
};

const mutations = {
    [mutationTypes.getUseritemStart](state) {
        state.isLoading = true;
        state.data = null;
    },
    [mutationTypes.getUseritemSuccess](state, payload){
        state.isLoading = false;
        state.data = payload;
    },
    [mutationTypes.getUseritemFailure](state){
        state.isLoading = false;
    }
};

const actions = {
    [actionTypes.getUseritem](context, {userUrl}) {
        return new Promise(resolve => {
            context.commit(mutationTypes.getUseritemStart);
            useritem
                .getUsers(userUrl)
                .then(response => {
                    context.commit(mutationTypes.getUseritemSuccess, response.data);
                    resolve(response.data);
                });
        });
    }
};

export default {
    state, mutations, actions
};
