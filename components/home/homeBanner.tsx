import { TypographyH1, TypographyH4 } from "@/components/ui/typographies";
import { FC } from "react";
import { AppContainer } from "../global/appContainer";
import { Spacer } from "../global/spacer";
import Header from "../global/header";
import { Button } from "../ui/button";
import Link from "next/link";

export const HomeBanner: FC = () => {
  return (
    <section className="home-banner relative z-0">
      <div className="bg-black/50 -z-50 absolute inset-0" />
      <Header transparentBg />
      <AppContainer className="pb-20">
        <Spacer />
        <TypographyH1 className="mx-auto xl:mx-0 max-w-3xl text-primary-foreground">
          Acheter du <span className="text-primary">crédit</span> et des{" "}
          <span className="text-primary">forfaits</span> sans frais, quel que
          soit le <span className="text-primary">réseau mobile</span>
        </TypographyH1>
        <Spacer tooSmall />
        <TypographyH4 className="mx-auto xl:mx-0 max-w-3xl text-primary-foreground">
          Vous pouvez acheter du crédit et des forfaits quel que soit le réseau
          mobile (Tigo, Airtel, Salam) via votre mode de paiement préféré (Tigo
          ou Airtel) sans frais supplémentaire.
        </TypographyH4>
        <Spacer small />
		<div className="mx-auto xl:mx-0 max-w-3xl">
		<Button className="drop-shadow-sm mr-4 md:text-xl">Acheter du crédit</Button>
    <Link href="/forfaits">
		<Button variant={'link'} className="drop-shadow-sm text-primary-foreground md:text-xl">Forfaits</Button>
    </Link>
		</div>
		<Spacer large />
      </AppContainer>
    </section>
  );
};
