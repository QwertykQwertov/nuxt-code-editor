<template>
  <main
    class="dark grid min-h-screen place-items-center bg-gray-50 dark:bg-gray-800"
  >
    <section class="flex w-full flex-col items-center gap-y-4 p-3 sm:gap-y-6">
      <AppLogo
        icon-classes="size-14 text-indigo-600 sm:size-16 dark:text-white"
      />
      <div
        class="h-full w-full rounded-md border border-gray-200 bg-white p-4 shadow-sm sm:w-96 sm:rounded-lg sm:p-6 dark:border-black dark:bg-gray-900 dark:shadow-none"
      >
        <slot></slot>
      </div>
    </section>
  </main>
</template>
