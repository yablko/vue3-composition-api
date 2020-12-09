<template>
  <li @dblclick="doPop" :class="{ 'z-20': isPopped }" class="card relative">
    <CardImage :image="card.image" />

    <div class="p-3">
      <CardLabels :labels="card.labels" />

      <p>{{ card.text }}</p>

      <CardTags :tags="card.tags" />
    </div>

    <transition name="pop">
      <CardPopup v-if="isPopped" />
    </transition>
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

    const doPop = () => {
      state.isPopped = true
      window.eventBus.emit('toggle-overlay', true)
    }

    return {
      ...toRefs(state),
      doPop
    }
  }
}
</script>

<style scoped>
.pop-enter-active,
.pop-leave-active {
  transition: all 0.1s ease-in;
}

.pop-enter-from,
.pop-leave-to {
  opacity: 0;
  transform: translateX(-25%);
}
</style>
