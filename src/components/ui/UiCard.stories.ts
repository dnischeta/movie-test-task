import type { Meta } from '@storybook/vue3'
import UiCard from './UiCard.vue'

const meta: Meta = {
  title: 'UI/Card',
  component: UiCard,
  args: {
    name: 'Title',
    description: 'Description some other text',
    poster: `./cover-placeholder.jpeg`,
    tags: [
      { text: 'Score', icon: 'star', color: 'success' },
      { text: 'Genre', icon: 'film', color: 'info' },
      { text: '1:56', icon: 'clock', color: 'accent' },
    ],
    to: '/',
  },
}

export default meta

export const Default = {}

export const DescriptionOverflow = {
  args: {
    description:
      'Description some other text some other text some other text some other text some other text some other text some other text some other text some other text some other text some other text some other text some other text some other text some other text some other text',
  },
}
