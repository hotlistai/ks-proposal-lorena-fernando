import Image from "next/image";
import type { ReactNode } from "react";
import { FadeIn } from "./fade-in";
import { VideoPlayer } from "./video-player";

const config = {
  coupleName: "Lorena + Fernando",
  eventDate: "December 12, 2026",
  venue: "Oak + Ivy",
  totalInvestment: "$7,950",
  deposit: "A 50% deposit secures the date",
  balanceDue: "The remaining balance is due 30 days prior to the event",
};

const BANNER_IMAGE = "https://www.knoxsignature.com/images/knox-press-banner.png";
const PREVIEW_VIDEO = "/videos/lorena-fernando-preview.mp4";
const PREVIEW_VIDEO_POSTER = "/videos/lorena-fernando-preview-poster.jpg";
const MIDDLE_VIDEO = "/videos/lorena-fernando-live-set.mp4";
const MIDDLE_VIDEO_POSTER = "/videos/lorena-fernando-live-set-poster.jpg";
const PRODUCTION_IMAGE =
  "https://raw.githubusercontent.com/hotlistai/anna-max-proposal/main/assets/Images/knox-signature-set-1.png";

const detailCards = [
  { label: "Date", value: config.eventDate },
  { label: "Ceremony", value: "Clean audio support + cueing" },
  { label: "Reception", value: "Oak + Ivy" },
  { label: "Performance", value: "DJ-led set with live saxophone integration" },
];

const ceremonyItems = [
  "Clean audio support for the ceremony",
  "Wireless microphones for key moments",
  "Recorded ceremony music and cueing",
  "A discreet setup designed to support the space without drawing attention to the production",
];

const cocktailItems = [
  "Live piano and saxophone performance",
  "A welcoming, elevated atmosphere as guests arrive and transition into the evening",
  "Thoughtful live music designed to feel social, memorable, and refined",
];

const dinnerItems = [
  "Thoughtful music selection that supports conversation and flow",
  "Emcee coverage for introductions, announcements, and key moments throughout the evening",
  "Seamless handling of toasts using wireless microphones",
  "Select live accents to complement important moments throughout the evening",
];

const danceItems = [
  "DJ-led set with live saxophone integration",
  "Energy builds intentionally throughout the night",
  "A packed dance floor that still feels polished and elevated",
];

const productionItems = [
  "Minimal white DJ command center",
  "Premium column-array sound system",
  "Architectural atmospheric lighting",
  "Wireless microphones for speeches and announcements",
  "Digital mixing for clarity and control",
];

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p
      className="mb-5 text-[11px] font-semibold uppercase"
      style={{ letterSpacing: "0.32em", color: "rgba(255,255,255,0.4)" }}
    >
      {children}
    </p>
  );
}

function StyledListItem({ children }: { children: ReactNode }) {
  return (
    <li className="relative mb-3 pl-7" style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.7 }}>
      <span className="absolute left-0 font-light" style={{ color: "rgba(255,255,255,0.25)" }}>
        {"\u2014"}
      </span>
      {children}
    </li>
  );
}

function CalloutBox({ children }: { children: ReactNode }) {
  return (
    <div
      className="my-10 px-7 py-7"
      style={{
        background: "rgba(255,255,255,0.025)",
        borderLeft: "2px solid rgba(255,255,255,0.15)",
      }}
    >
      <p className="m-0 italic font-light" style={{ color: "rgba(255,255,255,0.88)", lineHeight: 1.7 }}>
        {children}
      </p>
    </div>
  );
}

