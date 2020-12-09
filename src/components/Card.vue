<template>
  <li class="card">
    <CardImage :image="card.image" />

    <div class="p-3">
      <CardLabels :labels="card.labels" />

      <p>{{ card.text }}</p>

      <CardTags :tags="card.tags" />
    </div>
  </li>
</template>

<script>
import CardTags from '@/components/CardTags.vue'
import CardImage from '@/components/CardImage.vue'
import CardLabels from '@/components/CardLabels.vue'

export default {
  components: {
    CardTags,
    CardImage,
    CardLabels
  },
  props: {
    card: {
      type: Object
    }
  },
  setup() {}
}
</script>
