<template>
  <div class="request-item border p-4 my-4">
    <h2>Request Details</h2>
    <p><strong>From City:</strong> {{ request["sender-city"] }}</p>
    <p><strong>To City:</strong> {{ request["recipient-city"] }}</p>
    <p><strong>Parcel Type:</strong> {{ request["parcelType"] }}</p>
    <p><strong>Dispatch Date:</strong> {{ request["delivery-date"] }}</p>
    <p>
      <strong>Parcel Description:</strong> {{ request["parcelDescription"] }}
    </p>
    <button class="action-btn" @click="editRequest">Edit</button>
    <button class="action-btn" @click="deleteRequest">Delete</button>

    <FormeList
      v-if="isEditing"
      :originCity="request['sender-city']"
      :destinationCity="request['recipient-city']"
      :dispatchDate="request['delivery-date']"
      :parcelDescription="request['parcelDescription']"
      :parcelType="request['parcelType']"
      @submit="saveEdit"
    />
  </div>
</template>

<script setup>
import { defineProps, ref, defineEmits } from "vue";
import FormeList from "./FormeList.vue";

const { request } = defineProps(["request"]);
const { emit } = defineEmits();

const isEditing = ref(false);

const editRequest = () => {
  isEditing.value = true;
};

const deleteRequest = () => {
  emit("delete", request.id);
};

const saveEdit = (editedFormData) => {
  emit("edit", { id: request.id, data: editedFormData });
  isEditing.value = false;
};
</script>

<style scoped>
.request-item {
  background-color: #f7fafc;
  border: 1px solid #cbd5e0;
  border-radius: 0.375rem;
  padding: 1rem;
  margin-top: 1rem;
}

.action-btn {
  margin-right: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #4299e1;
  color: #ffffff;
  border-radius: 0.375rem;
  cursor: pointer;
}

.edit-modal {
  margin-top: 1rem;
  padding: 1rem;
  background-color: #ffffff;
  border: 1px solid #cbd5e0;
  border-radius: 0.375rem;
}
</style>
