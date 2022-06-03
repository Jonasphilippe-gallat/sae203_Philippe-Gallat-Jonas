<template>
  <div class="flex flex-col justify-end">
    <div
      class="
        z-10
        w-36
        sm:h-16 sm:text-xl sm:w-48
        lg:h-20 lg:text-2xl lg:w-56
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
      <p class="m-3 sm:m-4 lg:m-5 text-black font-semibold">CONCERT</p>
    </div>
    <img
      class="flex justify-center object-cover h-36 sm:h-60 lg:h-96"
      src="src/img/imgconcert.jpg"
      alt="photo concert"
    />
  </div>
  <div class="m-3">
    <img src="src/img/imgconc.jpg" alt="" />
    <div class="grid grid-cols-2 uppercase items-center mt-7 mb-14">
      <div
        class="
          flex flex-col
          justify-center
          items-center
          text-xs
          sm:text-lg
          lg:text-2xl
        "
      >
        <ul class="flex flex-col gap-8 sm:gap-10 lg:gap-14">
          <li>4 place des palaces, 85005 paris</li>
          <li>Boissons et snacks sur place</li>
          <li>ouverture de la salle : 18h30</li>
        </ul>
      </div>
      <div
        class="
          flex flex-col
          justify-center
          items-center
          text-xs
          sm:text-lg
          lg:text-2xl
        "
      >
        <ul class="flex flex-col gap-8 sm:gap-10 lg:gap-14">
          <li>scène n°3</li>
          <li>camping et hÔtels aux alentours</li>
          <li>espace fumeur en dehors de la salle</li>
        </ul>
      </div>
    </div>
  </div>
</template>