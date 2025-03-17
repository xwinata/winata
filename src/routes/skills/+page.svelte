<script lang="ts">
	import { Button, ButtonGroup, Card, Input, InputAddon, Label, Tooltip } from 'flowbite-svelte';
	import { FilterSolid, ObjectsColumnSolid, RectangleListSolid } from 'flowbite-svelte-icons';

	import { Id, Gb, Jp } from 'svelte-flags';

	let skillFilter = $state('');
	let viewMode = $state('grid');

	let tags = {
		'ci/cd': 'ci/cd',
		'event-driven': 'event-driven',
		'message-broker': 'message-broker',
		cloud: 'cloud',
		automation: 'automation',
		backend: 'backend',
		collaboration: 'collaboration',
		containerization: 'containerization',
		database: 'database',
		documentation: 'documentation',
		framework: 'framework',
		frontend: 'frontend',
		infra: 'infra',
		language: 'language',
		monitoring: 'monitoring',
		nosql: 'nosql',
		orm: 'orm',
		rdbms: 'rdbms',
		agile: 'agile',
		testing: 'testing',
		tool: 'tool'
	};

	let items = $derived(
		[
			{
				alt: 'golang',
				src: 'https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_Blue.svg',
				ref: 'https://go.dev/',
				tags: [tags.backend, tags.language]
			},
			{
				alt: 'gorm',
				src: 'https://gorm.io/gorm.svg',
				ref: 'https://gorm.io/',
				tags: [tags.backend, tags.database, tags.orm]
			},
			{
				alt: 'echo',
				src: 'https://echo.labstack.com/img/logo-light.svg',
				ref: 'https://echo.labstack.com/',
				tags: [tags.backend, tags.framework]
			},
			{
				alt: 'javascript',
				src: '/images/js.svg',
				ref: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
				tags: [tags.backend, tags.frontend, tags.language]
			},
			{
				alt: 'nodejs',
				src: 'https://nodejs.org/static/logos/nodejsStackedLight.svg',
				ref: 'https://nodejs.org',
				tags: [tags.backend]
			},
			{
				alt: 'typescript',
				src: '/images/typescript.svg',
				ref: 'https://www.typescriptlang.org/',
				tags: [tags.backend, tags.frontend, tags.language]
			},
			{
				alt: 'expressjs',
				src: '/images/expressjs.svg',
				ref: 'https://expressjs.com/',
				tags: [tags.backend, tags.framework]
			},
			{
				alt: 'nestjs',
				src: 'https://nestjs.com/logo-small-gradient.d792062c.svg',
				ref: 'https://nestjs.com/',
				tags: [tags.backend, tags.framework]
			},
			{
				alt: 'sequelize',
				src: 'https://sequelize.org/img/logo.svg',
				ref: 'https://sequelize.org/',
				tags: [tags.backend, tags.database, tags.orm]
			},
			{
				alt: 'drizzleORM',
				src: 'https://raw.githubusercontent.com/drizzle-team/drizzle-orm/main/misc/readme/logo-github-sq-dark.svg',
				ref: 'https://orm.drizzle.team/',
				tags: [tags.backend, tags.database, tags.orm]
			},
			{
				alt: 'typeORM',
				src: '/images/typeorm.svg',
				ref: 'https://typeorm.io/',
				tags: [tags.backend, tags.database, tags.orm]
			},
			{
				alt: 'jest',
				src: '/images/jest.svg',
				ref: 'https://jestjs.io/',
				tags: [tags.backend, tags.frontend, tags.testing, tags.automation]
			},
			{
				alt: 'python',
				src: 'https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg',
				ref: 'https://www.python.org/',
				tags: [tags.backend, tags.language]
			},
			{
				alt: 'robot',
				src: '/images/robot.svg',
				ref: 'https://robotframework.org/',
				tags: [tags.backend, tags.framework, tags.testing]
			},
			{
				alt: 'flask',
				src: '/images/flask.svg',
				ref: 'https://flask.palletsprojects.com/',
				tags: [tags.backend, tags.framework]
			},
			{
				alt: 'php',
				src: 'https://www.php.net/images/logos/new-php-logo.svg',
				ref: 'https://www.php.net/',
				tags: [tags.backend, tags.language]
			},
			{
				alt: 'drupal',
				src: '/images/drupal.svg',
				ref: 'https://drupal.org',
				tags: [tags.backend, tags.frontend, tags.framework]
			},
			{
				alt: 'openapi',
				src: '/images/openapi.svg',
				ref: 'https://www.openapis.org/',
				tags: [tags.backend, tags.documentation, tags.automation]
			},
			{
				alt: 'swagger',
				src: '/images/swagger.svg',
				ref: 'https://swagger.io/',
				tags: [tags.backend, tags.documentation, tags.tool]
			},
			{
				alt: 'openapi-generator',
				src: 'https://openapi-generator.tech/img/mono-logo.svg',
				ref: 'https://openapi-generator.tech/',
				tags: [tags.backend, tags.documentation, tags.automation]
			},
			{
				alt: 'postman',
				src: '/images/postman.svg',
				ref: 'https://www.postman.com/',
				tags: [tags.documentation, tags.tool, tags.automation]
			},
			{
				alt: 'react',
				src: 'images/react.svg',
				ref: 'https://react.dev/',
				tags: [tags.frontend, tags.framework]
			},
			{
				alt: 'vitejs',
				src: '/images/vitejs.svg',
				ref: 'https://vite.dev/',
				tags: [tags.frontend, tags.framework]
			},
			{
				alt: 'svelte',
				src: 'https://raw.githubusercontent.com/sveltejs/branding/refs/heads/master/svelte-logo.svg',
				ref: 'https://svelte.dev/',
				tags: [tags.frontend, tags.backend, tags.framework]
			},
			{
				alt: 'nextjs',
				src: '/images/nextjs.svg',
				ref: 'https://nextjs.org/',
				tags: [tags.frontend, tags.backend, tags.framework]
			},
			{
				alt: 'tailwind-css',
				src: 'https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg',
				ref: 'https://tailwindcss.com/',
				tags: [tags.frontend, tags.framework]
			},
			{
				alt: 'storybook',
				src: 'https://raw.githubusercontent.com/storybookjs/brand/main/icon/icon-storybook-default.svg',
				ref: 'https://storybook.js.org/',
				tags: [tags.frontend, tags.documentation]
			},
			{
				alt: 'mongodb',
				src: '/images/mongodb.svg',
				ref: 'https://www.mongodb.com/',
				tags: [tags.backend, tags.nosql, tags.database]
			},
			{
				alt: 'postgreSQL',
				src: '/images/postgres.svg',
				ref: 'https://www.postgresql.org/',
				tags: [tags.backend, tags.rdbms, tags.database]
			},
			{
				alt: 'redis',
				src: '/images/redis.svg',
				ref: 'https://redis.io/',
				tags: [tags.backend, tags.nosql, tags.database]
			},
			{
				alt: 'kafka',
				src: '/images/kafka.svg',
				ref: 'https://kafka.apache.org/',
				tags: [tags.backend, tags['event-driven'], tags.infra]
			},
			{
				alt: 'rabbitmq',
				src: 'https://www.rabbitmq.com/img/rabbitmq-logo-with-name.svg',
				ref: 'https://www.rabbitmq.com/',
				tags: [tags.backend, tags['event-driven'], tags.infra]
			},
			{
				alt: 'github',
				src: '/images/github.svg',
				ref: 'https://github.com/',
				tags: [tags.tool, tags.collaboration]
			},
			{
				alt: 'kubernetes',
				src: 'https://raw.githubusercontent.com/kubernetes/kubernetes/refs/heads/master/logo/logo.svg',
				ref: 'https://kubernetes.io/',
				tags: [tags.infra, tags.containerization]
			},
			{
				alt: 'docker',
				src: '/images/docker.svg',
				ref: 'https://www.docker.com/',
				tags: [tags.infra, tags.containerization]
			},
			{
				alt: 'buddy-works',
				src: '/images/buddy.svg',
				ref: 'https://buddy.works/',
				tags: [tags.infra, tags['ci/cd']]
			},
			{
				alt: 'argo-cd',
				src: '/images/argo-cd.svg',
				ref: 'https://argoproj.github.io/',
				tags: [tags.infra, tags['ci/cd']]
			},
			{
				alt: 'travis',
				src: '/images/travis.svg',
				ref: 'https://www.travis-ci.com/',
				tags: [tags.infra, tags['ci/cd']]
			},
			{
				alt: 'jenkins',
				src: '/images/jenkins.svg',
				ref: 'https://www.jenkins.io/',
				tags: [tags.infra, tags['ci/cd']]
			},
			{
				alt: 'datadog',
				src: '/images/datadog.svg',
				ref: 'https://www.datadoghq.com/',
				tags: [tags.infra, tags.monitoring, tags.automation]
			},
			{
				alt: 'sentry',
				src: '/images/sentry.svg',
				ref: 'https://sentry.io/',
				tags: [tags.infra, tags.monitoring, tags.automation]
			},
			{
				alt: 'jira',
				src: '/images/jira.svg',
				ref: 'https://www.atlassian.com/software/jira',
				tags: [tags.agile, tags.collaboration, tags.tool]
			},
			{
				alt: 'confluence',
				src: '/images/confluence.svg',
				ref: 'https://www.atlassian.com/software/confluence',
				tags: [tags.agile, tags.collaboration, tags.tool, tags.documentation]
			},
			{
				alt: 'retool',
				src: '/images/retool.svg',
				ref: 'https://retool.com/',
				tags: [tags.tool, tags.frontend, tags.backend]
			},
			{
				alt: 'amazon web service',
				src: '/images/aws.svg',
				ref: 'https://aws.amazon.com/',
				tags: [tags.infra, tags.cloud]
			},
			{
				alt: 'google cloud platform',
				src: '/images/gcp.svg',
				ref: 'https://cloud.google.com/',
				tags: [tags.infra, tags.cloud]
			}
		].filter((item) => {
			if (skillFilter === '') return true;
			return item.tags.some((tag) => tag.includes(skillFilter)) || item.alt.includes(skillFilter);
		})
	);
