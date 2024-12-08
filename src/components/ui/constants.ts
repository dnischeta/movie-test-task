export const ICONS = ['film', 'clock', 'star'] as const

export type IconName = (typeof ICONS)[number]

export const COLORS = ['success', 'info', 'accent', 'danger'] as const

export type ColorName = (typeof COLORS)[number]
