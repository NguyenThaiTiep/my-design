import { theme } from "../configs";

const spaces = theme.space;
const colors = theme.colors;

type Variant<T> = {
  [key in keyof T]: any;
};
export const generateVariants = <T extends {}>(
  cssKeys: string[],
  values: T
): Variant<T> => {
  const variants: ObjectKeys = {};

  for (const value of Object.keys(values)) {
    const variant: ObjectKeys = {};
    for (const cssKey of cssKeys) {
      variant[cssKey] = `$${value}`;
    }
    variants[value] = variant;
  }

  return variants as Variant<T>;
};

export const baseVariants = {
  backgroundColor: generateVariants(["backgroundColor"], colors),
  pr: generateVariants(["paddingRight"], spaces),
  pl: generateVariants(["paddingLeft"], spaces),
  pt: generateVariants(["paddingTop"], spaces),
  pb: generateVariants(["marginBottom"], spaces),
  px: generateVariants(["px"], spaces),
  py: generateVariants(["py"], spaces),
  mr: generateVariants(["marginRight"], spaces),
  ml: generateVariants(["marginLeft"], spaces),
  mt: generateVariants(["marginTop"], spaces),
  mb: generateVariants(["marginBottom"], spaces),
  mx: generateVariants(["mx"], spaces),
  my: generateVariants(["py"], spaces),
};
