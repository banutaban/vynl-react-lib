import * as tinycolor from 'tinycolor2';

export const applyTheme = (ref, colorPalette, textColorPalette, config, inverse) => {
  Object.entries(colorPalette).forEach(([colorName, color]) => {
    const preset = inverse ? config[colorName][1] : config[colorName][0];
    Object.keys(preset).forEach(colorVariation => {
      ref.current.style.setProperty(
        `--color-${colorName}-${colorVariation}`,
        getColor(color, 1, colorVariation, preset),
      );
      ref.current.style.setProperty(
        `--color-${colorName}-${colorVariation}-20`,
        getColor(color, 0.2, colorVariation, preset),
      );
      ref.current.style.setProperty(
        `--color-${colorName}-${colorVariation}-40`,
        getColor(color, 0.4, colorVariation, preset),
      );
    });
  });

  Object.entries(textColorPalette).forEach(([colorName, color]) => {
    ref.current.style.setProperty(`--text-${colorName}`, color);
    ref.current.style.setProperty(`--text-${colorName}-50`, getColorwithOpacity(color, 0.5));
  });
};

export const getColor = (hex, alpha, colorVariation, preset) => {
  const hsl = tinycolor(hex).toHsl();
  hsl.l = preset[colorVariation].l;
  hsl.s = preset[colorVariation].s;
  hsl.a = alpha;

  return tinycolor(hsl).toRgbString();
};

export const getColorwithOpacity = (hex, alpha) => {
  const hsl = tinycolor(hex).toHsl();
  hsl.a = alpha;

  return tinycolor(hsl).toRgbString();
};
