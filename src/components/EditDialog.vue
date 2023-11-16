<template>
  <div>
    <h2>Edit Request</h2>
    <Forme :originCity="form2Data['sender-city']" :destinationCity="form2Data['recipient-city']" :dispatchDate="form2Data['delivery-date']" :parcelDescription="form2Data['parcelDescription']" :parcelType="form2Data['parcelType']" @submit="saveEdit" />
    <button @click="closeDialog">Close</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const form2Data = ref(null);

const closeDialog = () => {
  form2Data.value = null;
};

const saveEdit = (editedFormData) => {
  // Prevent the submit event from being emitted
  event.preventDefault();

  emit('edit', { id: request.id, data: editedFormData });
  closeDialog();
};
</script>