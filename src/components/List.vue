<template>
  <section class="list">
    <header>
      <h3
        @click="isEditing = true"
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
      <Card v-for="card in cards" :card="card" :key="card.id" />
    </transition-group>

    <CardCreateForm :listId="id" />
  </section>
</template>

<script>
import { toRefs, reactive } from 'vue'

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
  setup(/* props, { emit } */) {
    const state = reactive({
      isEditing: false
    })

    const saveTitle = () => {
      state.isEditing = false
      // emit('edit-list-title', )
    }

    return {
      ...toRefs(state),
      saveTitle
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
