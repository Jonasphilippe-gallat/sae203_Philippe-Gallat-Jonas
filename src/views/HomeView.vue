<template>
  <main>
    <div>
      <div
        class="flex flex-col gap-2 absolute w-full justify-center items-center"
      >
        <h1
          class="
            z-10
            m-3
            sm:mt-8
            lg:mt-12
            text-white text-3xl
            sm:text-4xl
            lg:text-5xl
            font-semibold
          "
        >
          FARLIGHT FESTIVAL
        </h1>

        <div
          class="
            flex flex-col
            justify-center
            sm:flex-row sm:items-center sm:gap-8
          "
        >
          <img
            class="z-10 h-24 sm:mt-4 sm:h-28"
            src="src/img/logowhitecouleur.svg"
            alt="logo"
          />

          <div
            class="
              sm:h-28
              h-24
              w-72
              z-10
              mt-4
              text-xl
              flex
              text-center
              align-text-bottom
              items-center
              justify-center
            "
          >
            <p
              class="
                z-20
                text-white
                pl-4
                pr-4
                flex flex-row
                font-semibold
                absolute
              "
            >
              DU<span class="text-red-600 ml-1 mr-1 font-extrabold">7</span>
              AU<span class="text-red-600 ml-1 mr-1 font-extrabold">10</span>
              JUILLET 2022
            </p>

            <div class="h-full w-full bg-white opacity-30 z-10 sm:" />
          </div>
          <div
            class="
              visible
              sm:hidden
              pt-3
              flex flex-row
              gap-3
              justify-center
              items-center
              uppercase
              text-white
            "
          >
            <img class="z-10 h-8" src="src/img/iconehome.svg" alt="" />
            <p class="z-10 text-xl font-semibold">PARIS - 1ère édition</p>
          </div>
        </div>
        <div
          class="
            hidden
            sm:flex
            pt-3
            flex-row
            gap-6
            justify-center
            items-center
            uppercase
            text-white
          "
        >
          <img class="z-10 h-10" src="src/img/iconehome.svg" alt="" />
          <p class="z-10 text-2xl font-semibold">PARIS - 1ère édition</p>
        </div>
      </div>

      <img
        class="flex justify-center object-cover w-full h-[550px] sm:h-[500px]"
        src="src/img/imghome.jpg"
        alt="photo concert"
      />
      <div
        class="
          flex flex-col
          sm:flex-row
          gap-7
          bottom-32
          sm:bottom-0 sm:gap-16
          lg:gap-48
          items-center
          justify-center
        "
      >
        <RouterLink to="/programmation">
          <div
            class="
              z-20
              h-10
              w-40
              bottom-20
              flex
              justify-center
              items-center
              text-white text-xs
            "
          >
            <p class="z-30 absolute">PROGRAMMATION</p>
            <div
              class="h-full w-full border-2 border-red-600 bg-black opacity-70"
            ></div></div
        ></RouterLink>
        <RouterLink to="/billeterie">
          <div
            class="
              z-20
              h-10
              w-32
              bottom-20
              flex
              justify-center
              items-center
              text-white text-xs
            "
          >
            <p class="z-30 absolute">BILLETERIE</p>
            <div
              class="h-full w-full border-2 border-red-600 bg-black opacity-70"
            ></div></div
        ></RouterLink>
        <RouterLink to="/festival"
          ><div
            class="
              z-20
              h-10
              w-32
              bottom-20
              flex
              justify-center
              items-center
              text-white text-xs
            "
          >
            <p class="z-30 absolute">FESTIVAL</p>
            <div
              class="h-full w-full border-2 border-red-600 bg-black opacity-70"
            ></div></div
        ></RouterLink>
      </div>
    </div>
    <div class="bottom-28 sm:bottom-0 mb-16 flex flex-col items-center">
      <h2 class="text-center pb-8 uppercase font-bold text-xl text-black">
        newsletter
      </h2>
      <div
        class="
          justify-center
          items-center
          h-60
          w-full
          sm:w-3/4
          pt-9
          text-sm text-white
          uppercase
          bg-zinc-900
          text-center
          flex flex-col
          gap-8
        "
      >
        <p>Inscrivez-vous à notre newsletter</p>
        <p>Pour vous tenir au courant des événements à venir !</p>

        <div
          class="
            flex
            h-12
            w-32
            text-sm
            border-2 border-white
            items-center
            justify-center
            bg-black
          "
        >
          S'INSCRIRE
        </div>
      </div>
    </div>
  </main>
</template>
