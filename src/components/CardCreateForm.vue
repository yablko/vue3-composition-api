<template>
  <footer>
    <a
      v-if="linkVisible"
      @click="showForm"
      class="p-1 text-gray-500 hover:text-gray-700"
      href="#"
    >
      Add a card...
    </a>

    <form v-if="formVisible" @submit.prevent="submitForm" action="/">
      <textarea
        v-model="text"
        class="w-full p-3 border-t border-l border-gray-300 outline-none rounded shadow-inner"
        rows="3"
      ></textarea>

      <div class="flex mt-1.5 items-center">
        <button class="btn btn-green">Add card</button>

        <a
          @click="hideForm"
          class="ml-0.5 p-1 text-gray-500 hover:text-gray-700"
          href="#"
          ><svg class="w-6 h-6 fill-current" viewBox="0 0 20 20">
            <path
              d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"
            ></path></svg
        ></a>
      </div>
    </form>
  </footer>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  props: {
    listId: {
      type: Number
    }
  },
  setup(props) {
    // state
    const state = reactive({
      text: '',
      linkVisible: true,
      formVisible: false
    })

    // show form
    const showForm = () => {
      state.linkVisible = false
      state.formVisible = true
    }

    // hide form
    const hideForm = () => {
      state.linkVisible = true
      state.formVisible = false
    }

    // submit form
    const submitForm = () => {
      window.eventBus.emit('new-card-coming', {
        listId: props.listId,
        text: state.text
      })
    }

    return {
      ...toRefs(state),
      showForm,
      hideForm,
      submitForm
    }
  }
}
</script>
