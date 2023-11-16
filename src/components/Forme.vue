<template>
  <div>
    <form @submit.prevent="handleSubmit" class="max-w-md mx-auto p-4 space-y-4">
      <div v-for="inputValue in inputValues" :key="inputValue.label">
        <label :for="inputValue.id" class="block text-sm font-medium text-gray-700">{{ inputValue.label }}</label>
        <input v-model="formData[inputValue.id]" :id="inputValue.id" :type="inputValue.type" :placeholder="inputValue.placeholder" class="mt-1 p-2 w-full border rounded-md" />
      </div>
      <textarea v-model="formData.parcelDescription" name="parcelDescription" class="p-2 w-full border rounded-md" rows="5"></textarea>
      <select v-model="formData.parcelType" name="parcelTypes" class="p-2 w-full border rounded-md">
        <option v-for="optionValue in optionValues" :key="optionValue" :value="optionValue">
          {{ optionValue }}
        </option>
      </select>
      <button type="submit" class="p-2 bg-blue-500 text-white rounded-md w-full">Submit</button>
    </form>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps(['originCity', 'destinationCity', 'dispatchDate', 'parcelDescription', 'parcelType']);
defineEmits(['submit']);

const formData = ref({
  'sender-city': originCity,
  'recipient-city': destinationCity,
  'delivery-date': dispatchDate,
  'parcelDescription': parcelDescription,
  'parcelType': parcelType,
});

let optionValues = ['Gadgets', 'Other', 'Drinks', 'Clothes', 'Medicines'];

const handleSubmit = () => {
  // Передаємо дані назад через emit
  emit('submit', formData);
};
</script>
