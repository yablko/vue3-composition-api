<template>
  <main class="flex min-h-screen bg-purple-500 lg:bg-gradient-to-r from-red-400 to-pink-400">
    <div class="sm:flex items-start w-screen px-4 py-10 overflow-x-auto">
      <List title="BOARD GAMES" />
      <List title="TOKYO" />
      <List title="BRAIN THOUGHTS" />
    </div>
  </main>
</template>

<script>
import List from '@/components/List.vue'

export default {
  components: {
    List
  },
  setup() {
    return {}
  }
}
</script>
