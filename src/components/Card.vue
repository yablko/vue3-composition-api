<template>
  <li
    @click="isPopped = true"
    :class="{ 'z-20': isPopped }"
    class="card relative"
  >
    <CardImage :image="card.image" />

    <div class="p-3">
      <CardLabels :labels="card.labels" />

      <p>{{ card.text }}</p>

      <CardTags :tags="card.tags" />
    </div>

    <CardPopup v-if="isPopped" />
  </li>
</template>

<script>
import { toRefs, reactive } from 'vue'

import CardTags from '@/components/CardTags.vue'
import CardPopup from '@/components/CardPopup.vue'
import CardImage from '@/components/CardImage.vue'
import CardLabels from '@/components/CardLabels.vue'

export default {
  components: {
    CardTags,
    CardPopup,
    CardImage,
    CardLabels
  },
  props: {
    card: {
      type: Object
    }
  },
  setup() {
    const state = reactive({
      isPopped: false
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>
