<template>
  <main
    class="flex min-h-screen bg-purple-500 lg:bg-gradient-to-r from-red-400 to-pink-400"
  >
    <transition-group
      name="list"
      tag="div"
      class="sm:flex items-start w-screen px-4 py-10 overflow-x-auto"
    >
      <List
        v-for="list in lists"
        :id="list.id"
        :title="list.title"
        :cards="list.cards"
        :key="list.id"
      />

      <ListCreateForm @new-list-coming="addNewList($event, lists)" key="0" />
    </transition-group>
  </main>
</template>

<script>
// imports
import { ref, onMounted } from 'vue'
import { data } from '@/data.js'

// functions
import { addNewCard } from '@/cards.js'
import { addNewList } from '@/lists.js'

// @ is an alias to /src
import List from '@/components/List.vue'
import ListCreateForm from '@/components/ListCreateForm.vue'

export default {
  components: {
    List,
    ListCreateForm
  },
  setup() {
    const lists = ref(data)

    // events
    onMounted(() => {
      window.eventBus.on('new-card-coming', event => {
        addNewCard(event, lists.value)
      })
    })

    return {
      lists,
      addNewList
    }
  }
}
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.15s;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: scale(0.75);
}
</style>
