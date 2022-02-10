<script lang="ts">
  import classNames from "classnames"
  import { data } from "./store"

  export let name
  export let value
  let className = undefined

  export { className as class }

  function handleClick(e: MouseEvent) {
    e.preventDefault()

    data.update((_d) => {
      return {
        ..._d,
        [name]: value,
      }
    })
  }
</script>

<button
  on:click={handleClick}
  class={classNames($data[name] === value ? "btn-selected" : "btn-normal", className, "h-full w-full p-0")}
>
  <slot />
</button>
