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
		GithubSolid,
		MessagesOutline,
		MessagesSolid
	} from 'flowbite-svelte-icons';
	import { DarkMode, Footer } from 'flowbite-svelte';

	let urlClass = 'underline hover:text-primary-600';

	let contentRef: HTMLElement;

	function updateCoordinate({ pageX, pageY }: MouseEvent) {
		if (!contentRef) return;
		contentRef.style.setProperty('--radialx', `${pageX}px`);
		contentRef.style.setProperty('--radialy', `${pageY}px`);
	}

	let site = {
		name: 'Christian Winata',
		href: '/',
		img: '/images/xwinata.png'
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

	let menus = [
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
			label: 'Contact Me',
			href: '/contact-me',
			icon: MessagesOutline,
			activeIcon: MessagesSolid
		},
		{
			label: 'About this site',
			href: 'https://github.com/xwinata/winata',
			target: "_blank",
			icon: GithubSolid,
			activeIcon: GithubSolid
		}
	];
</script>

<svelte:head>
	<title>Christian Winata</title>
</svelte:head>
<DarkMode class="fixed right-4 bottom-4 z-99 bg-gray-200 hover:bg-gray-300 dark:bg-gray-600" />
<div class="relative min-h-fit dark:bg-gray-700 dark:text-white">
	<NavigationBar {site} {menus} />
	<div
		bind:this={contentRef}
		onmousemove={updateCoordinate}
		role="article"
		class="radialTracker px-2 pt-18 pb-4 md:pt-24 lg:min-h-screen lg:pt-24"
	>
		{@render children()}
	</div>
</div>
<Footer class="h-20 bg-zinc-100 p-2 dark:bg-gray-800 dark:text-gray-100">
	<p class="h-full content-center text-center text-xs md:mr-14 md:text-right">
		Built with <a href="https://svelte.dev/" target="_blank" class={urlClass}>Svelte</a> using
		<a href="https://flowbite-svelte.com/" target="_blank" class={urlClass}>Flowbite</a>
		and
		<a href="https://tailwindcss.com/" target="_blank" class={urlClass}>Tailwind CSS</a>,<br/>coded on <a
			href="https://code.visualstudio.com/" target="_blank"
			class={urlClass}>Visual Studio Code</a
		>.
	</p>
</Footer>
