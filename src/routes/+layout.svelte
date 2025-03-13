<script lang="ts">
	import '../app.css';
	let { children } = $props();

	import NavigationBar from '$lib/components/NavigationBar/index.svelte';

	import {
		HomeOutline,
		HomeSolid,
		BadgeCheckOutline,
		BadgeCheckSolid,
		KeyboardOutline,
		KeyboardSolid,
		GithubSolid
	} from 'flowbite-svelte-icons';
	import { DarkMode } from 'flowbite-svelte';

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

	setContext('layout', () => {
		return {
			activeUrl
		};
	});

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
			label: 'Skills',
			href: '/skills',
			icon: KeyboardOutline,
			activeIcon: KeyboardSolid
		},
		{
			label: 'About this site',
			href: 'https://github.com/xwinata/winata',
			icon: GithubSolid,
			activeIcon: GithubSolid
		}
	];
</script>

<DarkMode class="fixed right-4 bottom-4 z-99" />
<div class="relative min-h-screen dark:bg-gray-700 dark:text-white">
	<NavigationBar {site} {menus} />
	<div class="px-2 pt-16 lg:pt-24 pb-4">
		{@render children()}
	</div>
</div>
