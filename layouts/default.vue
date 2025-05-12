<template>
  <div id="body-container" class="grid grid-rows-[auto_1fr_auto] min-h-screen">
    <header
      class="sticky top-0 z-40 flex-none w-full mx-aut border-b border-gray-200 bg-white dark:bg-gray-700"
    >
      <div
        class="flex items-center justify-between w-full px-3 py-3 mx-auto max-w-7xl lg:px-4"
      >
        <!-- <Hamburger /> -->
        <AppSocmedNavbar />
        <div class="flex items-center">
          <!-- <DarkModeToggle /> -->
        </div>
      </div>
    </header>
    <!-- Content -->
    <div class="w-full px-4 max-w-7xl mx-auto">
      <div class="lg:flex" id="nav-and-content-container">
        <aside
          id="sidebar"
          class="fixed inset-0 z-20 flex-none hidden w-72 lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-48 lg:block"
        >
          <div
            id="nav-wrapper"
            class="overflow-y-auto z-20 max-h-screen max-w-2xs lg:block lg:sticky top-24 lg:top-28 lg:mr-0 bg-white dark:bg-gray-900"
          >
            <AppNavbar />
            <!-- <Navbar
              posts="{data.resolvedEntries}"
              portfolio="{data.portfolio}"
            /> -->
          </div>
        </aside>
        <main
          id="content-wrapper"
          class="flex-auto w-full min-w-0 lg:static lg:max-h-full lg:overflow-visible"
        >
          <div class="flex w-full">
            <div
              class="flex-auto max-w-4xl min-w-0 pt-6 lg:px-8 lg:pt-8 pb-12 xl:pb-24 lg:pb-16"
            >
              <slot />
            </div>
            <div class="flex-none hidden w-64 pl-8 mr-8 xl:text-sm xl:block" />
          </div>
        </main>
      </div>
    </div>
    <footer class="py-12 h-12">
      <p class="text-center">© Kian Yang Lee (2023)</p>
    </footer>
  </div>
</template>
