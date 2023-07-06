<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">Hello there</h1>
        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        <div class="join">
          <button class="btn join-item">Button</button>
          <button class="btn join-item">Button</button>
          <button class="btn join-item" @click="handleOnClickOpenModal" onclick="base_modal.showModal()">Open</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useModal } from "../stores/modal";
import CounterModal from "../components/CounterModal.vue";

  const modal = useModal();
  function handleOnClickOpenModal() {
    modal.open(
      CounterModal,
      [
        {
          label: "Save",
          buttonClass: "btn-primary",
          callback: (dataFromView) => {
            console.log(dataFromView);
            modal.close(); // This store function only resets the modal store properties.
          },
        },
        {
          label: "Close",
          buttonClass: "btn-neutral",
          callback: () => {
            modal.close(); // This store function only resets the modal store properties.
          },
        },
      ]
    );
  }
</script>