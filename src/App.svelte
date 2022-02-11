<script lang="ts">
  import huawei from "./assets/huawei.svg"
  import iPad from "./assets/ipad.svg"
  import iPhone8 from "./assets/iphone 8.svg"
  import iPhoneX from "./assets/iphone x.svg"

  import previewRed from "./assets/preview-red.png"
  import previewPink from "./assets/preview-pink.png"

  import InstagramIcon from "svelte-material-icons/Instagram.svelte"
  import FacebookIcon from "svelte-material-icons/FacebookBox.svelte"
  import Button from "./lib/Button.svelte"
  import ImageButton from "./lib/ImageButton.svelte"

  import { data, TProgramme } from "./lib/store"
  import Head from "./lib/Head.svelte"

  const size = "2em"

  const getProgramme = (programme: TProgramme) => {
    switch (programme) {
      case "sci-math":
        return "1"
      case "arts-math":
        return "2"
      case "arts-lang":
        return "3"
      default:
        return "-1"
    }
  }

  function getPreviewPath(_data) {
    return `/assets/${_data.theme}/${_data.dimension}/${_data.class === "4" ? "M4" : "M5"}/${getProgramme(
      $data.programme
    )}.JPG`
  }

  function getSourcePath(_data) {
    return `/src/${_data.theme}/${_data.dimension}/${_data.class === "4" ? "M4" : "M5"}/${getProgramme(
      $data.programme
    )}.JPG`
  }

  $: previewPath = getPreviewPath($data)
  $: srcPath = getSourcePath($data)

  function downloadFile() {
    window.gtag("event", "generate_schedule", { data: $data })

    const a = document.createElement("a")
    a.href = srcPath
    a.download = `${$data.theme}-${$data.dimension}-${$data.class === "4" ? "M4" : "M5"}-${$data.programme}.jpg`
    document.body.appendChild(a)
    a.click()
    a.remove()
  }
</script>

<Head />

<main class="min-h-screen bg-[#fafafa] px-2 py-2 font-display sm:my-10 sm:py-8 sm:px-12 lg:px-24">
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
    <div
      class="flex flex-col items-center space-y-4 bg-[#db7ca4] px-6 py-12 text-white sm:items-start sm:px-24 sm:py-16"
    >
      <h1 class="text-center text-xl font-semibold sm:text-left sm:text-4xl">ตารางสอบ Final - ภาคเรียนที่ 2/2564</h1>
      <p class="text-label text-center font-light sm:text-left sm:text-xl">เลือกแบบที่ต้องการแล้วกด Download เลย !</p>
      <!-- <button on:click={downloadFile} class="btn-primary px-6 py-2 text-gray-700">Download</button> -->
    </div>
  </header>
  <article class="grid grid-cols-1 items-start gap-8 py-4 sm:grid-cols-[1fr_2fr]">
    <section class="order-first flex flex-col justify-center border-gray-600 sm:order-last">
      <div class="flex flex-col">
        <p class="text-label">ระดับชั้น</p>
        <div class="flex space-x-2 py-2">
          <Button name="class" value="4">ม.4</Button>
          <Button name="class" value="5">ม.5</Button>
        </div>
        <p class="text-label">สายการเรียน</p>
        <div class="flex space-x-2 py-2">
          <Button name="programme" value="sci-math">วิทย์-คณิต</Button>
          <Button name="programme" value="arts-math">ศิลป์คำนวณ</Button>
          <Button name="programme" value="arts-lang">ศิลป์ภาษา</Button>
        </div>
        <p class="text-label">ขนาดหน้าจอ</p>
        <div class="grid grid-cols-2 items-start gap-4 py-2 sm:grid-cols-4">
          <figure class="flex flex-col items-center justify-center space-y-2 text-center text-sm">
            <ImageButton name="dimension" value="ipad">
              <img src={iPad} alt="iPad Resolution" />
            </ImageButton>
            <figcaption>iPad (3:4)</figcaption>
          </figure>
          <figure class="flex flex-col items-center justify-center space-y-2 text-center text-sm">
            <ImageButton name="dimension" value="iphonex">
              <img src={iPhoneX} alt="iPhone X Resolution" />
            </ImageButton>
            <figcaption>iPhone X (19.5:9)</figcaption>
          </figure>
          <figure class="flex flex-col items-center justify-center space-y-2 text-center text-sm">
            <ImageButton name="dimension" value="iphone8">
              <img src={iPhone8} alt="iPhone 8 Resolution" />
            </ImageButton>
            <figcaption>iPhone 8 (16:9)</figcaption>
          </figure>
          <figure class="flex flex-col items-center justify-center space-y-2 text-center text-sm">
            <ImageButton name="dimension" value="huawei">
              <img src={huawei} alt="Huawei Resolution" />
            </ImageButton>
            <figcaption>Huawei (19.5:9, centered)</figcaption>
          </figure>
        </div>
        <p class="text-label">ธีมสี</p>
        <div class="grid grid-cols-2 items-start gap-4 py-2">
          <figure class="flex flex-col items-center justify-center space-y-2 text-center text-sm">
            <ImageButton name="theme" value="pink">
              <img src={previewPink} alt="Pink Theme" />
            </ImageButton>
            <figcaption>Sugarcandy 💖</figcaption>
          </figure>
          <figure class="flex flex-col items-center justify-center space-y-2 text-center text-sm">
            <ImageButton name="theme" value="red">
              <img src={previewRed} alt="Red Theme" />
            </ImageButton>
            <figcaption>Roses and Ribbons ❤️</figcaption>
          </figure>
        </div>
      </div>
      <button on:click={downloadFile} class="btn-primary mt-6 px-6 py-2 text-gray-700">Download</button>
    </section>
    <section class="order-last pt-6 sm:order-first sm:pt-0">
      <img src={previewPath} alt="Preview" class="w-full rounded-md object-contain" />
    </section>
  </article>
</main>
