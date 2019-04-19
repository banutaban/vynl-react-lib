import * as tinycolor from 'tinycolor2';

export const applyTheme = (ref, colorPalette, preset) => {
  Object.entries(colorPalette).forEach(color => {
    Object.keys(preset).forEach(colorVariation => {
      ref.current.style.setProperty(
        `--color-${color[0]}-${colorVariation}`,
        getColor(color[1], 1, colorVariation, preset)
      );
      ref.current.style.setProperty(
        `--color-${color[0]}-${colorVariation}-20`,
        getColor(color[1], 0.2, colorVariation, preset)
      );
      ref.current.style.setProperty(
        `--color-${color[0]}-${colorVariation}-40`,
        getColor(color[1], 0.4, colorVariation, preset)
      );
    });
  });
};

export const getColor = (hex, alpha, colorVariation, preset) => {
  const hsl = tinycolor(hex).toHsl();
  hsl.l = preset[colorVariation].l;
  hsl.s = preset[colorVariation].s;
  hsl.a = alpha;

  return tinycolor(hsl).toRgbString();
};
