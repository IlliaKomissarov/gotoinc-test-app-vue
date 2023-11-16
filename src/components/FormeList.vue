<template>
  <div>
    <form @submit.prevent="$emit('submit', formData)" class="max-w-md mx-auto p-4 space-y-4">
      <div v-for="inputValue in inputValues" :key="inputValue.label" class="mb-4">
        <label :for="inputValue.id" class="block text-sm font-medium text-gray-700">{{ inputValue.label }}</label>
        <input
          v-model="formData[inputValue.id]"
          :type="inputValue.type"
          :placeholder="inputValue.placeholder"
          class="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <textarea
        v-model="formData.parcelDescription"
        class="p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
        rows="5"
      ></textarea>
      <select v-model="formData.parcelType" name="parcelTypes" class="p-2 w-full border rounded-md focus:outline-none focus:border-blue-500">
        <option v-for="optionValue in optionValues" :key="optionValue" :value="optionValue">
          {{ optionValue }}
        </option>
      </select>
      <div class="flex space-x-4">
        <button type="button" @click="$emit('cancel')" class="flex-1 p-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none">
          Cancel
        </button>
        <button type="submit" class="flex-1 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { defineProps, ref, onMounted } from 'vue';

const { originCity, destinationCity, dispatchDate, parcelDescription, parcelType } = defineProps(['originCity', 'destinationCity', 'dispatchDate', 'parcelDescription', 'parcelType']);
const formData = ref({
  'sender-city': '',
  'recipient-city': '',
  'delivery-date': '',
  'parcelDescription': '',
  'parcelType': '',
});

let optionValues = ['Gadgets', 'Other', 'Drinks', 'Clothes', 'Medicines'];

let inputValues = [
  {
    type: 'text',
    id: 'sender-city',
    label: 'Sending from:',
    required: true,
    placeholder: 'the city from which you are sending',
  },
  {
    type: 'text',
    id: 'recipient-city',
    label: 'Sending to:',
    required: true,
    placeholder: 'the city to which it comes',
  },
  {
    type: 'date',
    id: 'delivery-date',
    label: 'Delivery Date:',
    required: true,
    placeholder: 'Select delivery date',
  },
];

const fillForm = () => {
  formData['sender-city'] = originCity;
  formData['recipient-city'] = destinationCity;
  formData['delivery-date'] = dispatchDate;
  formData['parcelDescription'] = parcelDescription;
  formData['parcelType'] = parcelType;
};

onMounted(() => {
  if (originCity) fillForm();
});
</script>
