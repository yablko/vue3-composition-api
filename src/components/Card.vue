<template>
  <li class="card">
    <div class="p-3">
      <p>{{ text }}</p>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    text: {
      type: String
    }
  },
  setup() {}
}
</script>
