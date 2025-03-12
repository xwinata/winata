<script lang="ts">
	import '../app.css';
	let { children } = $props();

  import NavigationSidebar from '$lib/components/NavigationSidebar/NavigationSidebar.svelte';
  import { HomeOutline, HomeSolid, BadgeCheckOutline, BadgeCheckSolid, BookOpenOutline, BookOpenSolid } from 'flowbite-svelte-icons';
  import { DarkMode } from 'flowbite-svelte'

  let site = {
    name: 'Christian Winata',
    href: '/',
    img: '/images/flowbite-svelte-icon-logo.svg'
  };

	import { setContext } from 'svelte';
	import { afterNavigate } from '$app/navigation';

  let activeUrl = $state('');
  afterNavigate((nav) => {
    activeUrl = nav.to?.url.pathname as string;
  });

  const activeClass = [
    'flex',
    'text-primary-800',
    'bg-primary-200',
    'dark:bg-primary-700',
    'dark:text-white',
    'hover:pl-4',
    'hover:text-primary-800',
    'hover:bg-primary-100',
    'dark:hover:bg-primary-100'
  ].join(' ');
  const nonActiveClass = [
    'flex',
    'text-gray-500',
    'dark:text-gray-400',
    'hover:pl-4',
    'hover:text-gray-900',
    'dark:hover:text-white'
  ].join(' ')

  setContext('layout', () => {{
    activeUrl
  }})

  const menus = [
    {
      label: 'Home',
      href: '/',
      icon: HomeOutline,
      activeIcon: HomeSolid
    },
    {
      label: 'Experiences',
      href: '/experiences',
      icon: BadgeCheckOutline,
      activeIcon: BadgeCheckSolid
    },
    {
      label: 'Educations',
      href: '/educations',
      icon: BookOpenOutline,
      activeIcon: BookOpenSolid
    }
  ]
</script>

<div class="flex w-screen h-screen">
  <NavigationSidebar {site} {menus} />
  <DarkMode class="fixed right-4 bottom-4 z-99" />
  <div class="flex-auto h-window bg-white dark:bg-gray-700 dark:text-white">
    {@render children()}
  </div>
</div>
