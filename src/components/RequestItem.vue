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

    <!-- Модальне вікно для редагування -->
    <div v-if="isEditing" class="edit-modal">
      <h3>Edit Request</h3>
      <Forme
        :originCity="request['sender-city']"
        :destinationCity="request['recipient-city']"
        :dispatchDate="request['delivery-date']"
        :parcelDescription="request['parcelDescription']"
        :parcelType="request['parcelType']"
        @submit="saveEdit"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';
import Forme from './Forme.vue';

const { request } = defineProps(['request']);
const { emit } = defineEmits(['delete', 'edit']);

const isEditing = ref(false);
const editedData = ref({});

const editRequest = () => {
  isEditing.value = true;
  editedData.value = { ...request }; // Копіюємо дані для редагування
};

const deleteRequest = () => {
  emit('delete', request.id); // Викликаємо подію delete та передаємо ідентифікатор
};

const saveEdit = (editedFormData) => {
  // Тут буде логіка для збереження редагованих даних
  emit('edit', { id: request.id, data: editedFormData });
  isEditing.value = false;
};
</script>

<style scoped>
.request-item {
  background-color: #f3f3f3;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
}

.action-btn {
  margin-right: 8px;
  padding: 8px;
  background-color: #3490dc;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.edit-modal {
  margin-top: 16px;
  padding: 16px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
}
</style>
