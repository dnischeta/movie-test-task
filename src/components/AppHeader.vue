<template>
  <header :class="$style.header">
    <h1 :class="$style.title">
      <RouterLink to="/">Test task</RouterLink>
    </h1>
  </header>
</template>

<style module>
.header {
  display: flex;
  height: var(--header-height);
  padding: 0 var(--content-padding);
  align-items: center;
  background-color: var(--color-surface);
}

.title {
  text-transform: capitalize;
}
</style>
