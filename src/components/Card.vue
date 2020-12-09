<template>
  <li class="card">
    <figure
      v-if="card.image"
      class="flex items-center max-h-52 sm:max-h-36 border-b border-gray-200 overflow-hidden rounded-t"
    >
      <img :src="'./img/' + card.image.filename" :alt="card.image.alt" />
    </figure>

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

      <footer v-if="card.tags" class="flex mt-2 text-xs text-white">
        <a
          v-for="(tag, index) in card.tags"
          :key="index"
          class="px-1 py-0.5 mr-1.5 bg-gray-500 opacity-50 hover:opacity-100 rounded"
          href="#"
          >{{ tag }}</a
        >
      </footer>
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
