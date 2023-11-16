<template>
  <div>
    <h1>Parcel Transport App</h1>
    <Forme
      v-model:originCity="formData.fromCity"
      v-model:destinationCity="formData.toCity"
      v-model:parcelType="formData.parcelType"
      v-model:dispatchDate="formData.dispatchDate"
      v-model:parcelDescription="formData.parcelDescription"
      @submit="createRequest"
    />
  </div>
</template>

<script setup>
import Forme from './components/Forme.vue';
import { ref } from 'vue';

const formData = ref({
  fromCity: '',
  toCity: '',
  parcelType: '',
  dispatchDate: '',
  parcelDescription: '',
});

const createRequest = () => {
  // Тут буде логіка для створення запиту
};
</script>
