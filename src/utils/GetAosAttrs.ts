export type AosOptions = {
  animation?: string;
  easing?: string;
  duration?: number;
  anchorPlacement?: string;
};

export function getAosAttrs(opts: AosOptions = {}) {
  const {
    animation = 'zoom-in',
    easing = 'ease-in-out',
    duration = 1000,
    anchorPlacement = 'center-bottom',
  } = opts;

  return {
    'data-aos': animation,
    'data-aos-easing': easing,
    'data-aos-duration': String(duration),
    'data-aos-anchor-placement': anchorPlacement,
  };
}