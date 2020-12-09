<template>
  <main
    class="flex min-h-screen bg-purple-500 lg:bg-gradient-to-r from-red-400 to-pink-400"
  >
    <div class="sm:flex items-start w-screen px-4 py-10 overflow-x-auto">
      <List
        v-for="list in lists"
        :title="list.title"
        :cards="list.cards"
        :key="list.id"
      />

      <ListCreateForm />
    </div>
  </main>
</template>

<script>
import { ref } from 'vue'
import { data } from '@/data.js'

import List from '@/components/List.vue'
import ListCreateForm from '@/components/ListCreateForm.vue'

export default {
  components: {
    List,
    ListCreateForm
  },
  setup() {
    const lists = ref(data)

    return {
      lists
    }
  }
}
</script>
