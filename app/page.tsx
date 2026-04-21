import type { Metadata } from "next";
import { LorenaFernandoProposalPage } from "@/components/knox/lorena-fernando-proposal-page";

export const metadata: Metadata = {
  title: "Knox Signature - Lorena + Fernando Proposal",
  description:
    "A Knox Signature wedding proposal for Lorena + Fernando covering ceremony, cocktail hour, reception, production, and full atmosphere.",
  openGraph: {
    title: "Knox Signature - Lorena + Fernando Proposal",
    description: "Ceremony, cocktail hour, and reception atmosphere designed for Lorena + Fernando.",
    images: ["/ks-social-cover.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Knox Signature - Lorena + Fernando Proposal",
    description: "Ceremony, cocktail hour, and reception atmosphere designed for Lorena + Fernando.",
    images: ["/ks-social-cover.png"],
  },
};

export default function Page() {
  return (
    <main>
      <LorenaFernandoProposalPage />
    </main>
  );
}
