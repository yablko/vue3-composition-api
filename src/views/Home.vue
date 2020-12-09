<template>
  <div>
    <button @click="score++">{{ score }} twice is {{ double }}</button>

    <p>
      {{ dude }}
    </p>
  </div>
</template>

<script>
import { reactive, toRefs, computed, onMounted } from 'vue'

export default {
  setup() {
    const state = reactive({
      score: 0,
      double: computed(() => state.score * 2),
      dude: 'Bulma'
    })

    onMounted(() => {
      console.log('I AM READY')
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>