function Header() {
  return (
    <header>
      <div className="w-full">
        <Image
          src={BANNER_IMAGE}
          alt="Knox Signature"
          width={1920}
          height={600}
          priority
          className="block h-auto w-full"
        />
      </div>

      <div className="mx-auto max-w-[1040px] px-9 pb-10 pt-20 md:px-[72px]">
        <FadeIn>
          <p
            className="mb-4 text-[10px] font-semibold uppercase"
            style={{ letterSpacing: "4.5px", color: "rgba(255,255,255,0.4)" }}
          >
            Wedding Proposal
          </p>
          <h1
            className="text-balance font-extrabold"
            style={{
              fontSize: "clamp(36px, 5vw, 56px)",
              letterSpacing: "-0.025em",
              lineHeight: 1.05,
              color: "#ffffff",
            }}
          >
            The Knox Signature Wedding Experience
          </h1>
          <p
            className="mt-4 text-[11px] font-semibold uppercase"
            style={{ letterSpacing: "0.28em", color: "rgba(255,255,255,0.5)" }}
          >
            FOR {config.coupleName.toUpperCase()}
          </p>
        </FadeIn>

        <FadeIn delay={150}>
          <div
            className="mt-6 max-w-[60ch] space-y-5 font-light"
            style={{ fontSize: "clamp(17px, 1.6vw, 20px)", color: "rgba(255,255,255,0.72)", lineHeight: 1.7 }}
          >
            <p>Thank you for the conversation.</p>
            <p>
              It was a pleasure learning more about your wedding celebration on {config.eventDate}. We are excited to
              design an atmosphere that carries the day naturally from ceremony to cocktail hour and into reception at{" "}
              {config.venue}.
            </p>
            <p>Below is the proposed structure for your Knox Signature experience.</p>
          </div>
        </FadeIn>

        <FadeIn delay={250}>
          <div className="mt-12">
            <SectionLabel>Private Preview</SectionLabel>
            <VideoPlayer src={PREVIEW_VIDEO} poster={PREVIEW_VIDEO_POSTER} className="max-w-[760px]" />
          </div>
        </FadeIn>
      </div>
    </header>
  );
}

