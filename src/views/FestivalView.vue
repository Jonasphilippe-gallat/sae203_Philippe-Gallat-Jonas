<template>
  <div class="flex flex-col justify-end">
    <div
      class="
        z-10
        w-40
        sm:h-16 sm:text-xl sm:w-52
        lg:h-20 lg:text-2xl lg:w-64
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
      <p class="m-3 sm:m-4 lg:m-5 text-black font-semibold">FESTIVAL</p>
    </div>
    <img
      class="flex justify-center object-cover h-36 sm:h-60 lg:h-96"
      src="src/img/imgfestival.jpg"
      alt="photo concert"
    />
  </div>
  <div class="pt-10">
    <h2 class="text-center pb-8 uppercase font-bold text-xl text-black">
      présentation
    </h2>
    <div class="p-5 sm:p-7 lg:p-10 flex flex-col">
      <div class="h-1/2 w-full bg-zinc-900 text-white p-7 mb-5">
        <p class="uppercase text-sm">
          Le farlight festival est un événement sans précedent ! ici vous
          pourrez assister à la fusion de deux styles de musique très
          différents, le hiphop/RAP accompagné d’un orchestre classique.. <br />
          LES PLUS GRANDS ARTISTES FRANCOPHONES SE PRODUIRONT SUR SCène pendant
          près de 4 jours, tandis que l’orchestre ne jouera qu’un jour sur deux,
          le jeudi et le samedi. <br />
          lAISSEZ VOUS TENTER PAR CE CONCEPT NOVATEUR !
        </p>
      </div>
      <div
        id="carouselExampleControls"
        class="carousel slide relative"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner relative w-full overflow-hidden">
          <div class="carousel-item active relative float-left w-full">
            <img
              src="src/img/imgfest1.jpg"
              class="block w-full"
              alt="Wild Landscape"
            />
          </div>
          <div class="carousel-item relative float-left w-full">
            <img src="src/img/imgfest2.jpg" class="block w-full" alt="Camera" />
          </div>
          <div class="carousel-item relative float-left w-full">
            <img
              src="src/img/imgfest3.jpg"
              class="block w-full"
              alt="Exotic Fruits"
            />
          </div>
          <div class="carousel-item relative float-left w-full">
            <img
              src="src/img/imgfest4.jpg"
              class="block w-full"
              alt="Exotic Fruits"
            />
          </div>
        </div>
        <button
          class="
            carousel-control-prev
            absolute
            top-0
            bottom-0
            flex
            items-center
            justify-center
            p-0
            text-center
            border-0
            hover:outline-none hover:no-underline
            focus:outline-none focus:no-underline
            left-0
          "
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden"></span>
        </button>
        <button
          class="
            carousel-control-next
            absolute
            top-0
            bottom-0
            flex
            items-center
            justify-center
            p-0
            text-center
            border-0
            hover:outline-none hover:no-underline
            focus:outline-none focus:no-underline
            right-0
          "
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden"></span>
        </button>
      </div>
    </div>
  </div>
</template>