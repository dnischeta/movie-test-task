import type { Meta } from '@storybook/vue3'
import UiIcon from './UiIcon.vue'
import { ICONS } from './constants'

const meta: Meta<typeof UiIcon> = {
  title: 'UI/Icon',
  component: UiIcon,
  args: {
    name: 'film',
  },
  argTypes: {
    name: { control: 'select', options: ICONS },
  },
}

export default meta

export const Default = {}

export const md = {
  args: { size: 'md', name: 'film' },
}

export const xs = {
  args: { size: 'xs', name: 'film' },
}
