<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">Hello there</h1>
        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        <div class="join">
          <button 
            v-for="component in Components" 
            :key="component" 
            class="btn join-item" 
            @click="handleOnClickOpenModal(component)" 
            onclick="base_modal.showModal()">
            {{ component }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import openModal, { Components } from "../composables/openModal";

  function handleOnClickOpenModal(component: Components) {
    openModal(component);
  }
</script>