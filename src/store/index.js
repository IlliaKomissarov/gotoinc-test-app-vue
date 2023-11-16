// store/index.js
import { createStore } from "vuex";

export default createStore({
  state: {
    requests: [], // Масив для зберігання запитів
  },
  mutations: {
    addRequest(state, payload) {
      state.requests.push(payload);
    },
    editRequest(state, payload) {
      const index = state.requests.findIndex(
        (request) => request.id === payload.id
      );
      if (index !== -1) {
        state.requests[index] = { ...state.requests[index], ...payload.data };
      }
    },
    deleteRequest(state, id) {
      state.requests = state.requests.filter((request) => request.id !== id);
    },
  },
});
