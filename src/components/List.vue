<template>
  <section class="list">
    <header>
      <h3 class="p-1 font-bold leading-none text-gray-900">{{ title }}</h3>
    </header>

    <ul>
      <Card v-for="card in cards" :text="card.text" :key="card.id"></Card>
    </ul>

    <CardCreateForm />
  </section>
</template>

<script>
import { reactive, toRefs } from 'vue'

import Card from '@/components/Card.vue'
import CardCreateForm from '@/components/CardCreateForm.vue'

export default {
  components: {
    Card,
    CardCreateForm
  },
  props: {
    title: {
      type: String
    },
    cards: {
      type: Array
    }
  },
  setup() {
    const state = reactive({
      count: 0
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>
