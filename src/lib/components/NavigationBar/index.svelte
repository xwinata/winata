<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';

	let { site, menus } = $props();

	let activeUrl = $state('');
	afterNavigate((nav) => {
		activeUrl = nav.to?.url.pathname as string;
	});
</script>

<Navbar class="fixed start-0 top-0 z-20 w-full border-b px-2 py-2.5 sm:px-4" let:hidden let:toggle>
	<NavBrand href="/">
		<img src={site.img} class="me-3 h-6 sm:h-9" alt={site.name} />
		<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
			>{site.name}</span
		>
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl {activeUrl} {hidden}>
		{#each menus as menu}
			<NavLi class="align-center flex h-8 rounded-sm p-1" href={menu.href}>
				{#if activeUrl === menu.href}
					<menu.activeIcon />
				{:else}
					<menu.icon />
				{/if}
				{menu.label}
			</NavLi>
		{/each}
	</NavUl>
</Navbar>
