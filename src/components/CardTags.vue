<template>
  <footer v-if="tags" class="flex mt-2 text-xs text-white">
    <a
      v-for="(tag, index) in tags"
      :key="index"
      class="px-1 py-0.5 mr-1.5 bg-gray-500 opacity-50 hover:opacity-100 rounded"
      href="#"
      >{{ tag }}</a
    >
  </footer>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array
    }
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
