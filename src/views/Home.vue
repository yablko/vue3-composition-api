<template>
  <div>
    <button @click="score++">{{ score }} twice is {{ double }}</button>

    <p>
      {{ hello }}
    </p>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  setup() {
    // data
    const score = ref(69)
    const dude = ref('Bulma')

    // computed
    const double = computed(() => score.value * 2)
    const hello = computed(() => 'Hello, I am ' + dude.value)

    return { score, double, hello }
  }
}
</script>
