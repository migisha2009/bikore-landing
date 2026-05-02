export const shouldReduceMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const getAnimationProps = (defaultProps: any) => {
  if (shouldReduceMotion()) {
    return {
      ...defaultProps,
      transition: { duration: 0 },
      whileHover: undefined,
      whileTap: undefined,
      animate: defaultProps.initial || {},
    };
  }
  return defaultProps;
};
