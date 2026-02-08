<template>
  <div class="slidev-layout two-columns w-full h-full">
    <div class="left">
      <slot />
    </div>
    <div class="right">
      <slot name="right" />
    </div>
  </div>
</template>
