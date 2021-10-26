const state = {
    isSubmitting: false
};
const mutations = {
    registerStart(state) {
        state.isSubmitting = true;
        setTimeout(() => {
            window.location.href = 'http://192.168.82.105:8080/';
 }, 5000);
    }
};

export default {
    state, mutations
};