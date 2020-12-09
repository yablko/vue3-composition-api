<template>
  <li
    class="card relative"
    :class="{ 'z-20': isPopped }"
    @contextmenu.prevent="doPop"
  >
    <CardImage :image="card.image" />

    <div class="p-3">
      <CardLabels :labels="card.labels" />

      <p
        ref="cardText"
        @keydown.enter="saveText"
        :contenteditable="isEditing"
        :class="{ 'shadow-outline': isEditing }"
        class="outline-none"
      >
        {{ card.text }}
      </p>

      <CardTags :tags="card.tags" />
    </div>

    <transition name="pop">
      <CardPopup
        v-if="isPopped"
        :card="card"
        :listId="listId"
        @close-popup="undoPop"
        @start-edit="startEditing"
      />
    </transition>
  </li>
</template>

<script>
import { ref, toRefs, reactive } from 'vue'

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
    },
    listId: {
      type: Number
    }
  },
  setup(props) {
    const cardText = ref(null)

    const state = reactive({
      isPopped: false,
      isEditing: false
    })

    const doPop = () => {
      state.isPopped = true
      window.eventBus.emit('toggle-overlay', true)
    }

    const undoPop = () => {
      state.isPopped = false
      window.eventBus.emit('toggle-overlay', false)
    }

    const startEditing = () => {
      state.isEditing = true
      setTimeout(() => cardText.value.focus(), 0)
    }

    const saveText = () => {
      state.isEditing = false

      window.eventBus.emit('edit-card-text', {
        cardId: props.card.id,
        listId: props.listId,
        newText: cardText.value.textContent
      })

      undoPop()
    }

    return {
      ...toRefs(state),
      doPop,
      undoPop,
      cardText,
      saveText,
      startEditing
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
