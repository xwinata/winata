<script lang="ts">
	import { GithubSolid, LinkedinSolid, MailBoxSolid } from 'flowbite-svelte-icons';

	let linkHoverClass = 'hover:text-primary-700 hover:dark:text-sky-500';
	let socClass = `${linkHoverClass} m-2 size-10 hover:text-primary-700`;
</script>

<div class="flex lg:min-h-[calc(100vh-20vh)]">
	<div class="m-auto text-center text-gray-600 dark:text-white">
		<p class="text-5xl">you can send me email through:</p>
		<a class={linkHoverClass} href="mailto:christian.double.u@gmail.com">
			<i class="text-xl">christian.double.u@gmail.com</i>
			<MailBoxSolid class="size-40 place-self-center" style="transition-property: none;"/>
		</a>
		<p class="text-2xl">or check my other references below</p>
		<div class="flex place-content-center">
			<a href="https://github.com/xwinata"><GithubSolid class={socClass} /></a>
			<a href="https://www.linkedin.com/in/christian-winata-180a7993/"
				><LinkedinSolid class={socClass} /></a
			>
		</div>
	</div>
</div>
