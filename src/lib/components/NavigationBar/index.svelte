<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';

	let { site, menus } = $props();

	let activeUrl = $state('');
	let responsiveTitle = $state('');
	afterNavigate((nav) => {
		activeUrl = nav.to?.url.pathname as string;
		responsiveTitle = menus.find((menu: Record<string, unknown>) => menu.href === activeUrl).label;
	});
</script>

<Navbar
	class="fixed start-0 top-0 z-20 w-full border-b bg-zinc-100 px-2 py-2.5 sm:px-4"
	let:hidden
	let:toggle
>
	<NavBrand href="/">
		<img src={site.img} class="me-3 h-6 sm:h-9" alt={site.name} />
		<span
			class="hidden self-center text-xl font-semibold whitespace-nowrap lg:block dark:text-white"
			>{site.name} | {responsiveTitle}</span
		>
		<span
			class="block self-center text-xl font-semibold whitespace-nowrap lg:hidden dark:text-white"
			>{responsiveTitle}</span
		>
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl {activeUrl} {hidden}>
		{#each menus as menu, index (index)}
			<NavLi
				class="align-center flex h-8 rounded-sm p-1"
				href={menu.href}
				on:click={!hidden ? toggle : () => {}}
			>
				{#if activeUrl === menu.href}
					<menu.activeIcon style="transition-property: none;" />
				{:else}
					<menu.icon style="transition-property: none;" />
				{/if}
				{menu.label}
			</NavLi>
		{/each}
	</NavUl>
</Navbar>
