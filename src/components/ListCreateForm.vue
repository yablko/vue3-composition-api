<template>
  <form
    @submit.prevent="submitForm"
    class="flex-shrink-0 sm:w-80 sm:mx-4 sm:mb-0 sm:pr-8 text-gray-800"
    action="/"
  >
    <input
      v-model="title"
      class="w-full p-2.5 bg-white bg-opacity-40 focus:bg-opacity-100 placeholder-white focus:placeholder-gray-600 font-bold rounded-lg outline-none focus:shadow-xl"
      type="text"
      placeholder="Add another list"
    />
  </form>
</template>

<script>
import { ref } from 'vue'

export default {
  setup(props, { emit }) {
    const title = ref('')

    const submitForm = () => {
      emit('new-list-coming', title.value)
    }

    return {
      title,
      submitForm
    }
  }
}
</script>
