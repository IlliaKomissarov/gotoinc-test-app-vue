<template>
  <div>
    <h1>Parcel Transport App</h1>
    <Forme
      v-model:originCity="formData.fromCity"
      v-model:destinationCity="formData.toCity"
      v-model:parcelType="formData.parcelType"
      v-model:dispatchDate="formData.dispatchDate"
      v-model:parcelDescription="formData.parcelDescription"
      @submit="handleFormSubmit"
    />

    <div v-if="requests.length">
      <h2>Requests:</h2>
      <ul>
        <RequestItem
          v-for="request in requests"
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
import Forme from './components/Forme.vue';
import RequestItem from './components/RequestItem.vue';
import { ref } from 'vue';

const formData = ref({
  fromCity: '',
  toCity: '',
  parcelType: '',
  dispatchDate: '',
  parcelDescription: '',
});

const requests = ref([]);

const handleFormSubmit = (formValues) => {
  createRequest(formValues);
};

const createRequest = (formData) => {
  const newRequest = { ...formData, id: Math.random().toString() };
  requests.value.push(newRequest);
  clearForm();
};

const deleteRequest = (requestId) => {
  requests.value = requests.value.filter(request => request.id !== requestId);
};

const editRequest = (editedData) => {
  const index = requests.value.findIndex(request => request.id === editedData.id);
  if (index !== -1) {
    // Оновлюємо кожне поле окремо, щоб зберегти реактивність
    Object.keys(editedData).forEach(key => {
      requests.value[index][key] = editedData[key];
    });
    clearForm();
  }
};

const clearForm = () => {
  Object.keys(formData.value).forEach(key => (formData.value[key] = ''));
};
</script>