function EventSnapshot() {
  return (
    <section
      className="mx-auto max-w-[1040px] px-9 py-[72px] md:px-[72px]"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <FadeIn>
        <SectionLabel>Event Snapshot</SectionLabel>
      </FadeIn>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {detailCards.map((card, index) => (
          <FadeIn key={card.label} delay={index * 75}>
            <div
              className="h-full px-6 py-6"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <p
                className="text-[11px] font-semibold uppercase"
                style={{ letterSpacing: "0.24em", color: "rgba(255,255,255,0.35)" }}
              >
                {card.label}
              </p>
              <p
                className="mt-4 font-medium"
                style={{ color: "rgba(255,255,255,0.9)", lineHeight: 1.55, fontSize: "16px" }}
              >
                {card.value}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function ArrivalSection() {
  return (
    <section
      className="mx-auto max-w-[1040px] px-9 py-[72px] md:px-[72px]"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <FadeIn>
        <SectionLabel>The Arrival</SectionLabel>
        <h2
          className="font-bold"
          style={{
            fontSize: "clamp(28px, 3.5vw, 42px)",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            color: "#ffffff",
          }}
        >
          Ceremony Atmosphere
        </h2>
      </FadeIn>

      <FadeIn delay={100}>
        <p className="mt-6 max-w-[64ch] font-light" style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.75 }}>
          The day unfolds across multiple spaces, with each part of the experience designed to feel cohesive,
          elevated, and intentional as guests move from one setting to the next.
        </p>
      </FadeIn>

      <FadeIn delay={175}>
        <ul className="mt-8 max-w-[64ch] list-none p-0">
          {ceremonyItems.map((item) => (
            <StyledListItem key={item}>{item}</StyledListItem>
          ))}
        </ul>
      </FadeIn>

      <FadeIn delay={250}>
        <CalloutBox>
          Everything is designed to look as polished as it sounds and to complement each part of the day as the
          celebration moves from one location to the next.
        </CalloutBox>
      </FadeIn>
    </section>
  );
}

function MiddleVideoSection() {
  return (
    <section
      className="mx-auto max-w-[1040px] px-9 py-[72px] md:px-[72px]"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <FadeIn>
        <VideoPlayer src={MIDDLE_VIDEO} poster={MIDDLE_VIDEO_POSTER} halfWidth className="max-w-[560px]" />
      </FadeIn>
    </section>
  );
}

function CocktailHourSection() {
  return (
    <section
      className="mx-auto max-w-[1040px] px-9 py-[72px] md:px-[72px]"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <FadeIn>
        <SectionLabel>The Transition</SectionLabel>
        <h2
          className="font-bold"
          style={{
            fontSize: "clamp(28px, 3.5vw, 42px)",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            color: "#ffffff",
          }}
        >
          Cocktail Hour Atmosphere
        </h2>
      </FadeIn>

      <FadeIn delay={100}>
        <p
          className="mt-4 text-[11px] font-semibold uppercase"
          style={{ letterSpacing: "0.28em", color: "rgba(255,255,255,0.45)" }}
        >
          {config.venue}
        </p>
      </FadeIn>

      <FadeIn delay={175}>
        <p className="mt-8 max-w-[64ch] font-light" style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.75 }}>
          As guests move from the ceremony into the evening, the atmosphere shifts into a welcoming live performance
          that feels elevated, social, and naturally connected to the rest of the celebration.
        </p>
      </FadeIn>

      <FadeIn delay={250}>
        <ul className="mt-8 max-w-[64ch] list-none p-0">
          {cocktailItems.map((item) => (
            <StyledListItem key={item}>{item}</StyledListItem>
          ))}
        </ul>
      </FadeIn>
    </section>
  );
}

function ProductionImageSection() {
  return (
    <section
      className="mx-auto max-w-[1040px] px-9 py-[72px] md:px-[72px]"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <FadeIn>
        <div className="mx-auto max-w-[820px]">
          <Image
            src={PRODUCTION_IMAGE}
            alt="Knox Signature production setup with minimal white DJ command center and architectural lighting"
            width={1040}
            height={600}
            className="block h-auto w-full"
            style={{ border: "1px solid rgba(255,255,255,0.06)", opacity: 0.96 }}
            unoptimized
          />
        </div>
      </FadeIn>
    </section>
  );
}

function ReceptionSection() {
  return (
    <section
      className="mx-auto max-w-[1040px] px-9 py-[72px] md:px-[72px]"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <FadeIn>
        <SectionLabel>The Celebration</SectionLabel>
        <h2
          className="font-bold"
          style={{
            fontSize: "clamp(28px, 3.5vw, 42px)",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            color: "#ffffff",
          }}
        >
          Reception Experience
        </h2>
      </FadeIn>

      <FadeIn delay={100}>
        <p className="mt-6 max-w-[64ch] font-light" style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.75 }}>
          As the evening unfolds, the experience transitions naturally into a DJ-led reception with live saxophone
          integration.
        </p>
      </FadeIn>

      <FadeIn delay={175}>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div
            className="h-full px-7 py-7"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <SectionLabel>Dinner & Key Moments</SectionLabel>
            <ul className="my-0 list-none p-0">
              {dinnerItems.map((item) => (
                <StyledListItem key={item}>{item}</StyledListItem>
              ))}
            </ul>
          </div>
          <div
            className="h-full px-7 py-7"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <SectionLabel>Dance</SectionLabel>
            <ul className="my-0 list-none p-0">
              {danceItems.map((item) => (
                <StyledListItem key={item}>{item}</StyledListItem>
              ))}
            </ul>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={250}>
        <div className="mt-12">
          <SectionLabel>Production & Design</SectionLabel>
          <ul className="my-0 max-w-[64ch] list-none p-0">
            {productionItems.map((item) => (
              <StyledListItem key={item}>{item}</StyledListItem>
            ))}
          </ul>
        </div>
      </FadeIn>

      <FadeIn delay={325}>
        <p className="mt-10 max-w-[64ch] font-light" style={{ color: "rgba(255,255,255,0.58)", lineHeight: 1.75 }}>
          We are also more than happy to join for a site visit prior to the wedding day and will schedule a music
          planning session as the date gets closer to ensure everything feels smooth and fully aligned with the flow of
          the evening.
        </p>
      </FadeIn>
    </section>
  );
}

function TimingSection() {
  return (
    <section
      className="mx-auto max-w-[1040px] px-9 py-[72px] md:px-[72px]"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <FadeIn>
        <SectionLabel>Timing</SectionLabel>
        <p className="max-w-[64ch] font-light" style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.75 }}>
          Coverage includes ceremony, cocktail hour, and reception.
        </p>
        <p className="mt-5 max-w-[64ch] font-light" style={{ color: "rgba(255,255,255,0.58)", lineHeight: 1.75 }}>
          This structure allows the experience to build naturally throughout the day with intention, flow, and energy.
        </p>
      </FadeIn>
    </section>
  );
}

