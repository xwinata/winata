<script lang="ts">
	import { Card, Tooltip } from 'flowbite-svelte';

	import { Id, Gb, Jp } from 'svelte-flags';

	let items = [
		{
			alt: 'golang',
			src: 'https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_Blue.svg',
			ref: 'https://go.dev/'
		},
		{
			alt: 'gorm',
			src: 'https://gorm.io/gorm.svg',
			ref: 'https://gorm.io/'
		},
		{
			alt: 'javascript',
			src: '/images/js.svg',
			ref: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
		},
		{
			alt: 'nodejs',
			src: 'https://nodejs.org/static/logos/nodejsStackedLight.svg',
			ref: 'https://nodejs.org'
		},
		{
			alt: 'typescript',
			src: '/images/typescript.svg',
			ref: 'https://www.typescriptlang.org/'
		},
		{
			alt: 'sequelize',
			src: 'https://sequelize.org/img/logo.svg',
			ref: 'https://sequelize.org/'
		},
		{
			alt: 'jest',
			src: '/images/jest.svg',
			ref: 'https://jestjs.io/'
		},
		{
			alt: 'python',
			src: 'https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg',
			ref: 'https://www.python.org/'
		},
		{
			alt: 'robot',
			src: '/images/robot.svg',
			ref: 'https://robotframework.org/'
		},
		{
			alt: 'php',
			src: 'https://www.php.net/images/logos/new-php-logo.svg',
			ref: 'https://www.php.net/'
		},
		{
			alt: 'drupal',
			src: '/images/drupal.svg',
			ref: 'https://drupal.org'
		},
		{
			alt: 'openapi',
			src: '/images/openapi.svg',
			ref: 'https://www.openapis.org/'
		},
		{
			alt: 'swagger',
			src: '/images/swagger.svg',
			ref: 'https://swagger.io/'
		},
		{
			alt: 'openapi-generator',
			src: 'https://openapi-generator.tech/img/mono-logo.svg',
			ref: 'https://openapi-generator.tech/'
		},
		{
			alt: 'postman',
			src: '/images/postman.svg',
			ref: 'https://www.postman.com/'
		},
		{
			alt: 'react',
			src: 'images/react.svg',
			ref: 'https://react.dev/'
		},
		{
			alt: 'vitejs',
			src: '/images/vitejs.svg',
			ref: 'https://vite.dev/'
		},
		{
			alt: 'svelte',
			src: 'https://raw.githubusercontent.com/sveltejs/branding/refs/heads/master/svelte-logo.svg',
			ref: 'https://svelte.dev/'
		},
		{
			alt: 'tailwind-css',
			src: 'https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg',
			ref: 'https://tailwindcss.com/'
		},
		{
			alt: 'storybook',
			src: 'https://raw.githubusercontent.com/storybookjs/brand/main/icon/icon-storybook-default.svg',
			ref: 'https://storybook.js.org/'
		},
		{
			alt: 'mongodb',
			src: '/images/mongodb.svg',
			ref: 'https://www.mongodb.com/'
		},
		{
			alt: 'postgreSQL',
			src: '/images/postgres.svg',
			ref: 'https://www.postgresql.org/'
		},
		{
			alt: 'redis',
			src: '/images/redis.svg',
			ref: 'https://redis.io/'
		},
		{
			alt: 'kafka',
			src: '/images/kafka.svg',
			ref: 'https://kafka.apache.org/'
		},
		{
			alt: 'rabbitmq',
			src: 'https://www.rabbitmq.com/img/rabbitmq-logo-with-name.svg',
			ref: 'https://www.rabbitmq.com/'
		},
		{
			alt: 'github',
			src: '/images/github.svg',
			ref: 'https://github.com/'
		},
		{
			alt: 'kubernetes',
			src: 'https://raw.githubusercontent.com/kubernetes/kubernetes/refs/heads/master/logo/logo.svg',
			ref: 'https://kubernetes.io/'
		},
		{
			alt: 'docker',
			src: '/images/docker.svg',
			ref: 'https://www.docker.com/'
		},
		{
			alt: 'travis',
			src: '/images/travis.svg',
			ref: 'https://www.travis-ci.com/'
		},
		{
			alt: 'jenkins',
			src: '/images/jenkins.svg',
			ref: 'https://www.jenkins.io/'
		},
		{
			alt: 'datadog',
			src: '/images/datadog.svg',
			ref: 'https://www.datadoghq.com/'
		},
		{
			alt: 'sentry',
			src: '/images/sentry.svg',
			ref: 'https://sentry.io/'
		},
		{
			alt: 'retool',
			src: '/images/retool.svg',
			ref: 'https://retool.com/'
		}
	];
</script>

<div class="place-self-center lg:flex">
	<Card class="m-2 bg-gray-300 lg:min-w-2xl dark:bg-gray-600">
		<p class="mb-8 text-xl font-black dark:text-white">Tech Stacks & Tools i use</p>
		<div class="grid-auto-flow grid grid-cols-3 gap-8 lg:grid-cols-5">
			{#each items as { ref, src, alt }, index (index)}
				<div>
					<a href={ref} target="_blank">
						<img {src} {alt} class="size-20" />
					</a>
					<Tooltip>
						{alt}
					</Tooltip>
				</div>
			{/each}
		</div>
	</Card>
	<Card class="m-2 h-fit">
		<p class="mb-8 text-xl font-black dark:text-white">Spoken Languages</p>
		<div class="flex">
			<Id class="mr-4" /> Indonesia - Native
		</div>
		<div class="flex">
			<Gb class="mr-4" /> English - Professional
		</div>
		<div class="flex">
			<Jp class="mr-4" /> Japanese - Beginner
		</div>
	</Card>
</div>
