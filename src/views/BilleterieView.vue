<template>
  <div class="flex flex-col justify-end">
    <div
      class="
        z-10
        w-40
        sm:h-16 sm:text-xl sm:w-56
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
      <p class="m-3 sm:m-4 lg:m-5 text-black font-semibold">BILLETERIE</p>
    </div>
    <img
      class="flex justify-center object-cover h-36 sm:h-60 lg:h-96"
      src="src/img/imgbilleterie.jpg"
      alt="photo concert"
    />
  </div>

  <h2 class="text-center pt-8 pb-8 uppercase font-bold text-xl text-black">
    nos offres
  </h2>
  <div class="flex flex-col justify-center items-center w-full">
    <div class="flex justify-center w-3/5 h-48">
      <div
        class="
          w-1/2
          h-12
          absolute
          z-10
          flex
          justify-center
          items-center
          bg-red-600
          text-white
          font-bold
          text-xs
          sm:text-xl
        "
      >
        PASS 4 JOURS
      </div>
      <div class="h-40 mt-5 w-full bg-black">
        <div
          class="
            flex flex-row
            justify-between
            text-white text-sheesh
            sm:text-base
            uppercase
            mt-5
            ml-5
            mr-5
          "
        >
          <p class="mt-8">
            Entrée Pour tout le festival, du jeudi 7 au dimanche 10 juillet
          </p>
          <button
            class="
              top-20
              r-4
              uppercase
              h-10
              w-40
              border-2
              text-sheesh
              sm:text-xs
              text-white
              border-white
              z-10
            "
          >
            Réserver
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-col justify-center items-center w-full mb-10 lg:hidden">
    <div class="flex justify-center w-3/5 h-48">
      <div
        class="
          w-1/2
          h-12
          absolute
          z-10
          flex
          justify-center
          items-center
          bg-pink-800
          text-white
          font-bold
          text-xs
          sm:text-xl
        "
      >
        JEUDI
      </div>
      <div class="h-40 mt-5 w-full bg-black">
        <div
          class="
            flex flex-row
            justify-between
            text-white text-sheesh
            sm:text-base
            uppercase
            mt-5
            ml-5
            mr-5
          "
        >
          <p class="mt-8">jul, sch & ninho ( concert orchestral )</p>
          <button
            class="
              top-20
              r-4
              uppercase
              h-10
              w-40
              border-2
              text-sheesh
              sm:text-xs
              text-white
              border-white
              z-10
            "
          >
            Réserver
          </button>
        </div>
      </div>
    </div>
    <div class="flex justify-center w-3/5 h-48">
      <div
        class="
          w-1/2
          h-12
          absolute
          z-10
          flex
          justify-center
          items-center
          bg-blue-700
          text-white
          font-bold
          text-xs
          sm:text-xl
        "
      >
        VENDREDI
      </div>
      <div class="h-40 mt-5 w-full bg-black">
        <div
          class="
            flex flex-row
            justify-between
            text-white text-sheesh
            sm:text-base
            uppercase
            mt-5
            ml-5
            mr-5
          "
        >
          <p class="mt-8">nekfeu, alpha wann, burna boy & kaaris</p>
          <button
            class="
              top-20
              r-4
              uppercase
              h-10
              w-40
              border-2
              text-sheesh
              sm:text-xs
              text-white
              border-white
              z-10
            "
          >
            Réserver
          </button>
        </div>
      </div>
    </div>
    <div class="flex justify-center w-3/5 h-48">
      <div
        class="
          w-1/2
          h-12
          absolute
          z-10
          flex
          justify-center
          items-center
          bg-emerald-500
          text-white
          font-bold
          text-xs
          sm:text-xl
        "
      >
        SAMEDI
      </div>
      <div class="h-40 mt-5 w-full bg-black">
        <div
          class="
            flex flex-row
            justify-between
            text-white text-sheesh
            sm:text-base
            uppercase
            mt-5
            ml-5
            mr-5
          "
        >
          <p class="mt-8">damso, pnl & orelsan ( concert orchestral )</p>
          <button
            class="
              top-20
              r-4
              uppercase
              h-10
              w-40
              border-2
              text-sheesh
              sm:text-xs
              text-white
              border-white
              z-10
            "
          >
            Réserver
          </button>
        </div>
      </div>
    </div>
    <div class="flex justify-center w-3/5 h-48">
      <div
        class="
          w-1/2
          h-12
          absolute
          z-10
          flex
          justify-center
          items-center
          bg-orange-600
          text-white
          font-bold
          text-xs
          sm:text-xl
        "
      >
        DIMANCHE
      </div>
      <div class="h-40 mt-5 w-full bg-black">
        <div
          class="
            flex flex-row
            justify-between
            text-white text-sheesh
            sm:text-base
            uppercase
            mt-5
            ml-5
            mr-5
          "
        >
          <p class="mt-8">leto, mister v & mhd</p>
          <button
            class="
              top-20
              r-4
              uppercase
              h-10
              w-40
              border-2
              text-sheesh
              sm:text-xs
              text-white
              border-white
              z-10
            "
          >
            Réserver
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="hidden lg:flex flex-col w-full justify-center items-center">
    <div class="grid grid-cols-2 justify-center items-center">
      <div>
        <div class="flex justify-center w-4/6 h-48 float-right mr-10">
          <div
            class="
              w-1/2
              h-12
              absolute
              z-10
              flex
              justify-center
              items-center
              bg-pink-800
              text-white
              font-bold
              text-xs
              sm:text-xl
            "
          >
            JEUDI
          </div>
          <div class="h-40 mt-5 w-full bg-black">
            <div
              class="
                flex flex-row
                justify-between
                text-white text-sheesh
                sm:text-base
                uppercase
                mt-5
                ml-5
                mr-5
              "
            >
              <p class="mt-8">jul, sch & ninho ( concert orchestral )</p>
              <button
                class="
                  top-20
                  r-4
                  uppercase
                  h-10
                  w-40
                  border-2
                  text-sheesh
                  sm:text-xs
                  text-white
                  border-white
                  z-10
                "
              >
                Réserver
              </button>
            </div>
          </div>
        </div>
        <div class="flex justify-center w-4/6 h-48 float-right mr-10">
          <div
            class="
              w-1/2
              h-12
              absolute
              z-10
              flex
              justify-center
              items-center
              bg-blue-700
              text-white
              font-bold
              text-xs
              sm:text-xl
            "
          >
            VENDREDI
          </div>
          <div class="h-40 mt-5 w-full bg-black">
            <div
              class="
                flex flex-row
                justify-between
                text-white text-sheesh
                sm:text-base
                uppercase
                mt-5
                ml-5
                mr-5
              "
            >
              <p class="mt-8">nekfeu, alpha wann, burna boy & kaaris</p>
              <button
                class="
                  top-20
                  r-4
                  uppercase
                  h-10
                  w-40
                  border-2
                  text-sheesh
                  sm:text-xs
                  text-white
                  border-white
                  z-10
                "
              >
                Réserver
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="flex justify-center w-4/6 h-48">
          <div
            class="
              w-1/2
              h-12
              absolute
              z-10
              flex
              justify-center
              items-center
              bg-emerald-500
              text-white
              font-bold
              text-xs
              sm:text-xl
            "
          >
            SAMEDI
          </div>
          <div class="h-40 mt-5 w-full bg-black">
            <div
              class="
                flex flex-row
                justify-between
                text-white text-sheesh
                sm:text-base
                uppercase
                mt-5
                ml-5
                mr-5
              "
            >
              <p class="mt-8">damso, pnl & orelsan ( concert orchestral )</p>
              <button
                class="
                  top-20
                  r-4
                  uppercase
                  h-10
                  w-40
                  border-2
                  text-sheesh
                  sm:text-xs
                  text-white
                  border-white
                  z-10
                "
              >
                Réserver
              </button>
            </div>
          </div>
        </div>
        <div class="flex justify-center w-4/6 h-48">
          <div
            class="
              w-1/2
              h-12
              absolute
              z-10
              flex
              justify-center
              items-center
              bg-orange-600
              text-white
              font-bold
              text-xs
              sm:text-xl
            "
          >
            DIMANCHE
          </div>
          <div class="h-40 mt-5 w-full bg-black">
            <div
              class="
                flex flex-row
                justify-between
                text-white text-sheesh
                sm:text-base
                uppercase
                mt-5
                ml-5
                mr-5
              "
            >
              <p class="mt-8">leto, mister v & mhd</p>
              <button
                class="
                  top-20
                  r-4
                  uppercase
                  h-10
                  w-40
                  border-2
                  text-sheesh
                  sm:text-xs
                  text-white
                  border-white
                  z-10
                "
              >
                Réserver
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>