function TotalInvestmentSection() {
  return (
    <section
      id="investment"
      className="mx-auto max-w-[1040px] px-9 py-[72px] md:px-[72px]"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <FadeIn>
        <SectionLabel>Complete Wedding Atmosphere</SectionLabel>
        <h2
          className="font-bold"
          style={{
            fontSize: "clamp(28px, 3.5vw, 42px)",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            color: "#ffffff",
          }}
        >
          The Arrival + The Build
        </h2>
      </FadeIn>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.35fr_0.85fr]">
        <FadeIn delay={100}>
          <div
            className="h-full px-8 py-8"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <p
              className="text-[11px] font-semibold uppercase"
              style={{ letterSpacing: "0.28em", color: "rgba(255,255,255,0.35)" }}
            >
              Total Investment
            </p>
            <p
              className="mt-5 m-0 font-semibold"
              style={{ fontSize: "clamp(42px, 6vw, 72px)", letterSpacing: "-0.04em", lineHeight: 1, color: "#ffffff" }}
            >
              {config.totalInvestment}
            </p>
            <p className="mt-5 m-0 max-w-[48ch] font-light" style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.7 }}>
              Ceremony, cocktail hour, and reception as one complete atmosphere.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={175}>
          <div
            className="h-full px-8 py-8"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <p
              className="text-[11px] font-semibold uppercase"
              style={{ letterSpacing: "0.28em", color: "rgba(255,255,255,0.35)" }}
            >
              Terms
            </p>
            <dl className="mt-6 flex flex-col gap-5">
              <div>
                <dt
                  className="text-[13px] font-medium uppercase"
                  style={{ letterSpacing: "0.12em", color: "rgba(255,255,255,0.4)" }}
                >
                  Deposit
                </dt>
                <dd className="mt-2 m-0 font-light" style={{ color: "rgba(255,255,255,0.88)", lineHeight: 1.7 }}>
                  {config.deposit}
                </dd>
              </div>
              <div>
                <dt
                  className="text-[13px] font-medium uppercase"
                  style={{ letterSpacing: "0.12em", color: "rgba(255,255,255,0.4)" }}
                >
                  Balance
                </dt>
                <dd className="mt-2 m-0 font-light" style={{ color: "rgba(255,255,255,0.88)", lineHeight: 1.7 }}>
                  {config.balanceDue}
                </dd>
              </div>
            </dl>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={250}>
        <CalloutBox>
          We approach every wedding with the same goal: to create an atmosphere your guests remember long after the
          night ends.
        </CalloutBox>
      </FadeIn>
    </section>
  );
}

function ProposalFooter() {
  return (
    <footer
      className="mx-auto max-w-[1040px] px-9 pb-20 pt-14 md:px-[72px]"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <FadeIn>
        <p
          className="mb-4 text-[10px] font-semibold uppercase"
          style={{ letterSpacing: "4px", color: "rgba(255,255,255,0.35)" }}
        >
          Knox Signature
        </p>
        <p className="mb-6 font-light" style={{ fontSize: "15px", color: "rgba(255,255,255,0.45)" }}>
          Wedding atmospheres built with intention, restraint, and energy.
        </p>
        <div className="flex flex-col gap-1 text-[14px]" style={{ color: "rgba(255,255,255,0.45)", lineHeight: 2 }}>
          <p>Based in Dallas. Available worldwide.</p>
          <p>
            <a href="mailto:hello@knoxsignature.com" className="footer-link pb-px transition-all duration-200">
              hello@knoxsignature.com
            </a>
          </p>
          <p>
            <a
              href="https://knoxsignature.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link pb-px transition-all duration-200"
            >
              knoxsignature.com
            </a>
          </p>
        </div>
        <p className="mt-10 text-[12px] font-light" style={{ color: "rgba(255,255,255,0.25)" }}>
          This proposal is confidential and intended solely for {config.coupleName}.
        </p>
      </FadeIn>
    </footer>
  );
}

export function LorenaFernandoProposalPage() {
  return (
    <>
      <Header />
      <EventSnapshot />
      <ArrivalSection />
      <MiddleVideoSection />
      <CocktailHourSection />
      <ProductionImageSection />
      <ReceptionSection />
      <TimingSection />
      <TotalInvestmentSection />
      <ProposalFooter />
    </>
  );
}
