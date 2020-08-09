<template>
  <span>This is the message: {{ message }}</span>
</template>

<script>
export default {
  name: 'message',
  props: ['message'],
};
</script>
