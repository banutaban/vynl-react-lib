import * as tinycolor from 'tinycolor2';

export const applyTheme = (ref, colorPalette, config, inverse) => {
  Object.entries(colorPalette).forEach(([colorName, color]) => {
    const preset = inverse ? config[colorName][1] : config[colorName][0];
    const textPreset = config[colorName][2];
    Object.keys(preset).forEach(colorVariation => {
      ref.current.style.setProperty(
        `--color-${colorName}-${colorVariation}`,
        getColor(color, 1, colorVariation, preset)
      );
      ref.current.style.setProperty(
        `--color-${colorName}-${colorVariation}-20`,
        getColor(color, 0.2, colorVariation, preset)
      );
      ref.current.style.setProperty(
        `--color-${colorName}-${colorVariation}-40`,
        getColor(color, 0.4, colorVariation, preset)
      );
      ref.current.style.setProperty(
        `--text-color-${colorName}-${colorVariation}`,
        getColor(color, 1, colorVariation, textPreset)
      );
      ref.current.style.setProperty(
        `--text-color-${colorName}-${colorVariation}-20`,
        getColor(color, 0.2, colorVariation, textPreset)
      );
      ref.current.style.setProperty(
        `--text-color-${colorName}-${colorVariation}-40`,
        getColor(color, 0.4, colorVariation, textPreset)
      );
      /*console.log(`--color-${colorName}-${colorVariation}: ${getColor(color, 1, colorVariation, preset)};`);
      console.log(`--color-${colorName}-${colorVariation}-20: ${getColor(color, 0.2, colorVariation, preset)};`);
      console.log(`--color-${colorName}-${colorVariation}-40: ${getColor(color, 0.4, colorVariation, preset)};`);
      console.log(`--text-color-${colorName}-${colorVariation}: ${getColor(color, 1, colorVariation, textPreset)};`);
      console.log(`--text-color-${colorName}-${colorVariation}-20: ${getColor(color, 0.2, colorVariation, textPreset)};`);
      console.log(`--text-color-${colorName}-${colorVariation}-40: ${getColor(color, 0.4, colorVariation, textPreset)};`);*/
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
