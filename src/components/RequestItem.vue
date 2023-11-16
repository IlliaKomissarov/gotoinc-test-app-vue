<template>
  <div class="request-item border p-4 my-4">
    <h2>Request Details</h2>
    <p><strong>From City:</strong> {{ request['sender-city'] }}</p>
    <p><strong>To City:</strong> {{ request['recipient-city'] }}</p>
    <p><strong>Parcel Type:</strong> {{ request['parcelType'] }}</p>
    <p><strong>Dispatch Date:</strong> {{ request['delivery-date'] }}</p>
    <p><strong>Parcel Description:</strong> {{ request['parcelDescription'] }}</p>
    <button class="action-btn" @click="editRequest">Edit</button>
    <button class="action-btn" @click="deleteRequest">Delete</button>

    <Forme v-if="isEditing" :originCity="request['sender-city']" :destinationCity="request['recipient-city']" :dispatchDate="request['delivery-date']" :parcelDescription="request['parcelDescription']" :parcelType="request['parcelType']" @submit="saveEdit" />
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, onMounted } from 'vue';
import Forme from './Forme.vue';

const { request } = defineProps(['request']);
const { emit } = defineEmits(['delete', 'edit']);

const isEditing = ref(false);

const editRequest = () => {
  isEditing.value = true;
};

const deleteRequest = () => {
  emit('delete', request.id);
};

const saveEdit = (editedFormData) => {
  emit('edit', { id: request.id, data: editedFormData });
  isEditing.value = false;
};

onMounted(() => {
  // Додатковий код, щоб забезпечити isEditing дорівнює false після монтажу компонента
  isEditing.value = false;
});
</script>

<style scoped>
.request-item {
  @apply bg-gray-100 border rounded p-4 my-4;
}

.action-btn {
  @apply mr-2 px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer;
}

.edit-modal {
  @apply mt-4 p-4 bg-white border rounded;
}
</style>
