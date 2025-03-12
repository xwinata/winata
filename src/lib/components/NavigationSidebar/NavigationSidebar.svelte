<script lang="ts">
	import { afterNavigate } from "$app/navigation";

  import {
    Sidebar,
    SidebarWrapper,
    SidebarGroup,
    SidebarBrand,
    SidebarItem,
  } from "flowbite-svelte";
  import { GithubSolid } from "flowbite-svelte-icons";

  let {
    site,
    menus
  } = $props()

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
</script>


<Sidebar class="flex-auto max-w-80" {activeUrl} {activeClass} {nonActiveClass}>
  <SidebarWrapper class="h-screen grid grid-rows-8 rounded-none">
    <SidebarGroup class="content-center">
      <SidebarBrand {site} />
    </SidebarGroup>
    <SidebarGroup class="row-span-6">
      {#each menus as menu}
        <SidebarItem class="h-8 align-center rounded-sm p-1" label={menu.label} href={menu.href}>
          <svelte:fragment slot="icon">
            {#if activeUrl === menu.href}
              <menu.activeIcon />
            {:else}
              <menu.icon />
            {/if}
          </svelte:fragment>
        </SidebarItem>
      {/each}
    </SidebarGroup>
    <SidebarGroup class="relative">
      <SidebarItem class="absolute bottom-4 p-1" label="About this site" href="/about-this-site">
        <svelte:fragment slot="icon">
          <GithubSolid />
        </svelte:fragment>  
      </SidebarItem>
    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>