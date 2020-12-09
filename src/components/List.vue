<template>
  <section class="list">
    <header>
      <h3
        ref="titleElement"
        @click="startEditing"
        @blur="saveTitle"
        @keydown.enter="saveTitle"
        :contenteditable="isEditing"
        :class="{ 'shadow-outline': isEditing }"
        class="p-1 font-bold leading-none text-gray-900 outline-none"
      >
        {{ title }}
      </h3>
    </header>

    <transition-group name="card" tag="ul">
      <Card v-for="card in cards" :card="card" :listId="id" :key="card.id" />
    </transition-group>

    <CardCreateForm :listId="id" />
  </section>
</template>

<script>
import { ref, toRefs, reactive } from 'vue'

import Card from '@/components/Card.vue'
import CardCreateForm from '@/components/CardCreateForm.vue'

export default {
  components: {
    Card,
    CardCreateForm
  },
  props: {
    id: {
      type: Number
    },
    title: {
      type: String
    },
    cards: {
      type: Array
    }
  },
  setup(props, { emit }) {
    const titleElement = ref(null)

    const state = reactive({
      isEditing: false
    })

    const saveTitle = () => {
      state.isEditing = false

      emit('edit-list-title', {
        id: props.id,
        newTitle: titleElement.value.textContent
      })
    }

    const startEditing = () => {
      state.isEditing = true
      setTimeout(() => titleElement.value.focus(), 0)
    }

    return {
      ...toRefs(state),
      saveTitle,
      titleElement,
      startEditing
    }
  }
}
</script>

<style scoped>
.card-enter-active,
.card-leave-active {
  transition: all 0.15s;
}

.card-enter-from,
.card-leave-to {
  opacity: 0;
  transform: scale(0.75);
}
</style>
