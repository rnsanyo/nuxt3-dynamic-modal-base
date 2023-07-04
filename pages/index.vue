<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">Hello there</h1>
        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        <div class="join">
          <button class="btn join-item">Button</button>
          <button class="btn join-item">Button</button>
          <button class="btn join-item" @click="handleOnClickOpenModal">Open</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useModal } from "../stores/modal";
import ViewToRender from '../components/ViewToRender.vue'

  const modal = useModal();
  function handleOnClickOpenModal() {
    modal.open(
      ViewToRender,
      [
        {
          label: "Save",
          callback: (dataFromView) => {
            console.log(dataFromView);
            modal.close();
          },
        },
      ]
    );
  }
</script>