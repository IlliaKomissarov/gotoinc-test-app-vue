<template>
  <div>
    <form @submit.prevent="$emit('submit')" class="max-w-md mx-auto p-4 space-y-4">
      <div v-for="inputValue in inputValues" :key="inputValue.label">
        <label :for="inputValue.id" class="block text-sm font-medium text-gray-700">{{ inputValue.label }}</label>
        <input :id="inputValue.id" :type="inputValue.type" :placeholder="inputValue.placeholder" class="mt-1 p-2 w-full border rounded-md" />
      </div>
      <textarea name="parcelDescription" class="p-2 w-full border rounded-md" rows="5"></textarea>
      <select name="parcelTypes" class="p-2 w-full border rounded-md">
        <option v-for="optionValue in optionValues" :key="optionValue" :value="optionValue">
          {{ optionValue }}
        </option>
      </select>
      <button type="submit" class="p-2 bg-blue-500 text-white rounded-md w-full">Submit</button>
    </form>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  originCity: String,
  destinationCity: String,
  parcelType: String,
  dispatchDate: String,
  parcelDescription: String
})

defineEmits(['submit'])

let optionValues = ['Gadgets', 'Other', 'Drinks', 'Clothes', 'Medicines']

let inputValues = [
  {
    type: 'text',
    id: 'sender-city',
    label: 'Sending from:',
    required: true,
    placeholder: 'the city from which you are sending'
  },
  {
    type: 'text',
    id: 'recipient-city',
    label: 'Sending to:',
    required: true,
    placeholder: 'the city to which it comes'
  },
  {
    type: 'date',
    id: 'delivery-date',
    label: 'Delivery Date:',
    required: true,
    placeholder: 'Select delivery date'
  }
]
</script>
