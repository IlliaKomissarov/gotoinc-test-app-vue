<template>
  <div v-show="show" class="fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-50 z-10">
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 max-w-md mx-auto md:w-96">
      <h2 class="text-2xl font-bold mb-4" v-text="title"></h2>
      <p class="mb-6" v-text="description"></p>
      <hr class="border-t my-4" />

      <div class="flex justify-end">
        <button @click="cancel" class="bg-gray-400 text-white px-4 py-2 mr-2">Cancel</button>
        <button @click="confirm" class="bg-red-500 text-white px-4 py-2">Delete</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  show: Boolean,
  title: String,
  description: String,
  cancel: String,
  confirm: String
})
</script>
