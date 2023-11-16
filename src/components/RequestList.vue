<template>
  <ul class="request-list">
    <RequestItem
      v-for="(request, index) in store.state.requests"
      :key="index"
      :request="request"
      @delete="deleteRequest(index)"
      @edit="editRequest(index)"
    />
    <EditDialog v-if="selectedRequest !== null" />
  </ul>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import RequestItem from './RequestItem.vue';
import EditDialog from './EditDialog.vue';

const store = useStore();
const selectedRequest = ref(null);

const editRequest = (index) => {
  selectedRequest.value = store.state.requests[index];
};

const deleteRequest = (index) => {
  store.commit('deleteRequest', store.state.requests[index].id);
};
</script>

<style scoped>
.request-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* Optional: Add a bit of spacing between each request item */
.request-list > li {
  margin-bottom: 1rem;
}
</style>
