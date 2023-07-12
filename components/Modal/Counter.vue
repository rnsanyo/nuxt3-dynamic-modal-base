<template>
  <div >
    This is the count (click it):
    <button class="btn btn-xs btn-success" @click="() => count++">
      {{ count }}
    </button>
  </div>
</template>

<script lang="ts" setup>

// Here, idk why but looks like inheritance is deactivated automatically
  const emit = defineEmits(["update:modelValue"]);
  const count = ref(0)

  // when count changes, it will update the reference passed via v-model
  watch(count, (value) => {
    emit("update:modelValue", value); // https://vuejs.org/guide/components/v-model.html
  });
</script>