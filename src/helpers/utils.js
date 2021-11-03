// import Vue from 'vue';
export const range = (start, end) => {
    return [...Array(end).keys()].map(el => el + start);
};