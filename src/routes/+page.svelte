<script>
	import { Card } from 'flowbite-svelte';
</script>

<div class="lg:grid lg:grid-flow-col lg:grid-rows-2">
	<Card
		img="/images/chris.svg"
		horizontal
		reverse
		class="lg:m-8 lg:min-w-2xl bg-gray-100 p-4 drop-shadow-md hover:scale-102 lg:justify-self-end lg:mr-32"
		imgClass="lg:hidden"
	>
		<p class="mb-2 text-4xl text-center">Hi! i'm Christian Winata</p>
		<p class="text-center text-lg">
			a software engineer specializing in building scalable and high-performance applications that
			drive real impact. I believe in leveraging technology to solve complex problems and create
			meaningful solutions that benefit businesses and society.
		</p>
	</Card>
	<Card class="lg:m-8 lg:min-w-2xl bg-gray-100 p-4 drop-shadow-md hover:scale-102 lg:ml-32">
		<p class="text-center text-lg">
			I thrive in Agile Scrum environments, where collaboration, adaptability, and iterative
			development drive success. As a full-stack developer with a strong backend focus, my expertise
			lies in building efficient backend architectures, optimizing performance, and ensuring
			seamless integration between frontend and backend systems. I take a structured approach to
			problem-solving, emphasizing clean code, maintainability, and continuous improvement to
			deliver impactful and reliable solutions.
		</p>
	</Card>
	<img src="/images/chris.svg" alt="" class="ring-12 ring-gray-200 scale-75 rounded-full lg:row-span-2 hidden lg:block" />
</div>