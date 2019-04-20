export const defaultColorPalette = {
  primary: '#412e9e',
  secondary: '#9e2e57',
  success: '#0d8267',
  info: '#2e4a9e',
  warning: '#af7618',
  danger: '#9e2e2e',
  grey: '#262626',
};

export const defaultTextColorPalette = {
  dark: '#3E3E3E',
  secondary: '#939090',
  disabled: '#939090',
  inverse: '#fff',
};

const defaultPreset = {
  50: { s: 0.55, l: 0.4 },
  40: { s: 0.5, l: 0.5 },
  30: { s: 0.6, l: 0.6 },
  20: { s: 0.8, l: 0.9 },
  10: { s: 0.82, l: 0.98 },
};

const defaultInversePreset = {
  50: { s: 0.55, l: 0.35 },
  40: { s: 0.59, l: 0.3 },
  30: { s: 0.64, l: 0.25 },
  20: { s: 0.66, l: 0.22 },
  10: { s: 0.8, l: 0.14 },
};

const accessibilityOnePreset = {
  50: { s: 0.82, l: 0.28 },
  40: { s: 0.79, l: 0.31 },
  30: { s: 0.75, l: 0.35 },
  20: { s: 0.8, l: 0.9 },
  10: { s: 0.82, l: 0.98 },
};

const accessibilityOneInversePreset = {
  50: { s: 0.82, l: 0.26 },
  40: { s: 0.84, l: 0.22 },
  30: { s: 0.8, l: 0.2 },
  20: { s: 0.92, l: 0.14 },
  10: { s: 0.92, l: 0.1 },
};

const accessibilityTwoPreset = {
  50: { s: 0.76, l: 0.39 },
  40: { s: 0.85, l: 0.41 },
  30: { s: 0.72, l: 0.44 },
  20: { s: 0.8, l: 0.9 },
  10: { s: 0.82, l: 0.98 },
};

const accessibilityTwoInversePreset = {
  50: { s: 0.82, l: 0.26 },
  40: { s: 0.84, l: 0.22 },
  30: { s: 0.8, l: 0.2 },
  20: { s: 0.92, l: 0.14 },
  10: { s: 0.92, l: 0.1 },
};

const monochrome = {
  50: { s: 0, l: 0.15 },
  40: { s: 0, l: 0.25 },
  30: { s: 0, l: 0.35 },
  20: { s: 0, l: 0.8 },
  10: { s: 0, l: 0.95 },
};

const monochromeInverse = {
  50: { s: 0, l: 0.95 },
  40: { s: 0, l: 0.8 },
  30: { s: 0, l: 0.35 },
  20: { s: 0, l: 0.25 },
  10: { s: 0, l: 0.15 },
};

export const themingConfig = {
  primary: [defaultPreset, defaultInversePreset],
  secondary: [defaultPreset, defaultInversePreset],
  success: [accessibilityOnePreset, accessibilityOneInversePreset],
  info: [defaultPreset, defaultInversePreset],
  warning: [accessibilityTwoPreset, accessibilityTwoInversePreset],
  danger: [defaultPreset, defaultInversePreset],
  grey: [monochrome, monochromeInverse],
};
