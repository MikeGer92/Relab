import useritem from '@/api/useritem';



const state = {
    data: null,
    isLoading: false,
    error: null,
    ctimes: []
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
        state.ctimes = state.data.items.map(function(item) {
            return (new Date(item.ctime * 1000).toLocaleString());
        });

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
                })
                .catch(() => {
                    context.commit(mutationTypes.getUseritemFailure);
                });
        });
    }
};

export default {
    state, mutations, actions
};
