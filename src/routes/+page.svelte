<script>
	import { Card } from 'flowbite-svelte';

	let firstCardClass = [
		"bg-gray-100",
		"m-2",
		"p-4",
		"drop-shadow-md",
		"hover:scale-102",
		"justify-self-center",
		"md:m-8",
		"md:min-w-2xl",
		"lg:ml-32",
	].join(' ');

	let secondCardClass = [
		"bg-gray-100",
		"m-2",
		"p-4",
		"drop-shadow-md",
		"hover:scale-102",
		"justify-self-center",
		"md:m-8",
		"md:min-w-2xl",
		"lg:mr-32",
	].join(' ');

	let thirdCardClass = [
		"bg-gray-100",
		"p-4",
		"m-2",
		"text-center",
		"text-lg",
		"drop-shadow-md",
		"hover:scale-102",
		"justify-self-center",
		"md:min-w-2xl",
		"md:m-8",
		"lg:min-w-4xl"
	].join(' ');
</script>

<div class="lg:grid lg:grid-flow-col lg:grid-rows-2">
	<Card
		img="/images/chris.svg"
		horizontal
		reverse
		class={firstCardClass}
		imgClass="lg:hidden"
	>
		<p class="mb-2 text-center text-4xl">Hi! i'm Christian Winata</p>
		<p class="text-center text-lg">
			a software engineer specializing in building scalable and high-performance applications that
			drive real impact. I believe in leveraging technology to solve complex problems and create
			meaningful solutions that benefit businesses and society.
		</p>
	</Card>
	<Card class={secondCardClass}>
		<p class="text-center text-lg">
			I thrive in Agile Scrum environments, where collaboration, adaptability, and iterative
			development drive success. As a full-stack developer with a strong backend focus, my expertise
			lies in building efficient backend architectures, optimizing performance, and ensuring
			seamless integration between frontend and backend systems. I take a structured approach to
			problem-solving, emphasizing clean code, maintainability, and continuous improvement to
			deliver impactful and reliable solutions.
		</p>
	</Card>
	<div class="hidden lg:block lg:row-span-2 content-center">
		<img
			src="/images/chris.svg"
			alt=""
			class="rounded-full ring-2 h-120"
		/>
	</div>
</div>
<Card
	class={thirdCardClass}
>
	When I'm not writing code, you'll probably find me spending time with my wife, or diving into a
	game. Music and gaming fuel my creativity, giving me a fresh perspective when I get back to
	building software. Whether it's keeping rhythm, discovering new sounds, or exploring virtual
	worlds, I enjoy the balance between technology and creativity.
</Card>
