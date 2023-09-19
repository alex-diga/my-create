import { blue, cyan, green, lightGreen, yellow, magenta } from 'kolorist'

export const FRAMEWORKS = [
  {
    name: 'vanilla',
    display: 'Vanilla',
    color: yellow,
    variants: [
      {
        name: 'vanilla-ts',
        display: 'TypeScript',
        color: blue
      },
      {
        name: 'vanilla',
        display: 'JavaScript',
        color: yellow
      }
    ]
  },
  {
    name: 'vue',
    display: 'Vue',
    color: green,
    variants: [
      {
        name: 'vue-ts',
        display: 'TypeScript',
        color: blue
      },
      {
        name: 'vue',
        display: 'JavaScript',
        color: yellow
      },
      {
        name: 'vue-elePlus',
        display: 'element-plus',
        color: magenta
      },
      {
        name: 'custom-create-vue',
        display: 'Customize with create-vue ↗',
        color: green,
        customCommand: 'npm create vue@latest TARGET_DIR'
      },
      {
        name: 'custom-nuxt',
        display: 'Nuxt ↗',
        color: lightGreen,
        customCommand: 'npm exec nuxi init TARGET_DIR'
      }
    ]
  },
  {
    name: 'react',
    display: 'React',
    color: cyan,
    variants: [
      {
        name: 'react-ts',
        display: 'TypeScript',
        color: blue
      },
      {
        name: 'react-swc-ts',
        display: 'TypeScript + SWC',
        color: blue
      },
      {
        name: 'react',
        display: 'JavaScript',
        color: yellow
      },
      {
        name: 'react-swc',
        display: 'JavaScript + SWC',
        color: yellow
      }
    ]
  }
]
