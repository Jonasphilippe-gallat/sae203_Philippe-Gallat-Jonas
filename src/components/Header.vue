<template class="font-['Inter']">
  <div
    class="bg-black h-12 w-full flex flex-row justify-between sm:h-20 lg:h-32"
  >
    <div class="">
      <RouterLink to="/"
        ><img
          class="m-2 w-16 sm:w-32 lg:w-48 lg:m-4"
          alt="logo"
          src="src/img/logowhite.svg "
      /></RouterLink>
    </div>
    <div class="shrink w-auto">
      <nav
        class="
          flex
          text-white text-xxs
          gap-3
          mt-4
          mr-4
          sm:text-sm sm:gap-8 sm:mt-8 sm:mr-10
          lg:text-base lg:gap-14 lg:mr-14 lg:mt-12
          font-light
        "
      >
        <RouterLink to="/programmation">PROGRAMMATION</RouterLink>
        <RouterLink to="/billeterie">BILLETERIE</RouterLink>
        <RouterLink to="/festival">FESTIVAL</RouterLink>
        <RouterLink to="/contact">CONTACT</RouterLink>
      </nav>
    </div>
  </div>
</template>