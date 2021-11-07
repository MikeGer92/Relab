import authApi from '@/api/auth';
import {setItem} from '@/helpers/persistantStorage';
import { resolve } from 'core-js/fn/promise';


const state = {
    isSubmitting: false,
    currentUser: null,
    validationErrors: null,
    isLogged: null
};
export const mutationTypes = {
    registerStart: '[auth] registerStart',
    registerSuccess: '[auth] registerSuccess',
    registerFailure: '[auth] registerFailure'
};

const mutations = {
    [mutationTypes.registerStart](state) {
        state.isSubmitting = true;
        state.validationErrors = null;
    },
    [mutationTypes.registerSuccess](state, payload) {
        state.isSubmitting = true;
        state.validationErrors = null;
        state.currentUser = payload;
        state.isLogged = true;
    },
    [mutationTypes.registerFailure](state, payload) {
        state.isSubmitting = true;
        state.validationErrors = payload;
    }
};  
export const actionTypes = {
    register: '[auth] register'
};
const actions = {
    [actionTypes.register](context, credentials) {
        return new Promise(() => {
            context.commit(mutationTypes.registerStart);
            authApi.register(credentials)
            .then(response => {
                context.commit(mutationTypes.registerSuccess, response.data.user);
                setItem('accessToken', response.data.user.token);
                resolve(response.data.user);
                console.log('response', response);
                setTimeout(() => {
                    window.location.href = 'http://127.0.0.1:8080/';  
                }, 3000);
            })
            .catch(result => {
                console.log('result errors', result);
                setTimeout(() => {
                    window.location.href = 'http://127.0.0.1:8080/';  
                }, 3000);
                context.commit(mutationTypes.registerFailure, result.response.data.errors);
            });
        });
    }
};

export default {
    state, mutations, actions
};