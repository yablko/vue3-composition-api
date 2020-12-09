<template>
  <ul
    class="w-40 ml-2 text-sm text-white font-semibold sm:absolute top-0 left-80 sm:m-0"
    id="popup"
  >
    <li class="flex">
      <a
        @click="emit('start-edit')"
        class="flex items-center px-3 py-2.5 mb-1.5 bg-black bg-opacity-60 hover:bg-opacity-100 rounded transform hover:translate-x-1 transition duration-75 ease-in"
        href="#"
      >
        <svg class="w-4 h-4 mr-1.5" viewBox="0 0 20 20">
          <path
            class="fill-current"
            d="M9.634,10.633c0.116,0.113,0.265,0.168,0.414,0.168c0.153,0,0.308-0.06,0.422-0.177l4.015-4.111c0.229-0.235,0.225-0.608-0.009-0.836c-0.232-0.229-0.606-0.222-0.836,0.009l-3.604,3.689L6.35,5.772C6.115,5.543,5.744,5.55,5.514,5.781C5.285,6.015,5.29,6.39,5.522,6.617L9.634,10.633z"
          ></path>
          <path
            class="fill-current"
            d="M17.737,9.815c-0.327,0-0.592,0.265-0.592,0.591v2.903H2.855v-2.903c0-0.327-0.264-0.591-0.591-0.591c-0.327,0-0.591,0.265-0.591,0.591V13.9c0,0.328,0.264,0.592,0.591,0.592h15.473c0.327,0,0.591-0.264,0.591-0.592v-3.494C18.328,10.08,18.064,9.815,17.737,9.815z"
          ></path>
        </svg>

        Edit text
      </a>
    </li>
    <li class="flex">
      <a
        @click="deleteCard"
        class="flex items-center px-3 py-2.5 mb-1.5 bg-black bg-opacity-60 hover:bg-opacity-100 rounded transform hover:translate-x-1 transition duration-75 ease-in"
        href="#"
      >
        <svg class="w-4 h-4 mr-1.5" viewBox="0 0 20 20">
          <path
            class="fill-current"
            d="M16.471,5.962c-0.365-0.066-0.709,0.176-0.774,0.538l-1.843,10.217H6.096L4.255,6.5c-0.066-0.362-0.42-0.603-0.775-0.538C3.117,6.027,2.876,6.375,2.942,6.737l1.94,10.765c0.058,0.318,0.334,0.549,0.657,0.549h8.872c0.323,0,0.6-0.23,0.656-0.549l1.941-10.765C17.074,6.375,16.833,6.027,16.471,5.962z"
          ></path>
          <path
            class="fill-current"
            d="M16.594,3.804H3.406c-0.369,0-0.667,0.298-0.667,0.667s0.299,0.667,0.667,0.667h13.188c0.369,0,0.667-0.298,0.667-0.667S16.963,3.804,16.594,3.804z"
          ></path>
          <path
            class="fill-current"
            d="M9.25,3.284h1.501c0.368,0,0.667-0.298,0.667-0.667c0-0.369-0.299-0.667-0.667-0.667H9.25c-0.369,0-0.667,0.298-0.667,0.667C8.583,2.985,8.882,3.284,9.25,3.284z"
          ></path>
        </svg>

        Trash</a
      >
    </li>
    <li class="flex">
      <a
        @click="emit('close-popup')"
        class="flex items-center px-3 py-2.5 mb-1.5 bg-black bg-opacity-60 hover:bg-opacity-100 rounded transform hover:translate-x-1 transition duration-75 ease-in"
        href="#"
      >
        <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path
            d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"
          ></path></svg
      ></a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    card: {
      type: Object
    },
    listId: {
      type: Number
    }
  },
  setup(props, { emit }) {
    const deleteCard = () => {
      // delete card
      window.eventBus.emit('delete-card', {
        cardId: props.card.id,
        listId: props.listId
      })

      // hide overlay
      window.eventBus.emit('toggle-overlay', false)
    }

    return {
      emit,
      deleteCard
    }
  }
}
</script>

<style lang="scss" scoped></style>
