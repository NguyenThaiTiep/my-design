import { Image } from "./Image";
import logoHeader from "../assets/logo-header.png";
import logoFooter from "../assets/logo-footer.png";
import { styled } from "../configs";

const StyledLogo = styled(Image, {
  maxHeight: "100%",
});

export const AppLogo = ({ ...props }) => (
  <StyledLogo src={logoHeader} {...props} />
);
export const FooterLogo = ({ ...props }) => (
  <StyledLogo {...props} src={logoFooter} width={100} />
);
