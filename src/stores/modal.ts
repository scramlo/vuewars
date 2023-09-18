import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {
  const open = ref(false);
  function toggleModal() {
    document.body.style.overflow = open.value ? 'auto' : 'hidden'
    open.value = !open.value
  }

  return { open, toggleModal }
})
