<template>
  <section class="list">
    <header>
      <h3 class="p-1 font-bold leading-none text-gray-900">{{ title }}</h3>
    </header>

    <ul>
      <Card v-for="card in cards" :text="card.text" :key="card.id"></Card>
    </ul>
  </section>
</template>

<script>
import { reactive, toRefs } from 'vue'

import Card from '@/components/Card.vue'

export default {
  components: {
    Card
  },
  props: {
    title: {
      type: String
    },
    cards: {
      type: Array
    }
  },
  setup(props) {
    console.log(props.title)

    const state = reactive({
      count: 0
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>