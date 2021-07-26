<template>
  <transition
    appear enter-active-class="animate__animated animate__zoomIn"
  >
    <slot></slot>
  </transition>
</template>

<script>
export default {};
</script>