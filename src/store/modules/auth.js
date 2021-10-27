import authApi from '@/api/auth';


const state = {
    isSubmitting: false,
    currentUser: null,
    validationErrors: null,
    isLogged: null
};

const mutations = {
    registerStart(state) {
        state.isSubmitting = true;
        state.validationErrors = null;
    },
    registerSuccess(state, payload) {
        state.isSubmitting = true;
        state.validationErrors = null;
        state.currentUser = payload;
        state.isLogged = true;
    },
    registerFailure(state, payload) {
        state.isSubmitting = true;
        state.validationErrors = null;
        state.validationErrors = payload;
    }
};   

const actions = {
    register(context, credentials) {
        return new Promise(() => {
            authApi.register(credentials)
            .then(response => {
                context.commit('registerSuccess', response.data.user);
                console.log('response', response);
                
                
            })
            .catch(result => {
                console.log('result errors', result);
                setTimeout(() => {
                window.location.href = 'http://127.0.0.1:8080/';
                context.commit('registerFailure', result.response.data.errors);
        }, 5000);
            });
        });
    }
};

export default {
    state, mutations, actions
};