<template>
  <div>
    <h2>Edit Request</h2>
    <FormeList
      :originCity="form2Data['sender-city']"
      :destinationCity="form2Data['recipient-city']"
      :dispatchDate="form2Data['delivery-date']"
      :parcelDescription="form2Data['parcelDescription']"
      :parcelType="form2Data['parcelType']"
      @submit="saveEdit"
    />
    <button @click="closeDialog">Close</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';
import FormeList from './FormeList.vue';

const { emit } = defineEmits(['edit']);
const form2Data = ref(null);

const closeDialog = () => {
  form2Data.value = null;
};

const saveEdit = (event, editedFormData) => {
  event.preventDefault();
  emit('edit', { id: request.id, data: editedFormData });
  closeDialog();
};
</script>