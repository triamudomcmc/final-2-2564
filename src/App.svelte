<script lang="ts">
  // import logo from "./assets/svelte.png"
  import huawei from "./assets/huawei.svg"
  import iPad from "./assets/ipad.svg"
  import iPhone8 from "./assets/iphone 8.svg"
  import iPhoneX from "./assets/iphone x.svg"

  import InstagramIcon from "svelte-material-icons/Instagram.svelte"
  import FacebookIcon from "svelte-material-icons/FacebookBox.svelte"
  import Button from "./lib/Button.svelte"

  let size = "2em"
</script>

<svelte:head>
  <title>ตารางสอบปลายภาคเรียนที่ 2/2564</title>
</svelte:head>

<main class="min-h-screen bg-gray-100 px-2 py-8 font-display sm:px-12 lg:px-24">
  <header class="py-4">
    <nav class="mb-4 flex justify-between py-4">
      <span class="select-none text-4xl font-bold text-gray-700">กช.</span>
      <div class="flex items-end space-x-4">
        <a
          href="https://www.instagram.com/tucmc_official"
          target="_blank"
          class="cursor-pointer text-gray-600 transition-colors hover:text-gray-800"
        >
          <InstagramIcon {size} />
        </a>
        <a
          href="https://www.facebook.com/triamudomclubs/"
          target="_blank"
          class="cursor-pointer text-gray-600 transition-colors hover:text-gray-800"
        >
          <FacebookIcon {size} />
        </a>
      </div>
    </nav>
    <div class="bg-[#db7ca4] px-6 py-12 text-white sm:px-24 sm:py-16">
      <h1 class="text-center text-xl font-semibold sm:text-left sm:text-4xl">ตารางสอบ Final - ปีการศึกษา 2/2564</h1>
      <p class="mt-2 text-center text-lg font-light sm:text-left sm:text-xl">เลือกแบบที่ต้องการแล้วกด Download เลย !</p>
    </div>
  </header>
  <article class="grid grid-cols-1 py-4 sm:grid-cols-2">
    <section class="order-last border-gray-600 sm:order-first sm:border-r sm:pr-4">
      <p class="text-lg">ระดับขั้น</p>
      <div class="flex space-x-2 py-2">
        <Button>ม.4</Button>
        <Button>ม.5</Button>
      </div>
      <p class="text-lg">สายการเรียน</p>
      <div class="flex space-x-2 py-2">
        <Button>วิทย์-คณิต</Button>
        <Button>ศิลป์คำนวณ</Button>
        <Button>ศิลป์ภาษา</Button>
      </div>
      <p class="text-lg">ขนาดหน้าจอ</p>
      <div class="grid grid-cols-4 items-start gap-4">
        <figure class="flex flex-col items-center justify-center space-y-2 text-center text-sm">
          <img src={iPad} alt="iPad Resolution" class="w-full rounded-md border border-gray-400" />
          <figcaption>iPad (3:4)</figcaption>
        </figure>
        <figure class="flex flex-col items-center justify-center space-y-2 text-center text-sm">
          <img src={iPhoneX} alt="iPhone X Resolution" class="w-full rounded-md border border-gray-400" />
          <figcaption>iPhone X (19.5:9)</figcaption>
        </figure>
        <figure class="flex flex-col items-center justify-center space-y-2 text-center text-sm">
          <img src={iPhone8} alt="iPhone 8 Resolution" class="w-full rounded-md border border-gray-400" />
          <figcaption>iPhone 8 (16:9)</figcaption>
        </figure>
        <figure class="flex flex-col items-center justify-center space-y-2 text-center text-sm">
          <img src={huawei} alt="Huawei Resolution" class="w-full rounded-md border border-gray-400" />
          <figcaption>Huawei (19.5:9, centered)</figcaption>
        </figure>
      </div>
      <p class="text-lg">ธีมสี</p>
    </section>
    <section class="order-first sm:order-last" />
  </article>
</main>
