import type { Meta } from '@storybook/vue3'

const meta: Meta = {
  title: 'UI/Typography',
  render: () => ({
    template: `
        <div>
            <h1>H1</h1>
            <h2>H2</h2>
            <h3>H3</h3>
            <h4>H4</h4>
            <h5>H5</h5>
            <h6>H6</h6>
            <span>Text</span>
        </div>
        `,
  }),
}

export default meta

export const Default = {}
