<script lang="ts">
  import { Gallery } from 'flowbite-svelte'

  const items = [
    {
      alt: "golang",
      src: "https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_Blue.svg"
    },
    {
      alt: "nodejs",
      src: "https://nodejs.org/static/logos/nodejsStackedLight.svg"
    },
    {
      alt: "typescript",
      src: "/images/typescript.svg"
    },
    {
      alt: "python",
      src: "https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg"
    },
    {
      alt: "php",
      src: "https://www.php.net/images/logos/new-php-logo.svg"
    },
    {
      alt: "react",
      src: "images/react.svg"
    },
    {
      alt: "svelte",
      src: "https://raw.githubusercontent.com/sveltejs/branding/refs/heads/master/svelte-logo.svg"
    },
    {
      alt: "tailwind-css",
      src: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg"
    },

  ]
</script>

<h1>Tech Stacks</h1>
<Gallery {items} class="grid-flow-col" imgClass="h-20 w-20"/>