<script>
	import { Card } from 'flowbite-svelte';

	let commonCardStyles = [
		'bg-gray-100/50',
		'dark:bg-gray-800/50',
		'hover:text-primary-700',
		'hover:dark:text-sky-300',
		'drop-shadow-md',
		'justify-self-center',
		'md:m-8',
		'md:min-w-2xl'
	];

	let firstCardClass = [...commonCardStyles, 'm-2', 'p-4', 'lg:ml-32'].join(' ');

	let secondCardClass = [...commonCardStyles, 'm-2', 'p-4', 'lg:mr-32'].join(' ');

	let thirdCardClass = [
		...commonCardStyles,
		'p-4',
		'm-2',
		'text-center',
		'text-lg',
		'lg:min-w-4xl'
	].join(' ');
</script>

<div class="lg:grid lg:grid-flow-col lg:grid-rows-2">
	<Card img="/images/chris.svg" horizontal reverse class={firstCardClass} imgClass="lg:hidden">
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
	<div class="hidden content-center lg:row-span-2 lg:block">
		<img
			src="/images/chris.svg"
			alt=""
			class="hover:ring-primary-400 h-120 rounded-full ring-2 ring-gray-200 drop-shadow-lg hover:dark:ring-sky-300"
		/>
	</div>
</div>
<Card class={thirdCardClass}>
	When I'm not writing code, you'll probably find me spending time with my wife, or diving into a
	game while listening to musics. Music and gaming fuel my creativity, giving me a fresh perspective
	when I get back to building software. Whether it's keeping rhythm, discovering new sounds, or
	exploring virtual worlds, I enjoy the balance between technology and creativity.
</Card>
