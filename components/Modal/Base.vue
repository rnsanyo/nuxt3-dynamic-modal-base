<template>
  <dialog id="base_modal" class="modal">
    <div class="modal-box">
      <!-- Component v-model configuration goes in each component code. The buttons inside this component won't close the dialog. -->
      <component v-if="modal.isOpen" :is="view" v-model="model"></component> 
      
      <!-- if there is a button inside the dialog form, it will close the modal -->
      <form method="dialog">

        <!-- Closing upper button. It's absolute relative to the modal-box-->
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" @click="modal.close">✕</button>

        <!-- Action Buttons section -->
        <div class="modal-action">
          <button v-for="action in actions" :key="action.label" class="btn" :class="action.buttonClass" @click="action.callback(model)">
            {{ action.label }}
          </button>
        </div>

      </form>

    </div>

    <!-- This is for closing when clicked outside -->
    <form method="dialog" class="modal-backdrop">
      <button class="cursor-auto" @click="modal.close">close</button>
    </form>

  </dialog>
</template>

<script lang="ts" setup>
  import { storeToRefs } from "pinia";
  import { useModal } from "../../stores/modal";

  const modal = useModal();

  // convert all state properties to reactive references to be used on view
  const { isOpen, view, actions } = storeToRefs(modal);

  // reactive container to save the payload returned by the mounted view
  const model = {};
</script>