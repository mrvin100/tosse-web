import { AppContainer } from "@/components/global/appContainer";
import { TypographyP } from "@/components/ui/typographies";
import { ActiveLink } from "@/dossier/active-link";
import { footerLinks } from "@/dossier/app-links";
import { FooterLinks } from "@/dossier/app-link";
import { v4 as uuidv4 } from "uuid";
import { Spacer } from "./spacer";
import { Separator } from "../ui/separator";
import { LinkTypes } from "@/lib/link-type";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerNavigationList = footerLinks.map((colomnLinks) => (
    <FooterLink key={uuidv4()} data={colomnLinks} />
  ));

  return (
    <section className="bg-[#303030] py-[2rem]">
      <AppContainer className="text-center lg:text-left">
        <Spacer small />
        <div className="grid justify-center md:grid-cols-2 lg:grid-cols-4 gap-3">
          {footerNavigationList}
        </div>
        <Separator className="bg-gray-400 my-5 space-y-5" />
        <TypographyP className="text-gray-500">
          {`Copyright © ${currentYear} TOSSE Allrightsreserved.`}
        </TypographyP>
      </AppContainer>
    </section>
  );
};
interface footerLinkProps {
  data: FooterLinks;
}
export default Footer;

const FooterLink = ({ data }: footerLinkProps) => {
  const linkList = data.links.map((link) => (
    <div key={uuidv4()}>
      {link.type === LinkTypes.INTERNAL && (
        <ActiveLink key={uuidv4()} href={link.baseUrl}>
          {link.label}
        </ActiveLink>
      )}
      {link.type === LinkTypes.EXTERNAL && (
        <a href={link.baseUrl} target="_blank">
          {link.label}
        </a>
      )}
    </div>
  ));

  return (
    <div className="mb-4">
      <div className="pb-5 text-white">
        <TypographyP className="text-2xl">{data.label}</TypographyP>
      </div>
      <div className="space-y-4 text-gray-400">{linkList}</div>
    </div>
  );
};
