<template>
  <div class="flex flex-col gap-y-4 lg:col-span-1">
    <div class="flex items-center justify-between gap-x-4">
      <h3 class="text-lg font-semibold sm:text-lg dark:text-white">Lessons</h3>
      <div class="flex gap-x-2">
        <a
          href="#"
          target="_blank"
          class="hover:text-indigo-600 dark:text-gray-200 dark:hover:text-indigo-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-6 sm:size-8"
          >
            <path
              d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z"
            />
          </svg>
        </a>
        <a
          href="#"
          target="_blank"
          class="hover:text-indigo-600 dark:text-gray-200 dark:hover:text-indigo-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-6 sm:size-8"
          >
            <path
              fill-rule="evenodd"
              d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
    <ul class="flex flex-col gap-y-1">
      <li>
        <a
          href="#"
          class="flex w-full items-center justify-between gap-x-4 rounded-lg bg-indigo-50 p-3 text-indigo-700 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-700"
        >
          <span class="truncate text-sm font-medium sm:text-base"
            >1. Getting Started with Prettier</span
          >
          <span class="text-sm text-gray-500 sm:text-base">5:30</span>
        </a>
      </li>
      <li>
        <a
          href="#"
          class="flex w-full items-center justify-between gap-x-4 rounded-lg p-3 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
        >
          <span class="truncate text-sm font-medium sm:text-base"
            >2. Advanced GitLens Features</span
          >
          <span class="text-sm text-gray-500 sm:text-base">8:45</span>
        </a>
      </li>
      <li>
        <a
          href="#"
          class="flex w-full items-center justify-between gap-x-4 rounded-lg p-3 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
        >
          <span class="truncate text-sm font-medium sm:text-base"
            >3. Debugging with ESLint</span
          >
          <span class="text-sm text-gray-500 sm:text-base">6:15</span>
        </a>
      </li>
    </ul>
  </div>
</template>
