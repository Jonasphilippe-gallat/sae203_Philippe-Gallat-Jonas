<template>
  <div class="flex flex-col justify-end">
    <div
      class="
        z-10
        w-52
        sm:h-16 sm:text-xl sm:w-72
        lg:h-20 lg:text-2xl lg:w-80
        bg-white
        opacity-80
        flex flex-row
        absolute
        bottom-1/4
      "
    >
      <div
        class="ml-5 w-1.5 sm:w-2 lg:w-3 bg-red-600 opacity-100 mt-2 mb-2"
      ></div>
      <p class="m-3 sm:m-4 lg:m-5 text-black font-semibold">ARTISTES</p>
    </div>
    <img
      class="flex justify-center object-cover h-36 sm:h-60 lg:h-96"
      src="src/img/imgartistes.jpg"
      alt="photo concert"
    />
  </div>
  <div class="hidden sm:grid grid-cols-3 gap-2 m-5">
    <div class="flex flex-col gap-2">
      <img class="hover:" src="src/img/art1.png" alt="" />
      <div class="w-full">
        <RouterLink
          class="
            hover:bg-black
            w-full
            object-cover
            hover:w-full hover:h-full hover:opacity-60
          "
          to="/artiste"
        >
          <div class="h-full w-full absolute z-10"></div>

          <img class="w-full" src="src/img/art2.jpg" alt="" />
        </RouterLink>
      </div>
      <img src="src/img/art3.jpg" alt="" />
      <img src="src/img/art4.jpg" alt="" />
      <img src="src/img/art5.jpg" alt="" />
    </div>
    <div class="flex flex-col gap-2">
      <img src="src/img/art6.jpg" alt="" />
      <img src="src/img/art7.jpg" alt="" />
      <img src="src/img/art8.png" alt="" />
      <img src="src/img/art9.jpg" alt="" />
    </div>
    <div class="flex sm:flex-col flex-row gap-2">
      <img src="src/img/art10.jpg" alt="" />
      <img src="src/img/art11.jpg" alt="" />
      <img src="src/img/art12.jpg" alt="" />
      <img src="src/img/art13.png" alt="" />
    </div>
  </div>
  <div class="visible sm:hidden grid grid-cols-2 gap-2 m-5">
    <div class="flex flex-col gap-2">
      <img src="src/img/art1.png" alt="" />
      <img src="src/img/art2.jpg" alt="" />
      <img src="src/img/art3.jpg" alt="" />
      <img src="src/img/art4.jpg" alt="" />
      <img src="src/img/art5.jpg" alt="" />
      <img src="src/img/art6.jpg" alt="" />
      <img src="src/img/art7.jpg" alt="" />
    </div>
    <div class="flex flex-col gap-2">
      <img src="src/img/art8.png" alt="" />
      <img src="src/img/art9.jpg" alt="" />
      <img src="src/img/art10.jpg" alt="" />
      <img src="src/img/art11.jpg" alt="" />
      <img src="src/img/art12.jpg" alt="" />
      <img src="src/img/art13.png" alt="" />
    </div>
  </div>
</template>