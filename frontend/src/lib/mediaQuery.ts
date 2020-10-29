export const mediaQuery = (maxWidth: number): string => `
  @media (max-width: ${maxWidth}px)
`;

const media: { [key: string]: string } = {
  xxlarge: mediaQuery(1920),
  xlarge: mediaQuery(1440),
  large: mediaQuery(1200),
  medium: mediaQuery(1024),
  small: mediaQuery(768),
  xsmall: mediaQuery(375),
};

export default media;
