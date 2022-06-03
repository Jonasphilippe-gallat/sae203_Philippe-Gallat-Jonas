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
      <p class="m-3 sm:m-4 lg:m-5 text-black font-semibold">CONTACT</p>
    </div>
    <img
      class="flex justify-center object-cover h-36 sm:h-60 lg:h-96"
      src="src/img/imgcontact.jpg"
      alt="photo concert"
    />
  </div>
  <div class="flex flex-col items-center justify-center pt-8">
    <h2 class="text-center pb-8 uppercase font-bold text-xl text-black">
      Localisation
    </h2>

    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.95410697018!2d2.276995212836463!3d48.85883363928723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis!5e0!3m2!1sfr!2sfr!4v1654158392690!5m2!1sfr!2sfr"
      style="border: 0"
      class="w-3/4 h-96"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>

    <h2 class="text-center pb-8 pt-10 uppercase font-bold text-xl text-black">
      Formulaire
    </h2>
    <div class="mb-10 m-5">
      <form class="w-full max-w-lg">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                mb-2
              "
              for="grid-first-name"
            >
              Prénom
            </label>
            <input
              class="
                appearance-none
                block
                w-full
                bg-gray-200
                text-gray-700
                rounded
                py-3
                px-4
                mb-3
                leading-tight
                focus:outline-none focus:bg-white focus:border-gray-500
              "
              id="grid-first-name"
              type="text"
              placeholder="coco"
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                mb-2
              "
              for="grid-last-name"
            >
              Nom
            </label>
            <input
              class="
                appearance-none
                block
                w-full
                bg-gray-200
                text-gray-700
                border border-gray-200
                rounded
                py-3
                px-4
                leading-tight
                focus:outline-none focus:bg-white focus:border-gray-500
              "
              id="grid-last-name"
              type="text"
              placeholder="jojo"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                mb-2
              "
              for="grid-password"
            >
              E-mail
            </label>
            <input
              class="
                appearance-none
                block
                w-full
                bg-gray-200
                text-gray-700
                border border-gray-200
                rounded
                py-3
                px-4
                mb-3
                leading-tight
                focus:outline-none focus:bg-white focus:border-gray-500
              "
              id="email"
              type="email"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                mb-2
              "
              for="grid-password"
            >
              VOTRE Message
            </label>
            <textarea
              class="
                no-resize
                appearance-none
                block
                w-full
                bg-gray-200
                text-gray-700
                border border-gray-200
                rounded
                py-3
                px-4
                mb-3
                leading-tight
                focus:outline-none focus:bg-white focus:border-gray-500
                h-48
                resize-none
              "
              id="message"
            ></textarea>
          </div>
        </div>
        <div class="md:flex md:items-center">
          <div
            class="
              top-0
              pointer-events-auto:hidden
              align-middle
              z-20
              h-10
              w-2/6
              bottom-20
              flex
              justify-center
              items-center
              text-black text-xs
              border-2 border-black
            "
          >
            <button>
              <p class="z-30">ENVOYER</p>
            </button>
          </div>
          <div class="md:w-2/3"></div>
        </div>
      </form>
    </div>
  </div>
</template>