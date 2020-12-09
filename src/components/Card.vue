<template>
  <li class="card">
    <div class="p-3">
      <aside v-if="card.labels" class="flex mb-1.5">
        <span
          v-for="(color, index) in card.labels"
          :key="index"
          :class="`w-8 h-2 mr-2 rounded-full bg-${color}-400`"
        >
        </span>
      </aside>

      <p>{{ card.text }}</p>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    card: {
      type: Object
    }
  },
  setup() {}
}
</script>
