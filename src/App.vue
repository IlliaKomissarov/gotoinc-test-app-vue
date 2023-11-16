<!-- App.vue -->
<template>
  <div>
    <h1>Parcel Transport App</h1>
    <FormeList
      v-model:originCity="formData.fromCity"
      v-model:destinationCity="formData.toCity"
      v-model:parcelType="formData.parcelType"
      v-model:dispatchDate="formData.dispatchDate"
      v-model:parcelDescription="formData.parcelDescription"
      @submit="handleFormSubmit"
    />

    <div v-if="store.state.requests.length">
      <h2>Requests:</h2>
      <ul>
        <RequestItem
          v-for="request in store.state.requests"
          :key="request.id"
          :request="request"
          @delete="deleteRequest"
          @edit="editRequest"
        />
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import FormeList from './components/FormeList.vue';
import RequestItem from './components/RequestItem.vue';
import { useStore } from 'vuex';

const store = useStore();
const formData = ref({
  fromCity: '',
  toCity: '',
  parcelType: '',
  dispatchDate: '',
  parcelDescription: '',
});

const handleFormSubmit = (formValues) => {
  store.commit('addRequest', formValues);
  clearForm();
};

const deleteRequest = (requestId) => {
  store.commit('deleteRequest', requestId);
};

const editRequest = (editedData) => {
  store.commit('editRequest', { id: editedData.id, data: editedData.data });
  clearForm();
};

const clearForm = () => {
  Object.keys(formData).forEach(key => (formData[key] = ''));
};
</script>

<style scoped>
/* Add your styles here */
</style>