</script>

<div class="place-content-center md:flex lg:flex">
	<Card class="m-2 max-h-150 bg-gray-300 md:min-w-xl lg:min-w-2xl dark:bg-gray-600">
		<div class="flex">
			<p class="mb-8 flex-1 text-xl font-black dark:text-white">Tech Stacks & Tools i use</p>
			<div class="flex-1 text-right">
				<div class="text-right">
					<Button class="m-1 size-8" on:click={() => (viewMode = 'list')}
						><RectangleListSolid /></Button
					>
					<Tooltip defaultClass="">list view</Tooltip>
					<Button class="m-1 size-8" on:click={() => (viewMode = 'grid')}
						><ObjectsColumnSolid /></Button
					>
					<Tooltip defaultClass="">grid view</Tooltip>
				</div>
				<ButtonGroup class="mb-4">
					<InputAddon>
						<FilterSolid class="h-4 w-4 text-gray-500 dark:text-gray-400" />
					</InputAddon>
					<Tooltip defaultClass="">Filter</Tooltip>
					<Input id="skill-filter" placeholder="e.g: automation" bind:value={skillFilter} />
				</ButtonGroup>
			</div>
		</div>
		{#if viewMode === 'list'}
			<div class="snap-y overflow-y-scroll">
				{#each items as { ref, src, alt, tags }, index (index)}
					<a href={ref} target="_blank" class="m-2 flex snap-center">
						<img {src} {alt} class="mr-4 size-20" />
						<span>
							<p class="text-lg">{alt}</p>
							{#each tags as string[] as tag}
								<Button size="xs" color="blue" pill class="m-1">{tag}</Button>
							{/each}
						</span>
					</a>
				{/each}
			</div>
		{:else}
			<div
				class="grid-auto-flow grid snap-y grid-cols-3 gap-8 overflow-y-scroll md:grid-cols-4 lg:grid-cols-5"
			>
				{#each items as { ref, src, alt }, index (index)}
					<div class="snap-center">
						<a href={ref} target="_blank">
							<img {src} {alt} class="size-20" />
						</a>
						<Tooltip defaultClass="">
							{alt}
						</Tooltip>
					</div>
				{/each}
			</div>
		{/if}
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
