<template>
  <div class="bg-neutral-900 h-full w-full flex flex-col">
    <div class="">
      <RouterLink to="/"
        ><img
          class="m-3 w-16 sm:w-32 lg:w-48 sm:m-4 lg:m-6"
          alt="logo"
          src="src/img/logoblackwhite.svg "
      /></RouterLink>
    </div>
    <nav
      class="
        flex flex-col
        gap-10
        mt-10
        mb-28
        text-gray-400 text-xxs
        sm:text-sm sm:gap-15
        lg:gap-20 lg:text-base
      "
    >
      <div class="flex flex-row gap-10 sm:gap-15 lg:gap-20 justify-center">
        <RouterLink to="/programmation">PROGRAMMATION</RouterLink>
        <RouterLink to="/artistes">ARTISTES</RouterLink>
        <RouterLink to="/contact">CONTACT</RouterLink>
      </div>
      <div class="flex flex-row gap-10 sm:gap-15 lg:gap-20 justify-center">
        <RouterLink to="/mentions">MENTIONS LEGALES</RouterLink>
        <RouterLink to="/festival">FESTIVAL</RouterLink>
        <RouterLink to="/concert">CONCERTS</RouterLink>
      </div>
    </nav>
  </div>
</template>