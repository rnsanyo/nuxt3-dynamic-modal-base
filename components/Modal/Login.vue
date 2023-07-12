<template>
  <h1 class="font-bold text-lg">Login</h1>
  <div class="flex justify-between my-2">
    <label class="label mx-4">Email</label>
    <input class="w-2/3 placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="text" placeholder="email" v-model="body.email">
  </div>
  <div class="flex justify-between">
    <label class="label mx-4">Password</label>
    <input class="w-2/3 placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="text" placeholder="password" v-model="body.password">
  </div>
</template>

<script lang="ts" setup>

// To avoid Vue 3 trying to automatically inherit the attribute 'update:modelValue'
defineOptions({
  inheritAttrs: false
}) 

const emit = defineEmits(["update:modelValue"]);

const body = reactive({
  email: "",
  password: "",
})

watch(body, (value) => {
  emit("update:modelValue", toRaw(value)); // https://vuejs.org/guide/components/v-model.html
});

</script>