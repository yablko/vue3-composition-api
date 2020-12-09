<template>
  <aside v-if="labels" class="flex mb-1.5">
    <span
      v-for="(color, index) in labels"
      :key="index"
      :class="`w-8 h-2 mr-2 rounded-full bg-${color}-400`"
    >
    </span>
  </aside>
</template>

<script>
export default {
  props: {
    labels: {
      type: Array
    }
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
