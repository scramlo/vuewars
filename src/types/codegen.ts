import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  documents: ['src/**/actions.ts'],
  overwrite: true,
  generates: {
    'src/types/graphql.ts': {
      plugins: [
        'typescript',
      ],
      config: {
        enumsAsConst: true,
      },
    }
  }
}
export default config