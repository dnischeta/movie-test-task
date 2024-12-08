import type { Meta } from '@storybook/vue3'
import UiTag from './UiTag.vue'
import { COLORS, ICONS } from './constants'

const meta: Meta = {
  title: 'UI/Tag',
  component: UiTag,
  argTypes: {
    icon: { control: 'select', options: ICONS },
    color: { control: 'select', options: COLORS },
  },
  args: {
    default: 'Text',
  },
}

export default meta

export const Default = {}

export const WithIcon = {
  args: {
    icon: 'star',
  },
}

export const Danger = {
  args: {
    color: 'danger',
  },
}
