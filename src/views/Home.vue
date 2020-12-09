<template>
  <main
    class="flex min-h-screen bg-purple-500 lg:bg-gradient-to-r from-red-400 to-pink-400"
  >
    <transition-group
      name="list"
      tag="div"
      class="sm:flex items-start w-screen px-4 py-10 overflow-x-auto"
    >
      <div
        v-if="overlay"
        id="overlay"
        class="bg-black bg-opacity-70 fixed top-0 left-0 w-full h-screen z-10"
        key="-1"
      ></div>

      <List
        v-for="list in lists"
        :id="list.id"
        :title="list.title"
        :cards="list.cards"
        :key="list.id"
        @edit-list-title="editListTitle($event, lists)"
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
import { addNewCard, editCardText, deleteCard } from '@/cards.js'
import { addNewList, editListTitle } from '@/lists.js'

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
    const overlay = ref(false)

    // events
    onMounted(() => {
      window.eventBus.on('new-card-coming', event => {
        addNewCard(event, lists.value)
      })

      window.eventBus.on('edit-card-text', event => {
        editCardText(event, lists.value)
      })

      window.eventBus.on('delete-card', event => {
        deleteCard(event, lists.value)
      })

      window.eventBus.on('toggle-overlay', event => {
        overlay.value = event
      })
    })

    return {
      lists,
      overlay,
      addNewList,
      editListTitle
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

#overlay {
  transform: scale(1);
}
</style>
