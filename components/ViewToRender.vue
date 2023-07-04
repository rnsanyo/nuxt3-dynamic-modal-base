<template>
  This is the count: 
  {{ count }}
</template>

<script lang="ts" setup>
  import { watch } from "vue";

  // no need to import defineEmits
  const emit = defineEmits(["update:modelValue"]);

  const count = ref(0)
  // when someVar changes, it will update the reference passed via v-model
  watch(count, (value) => {
    emit("update:modelValue", value);
  });
</script>