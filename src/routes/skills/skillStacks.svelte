<script context="module">
	const tags = {
		'a/b-testing': 'a/b-testing',
		'ci/cd': 'ci/cd',
		'event-driven': 'event-driven',
		'feature-flags': 'feature-flags',
		'message-broker': 'message-broker',
		agile: 'agile',
		api: 'api',
		automation: 'automation',
		backend: 'backend',
		cli: 'cli',
		cloud: 'cloud',
		collaboration: 'collaboration',
		containerization: 'containerization',
		database: 'database',
    debugging: 'debugging',
		devops: 'devops',
		documentation: 'documentation',
		formatter: 'formatter',
		framework: 'framework',
		frontend: 'frontend',
		golang: 'golang',
    git: 'git',
		graph: 'graph',
		infra: 'infra',
		javascript: 'javascript/typescript',
		language: 'language',
		microservice: 'microservice',
		monitoring: 'observability/monitoring',
		nosql: 'nosql',
		orm: 'orm',
		php: 'php',
		python: 'python',
		rdbms: 'rdbms',
		rpc: 'rpc',
		security: 'security',
		testing: 'testing',
		tool: 'tool'
	};

	export const stacks = [
		{
			alt: 'golang',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg',
			ref: 'https://go.dev/',
			tags: [tags.backend, tags.language]
		},
		{
			alt: 'gorm',
			src: 'https://gorm.io/gorm.svg',
			ref: 'https://gorm.io/',
			tags: [tags.backend, tags.database, tags.orm, tags.golang]
		},
		{
			alt: 'echo',
			src: 'https://echo.labstack.com/img/logo-light.svg',
			ref: 'https://echo.labstack.com/',
			tags: [tags.backend, tags.framework, tags.api, tags.golang]
		},
		{
			alt: 'fiber',
			src: 'https://gofiber.io/assets/images/logo.svg',
			ref: 'https://gofiber.io/',
			tags: [tags.backend, tags.framework, tags.api, tags.golang]
		},
		{
			alt: 'grpc',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grpc/grpc-original.svg',
			ref: 'https://grpc.io/',
			tags: [tags.backend, tags.rpc, tags.golang]
		},
		{
			alt: 'javascript',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
			ref: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
			tags: [tags.backend, tags.frontend, tags.language]
		},
		{
			alt: 'nodejs',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg',
			ref: 'https://nodejs.org',
			tags: [tags.backend, tags.cli, tags.javascript]
		},
		{
			alt: 'typescript',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
			ref: 'https://www.typescriptlang.org/',
			tags: [tags.backend, tags.frontend, tags.language]
		},
		{
			alt: 'expressjs',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
			ref: 'https://expressjs.com/',
			tags: [tags.backend, tags.framework, tags.api, tags.javascript]
		},
		{
			alt: 'nestjs',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg',
			ref: 'https://nestjs.com/',
			tags: [tags.backend, tags.framework, tags.api, tags.javascript]
		},
		{
			alt: 'npm',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg',
			ref: 'https://www.npmjs.com/',
			tags: [tags.backend, tags.frontend, tags.cli, tags.javascript]
		},
		{
			alt: 'sequelize',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sequelize/sequelize-original.svg',
			ref: 'https://sequelize.org/',
			tags: [tags.backend, tags.database, tags.orm, tags.javascript]
		},
		{
			alt: 'mongoose',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg',
			ref: 'https://mongoosejs.com/',
			tags: [tags.backend, tags.database, tags.orm, tags.javascript]
		},
		{
			alt: 'drizzleORM',
			src: 'https://raw.githubusercontent.com/drizzle-team/drizzle-orm/main/misc/readme/logo-github-sq-dark.svg',
			ref: 'https://orm.drizzle.team/',
			tags: [tags.backend, tags.database, tags.orm, tags.javascript]
		},
		{
			alt: 'typeORM',
			src: '/images/typeorm.svg',
			ref: 'https://typeorm.io/',
			tags: [tags.backend, tags.database, tags.orm, tags.javascript]
		},
		{
			alt: 'jest',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg',
			ref: 'https://jestjs.io/',
			tags: [tags.backend, tags.frontend, tags.testing, tags.automation, tags.javascript]
		},
		{
			alt: 'babel',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/babel/babel-original.svg',
			ref: 'https://babeljs.io/',
			tags: [tags.backend, tags.frontend, tags.formatter, tags.javascript]
		},
		{
			alt: 'eslint',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eslint/eslint-original.svg',
			ref: 'https://eslint.org/',
			tags: [tags.backend, tags.frontend, tags.formatter, tags.javascript]
		},
		{
			alt: 'python',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
			ref: 'https://www.python.org/',
			tags: [tags.backend, tags.language]
		},
		{
			alt: 'robot',
			src: '/images/robot.svg',
			ref: 'https://robotframework.org/',
			tags: [tags.backend, tags.framework, tags.testing, tags.python]
		},
		{
			alt: 'flask',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg',
			ref: 'https://flask.palletsprojects.com/',
			tags: [tags.backend, tags.framework, tags.api, tags.python]
		},
		{
			alt: 'php',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
			ref: 'https://www.php.net/',
			tags: [tags.backend, tags.language]
		},
		{
			alt: 'drupal',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/drupal/drupal-original.svg',
			ref: 'https://drupal.org',
			tags: [tags.backend, tags.frontend, tags.framework, tags.api, tags.php]
		},
		{
			alt: 'composer',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/composer/composer-original.svg',
			ref: 'https://getcomposer.org/',
			tags: [tags.backend, tags.frontend, tags.cli, tags.php]
		},
		{
			alt: 'openapi',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openapi/openapi-original.svg',
			ref: 'https://www.openapis.org/',
			tags: [tags.backend, tags.documentation, tags.automation, tags.api]
		},
		{
			alt: 'swagger',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg',
			ref: 'https://swagger.io/',
			tags: [tags.backend, tags.documentation, tags.tool, tags.api]
		},
		{
			alt: 'openapi-generator',
			src: 'https://openapi-generator.tech/img/mono-logo.svg',
			ref: 'https://openapi-generator.tech/',
			tags: [tags.backend, tags.documentation, tags.automation, tags.api]
		},
		{
			alt: 'postman',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
			ref: 'https://www.postman.com/',
			tags: [tags.documentation, tags.tool, tags.automation, tags.api]
		},
		{
			alt: 'oauth',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oauth/oauth-original.svg',
			ref: 'https://oauth.net/',
			tags: [tags.backend, tags.frontend, tags.security]
		},
		{
			alt: 'react',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
			ref: 'https://react.dev/',
			tags: [tags.frontend, tags.framework, tags.javascript]
		},
		{
			alt: 'vitejs',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg',
			ref: 'https://vite.dev/',
			tags: [tags.frontend, tags.framework, tags.javascript]
		},
		{
			alt: 'svelte',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg',
			ref: 'https://svelte.dev/',
			tags: [tags.frontend, tags.backend, tags.framework, tags.javascript]
		},
		{
			alt: 'nextjs',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
			ref: 'https://nextjs.org/',
			tags: [tags.frontend, tags.backend, tags.framework, tags.api, tags.javascript]
		},
		{
			alt: 'redux',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg',
			ref: 'https://redux.js.org/',
			tags: [tags.frontend, tags.javascript]
		},
		{
			alt: 'tailwind-css',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
			ref: 'https://tailwindcss.com/',
			tags: [tags.frontend, tags.framework]
		},
		{
			alt: 'storybook',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/storybook/storybook-original.svg',
			ref: 'https://storybook.js.org/',
			tags: [tags.frontend, tags.documentation, tags.javascript]
		},
		{
			alt: 'mongodb',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
			ref: 'https://www.mongodb.com/',
			tags: [tags.backend, tags.nosql, tags.database]
		},
		{
			alt: 'postgreSQL',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
			ref: 'https://www.postgresql.org/',
			tags: [tags.backend, tags.rdbms, tags.database]
		},
		{
			alt: 'mySQL',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
			ref: 'https://www.mysql.com/',
			tags: [tags.backend, tags.rdbms, tags.database]
		},
		{
			alt: 'neo4j',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/neo4j/neo4j-original.svg',
			ref: 'https://neo4j.com/',
			tags: [tags.backend, tags.database, tags.graph]
		},
		{
			alt: 'redis',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg',
			ref: 'https://redis.io/',
			tags: [tags.backend, tags.nosql, tags.database]
		},
		{
			alt: 'kafka',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg',
			ref: 'https://kafka.apache.org/',
			tags: [tags.backend, tags['event-driven'], tags.infra, tags.microservice]
		},
		{
			alt: 'rabbitmq',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg',
			ref: 'https://www.rabbitmq.com/',
			tags: [tags.backend, tags['event-driven'], tags.infra, tags.microservice]
		},
		{
			alt: 'github',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
			ref: 'https://github.com/',
			tags: [tags.tool, tags.git, tags.collaboration]
		},
    {
      alt: 'gitlab',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg',
      ref: 'https://about.gitlab.com/',
			tags: [tags.tool, tags.git, tags.collaboration]
    },
		{
			alt: 'kong',
			src: '/images/kong.svg',
			ref: 'https://konghq.com/',
			tags: [tags.infra, tags.tool, tags.security, tags.api, tags.microservice]
		},
		{
			alt: 'kubernetes',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg',
			ref: 'https://kubernetes.io/',
			tags: [tags.infra, tags.containerization, tags.devops]
		},
		{
			alt: 'docker',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
			ref: 'https://www.docker.com/',
			tags: [tags.infra, tags.containerization, tags.devops]
		},
		{
			alt: 'buddy-works',
			src: '/images/buddy.svg',
			ref: 'https://buddy.works/',
			tags: [tags.infra, tags['ci/cd']]
		},
		{
			alt: 'argo-cd',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/argocd/argocd-original.svg',
			ref: 'https://argoproj.github.io/',
			tags: [tags.infra, tags['ci/cd']]
		},
		{
			alt: 'travis',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/travis/travis-original.svg',
			ref: 'https://www.travis-ci.com/',
			tags: [tags.infra, tags['ci/cd']]
		},
		{
			alt: 'jenkins',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg',
			ref: 'https://www.jenkins.io/',
			tags: [tags.infra, tags['ci/cd']]
		},
		{
			alt: 'elastic-search',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/elasticsearch/elasticsearch-original.svg',
			ref: 'https://www.elastic.co/elasticsearch',
			tags: [tags.automation, tags.debugging, tags.devops, tags.infra, tags.monitoring, tags.tool]
		},
		{
			alt: 'splunk',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/splunk/splunk-original-wordmark.svg',
			ref: 'https://www.splunk.com/',
			tags: [tags.automation, tags.debugging, tags.devops, tags.infra, tags.monitoring, tags.tool]
		},
    {
      alt: 'grafana',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg',
      ref: 'https://grafana.com/',
			tags: [tags.automation, tags.debugging, tags.devops, tags.infra, tags.monitoring, tags.tool]
    },
		{
			alt: 'datadog',
			src: '/images/datadog.svg',
			ref: 'https://www.datadoghq.com/',
			tags: [tags.automation, tags.debugging, tags.devops, tags.infra, tags.monitoring, tags.tool]
		},
		{
			alt: 'sentry',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sentry/sentry-original.svg',
			ref: 'https://sentry.io/',
			tags: [tags.automation, tags.debugging, tags.devops, tags.infra, tags.monitoring, tags.tool]
		},
		{
			alt: 'sonarqube',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sonarqube/sonarqube-original.svg',
			ref: 'https://www.sonarsource.com/products/sonarqube/',
			tags: [tags.testing, tags.tool]
		},
		{
			alt: 'jira',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg',
			ref: 'https://www.atlassian.com/software/jira',
			tags: [tags.agile, tags.collaboration, tags.tool]
		},
		{
			alt: 'confluence',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/confluence/confluence-original.svg',
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
			alt: 'launchdarkly',
			src: '/images/launchdarkly.svg',
			ref: 'https://launchdarkly.com/',
			tags: [tags.tool, tags['a/b-testing'], tags['feature-flags']]
		},
		{
			alt: 'amazon web service',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
			ref: 'https://aws.amazon.com/',
			tags: [tags.infra, tags.cloud, tags.devops]
		},
		{
			alt: 'google cloud platform',
			src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg',
			ref: 'https://cloud.google.com/',
			tags: [tags.infra, tags.cloud, tags.devops]
		}
	];
</script>
