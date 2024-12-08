<template>
  <footer :class="$style.footer">
    <h5 :class="$style.title">Test task, 2022</h5>
    <div :class="$style.contacts">
      <a :class="$style.phone" href="tel:+5183632171">518-363-2171</a>
      <address>91&nbsp;Park&nbsp;St.Fairhope, AL&nbsp;36532</address>
    </div>
  </footer>
</template>

<style module>
.footer {
  display: flex;
  min-height: var(--footer-height);
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--content-padding);
  background-color: var(--color-surface);
}

.title {
  text-transform: capitalize;
}

.contacts {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.phone {
  text-decoration: underline;
}
</style>
