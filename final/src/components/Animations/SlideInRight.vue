<template>
  <transition
    appear enter-active-class="animate__animated animate__slideInRight"
  >
    <slot></slot>
  </transition>
</template>

<script>
export default {};
</script>