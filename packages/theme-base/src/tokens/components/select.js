module.exports = {
  width: { value: '100%' },
  minWidth: { value: '8rem' },
  transitionProperty: { value: 'background-color' },
  transitionDuration: { value: '{time.transition.medium.value}' },
  //variation
  filled: {
    borderColor: { value: '{colors.transparent.value}' },
    backgroundColor: { value: '{colors.background.secondary.value}' },
    _hover: {
      backgroundColor: { value: '{colors.background.tertiary.value}' },
    },
  },
  flushed: {
    borderTop: { value: 'none' },
    borderLeft: { value: 'none' },
    borderRight: { value: 'none' },
    borderRadius: { value: '0' },
    _focus: {
      boxShadow: { value: '0 4px 2px -2px hsl(220, 50%, 50%)' },
    },
  },
  // wrappers
  wrapper: {
    display: { value: 'block' },
    position: { value: 'relative' },
    cursor: { value: 'pointer' },
  },
  iconWrapper: {
    position: { value: 'absolute' },
    height: { value: '50%' },
    top: { value: '25%' },
    right: { value: '{space.medium.value}' },
    pointerEvents: { value: 'none' },
  },
};
