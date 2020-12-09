<template>
  <figure
    v-if="image"
    class="flex items-center max-h-52 sm:max-h-36 border-b border-gray-200 overflow-hidden rounded-t"
  >
    <img :src="'./img/' + image.filename" :alt="image.alt" />
  </figure>
</template>

<script>
export default {
  props: {
    image: {
      type: Object
    }
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
