"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroSplitDoubleCarousel from "@/components/sections/hero/HeroSplitDoubleCarousel";
import TextAbout from "@/components/sections/about/TextAbout";
import FeatureCardTwelve from "@/components/sections/feature/FeatureCardTwelve";
import MetricCardSeven from "@/components/sections/metrics/MetricCardSeven";
import TestimonialCardTwelve from "@/components/sections/testimonial/TestimonialCardTwelve";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import { Zap, Shield, Sparkles, Award, Heart, Wrench, Lightbulb, PlugZap, Settings } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="compact"
      sizing="mediumLargeSizeLargeTitles"
      background="circleGradient"
      cardStyle="gradient-bordered"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="solid"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="ElektroServis"
          navItems={[
            { name: "O nás", id: "about" },
            { name: "Služby", id: "services" },
            { name: "Prečo my", id: "why-us" },
            { name: "Kontakt", id: "contact" }
          ]}
          button={{
            text: "Zavolať",            href: "tel:+421900123456"
          }}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitDoubleCarousel
          title="Spoľahlivé elektrikárske služby vo vašom meste"
          description="Profesionálne elektroinštalácie, opravy a montáže pre domácnosti aj firmy. Skúsená firma s kompletnými riešeniami pre všetky vaše elektro potreby."
          tag="Elektro Služby"
          tagIcon={Zap}
          tagAnimation="slide-up"
          background={{ variant: "glowing-orb" }}
          leftCarouselItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=nbwzpv&_wi=1",              imageAlt: "Elektrikár pri profesionálnej práci"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=x6dv6w",              imageAlt: "Moderná elektroinštalácia"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=rcwsf6",              imageAlt: "LED osvetlenie inštalácia"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=ufo9q7&_wi=1",              imageAlt: "Profesionálna elektro oprava"
            }
          ]}
          rightCarouselItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=ufo9q7&_wi=2",              imageAlt: "Oprava elektrických porúch"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=nmv3oz",              imageAlt: "Montáž zásuviek a vypínačov"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=avh839",              imageAlt: "Elektrický rozvádzač"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=nbwzpv&_wi=2",              imageAlt: "Profesionálny elektrikár"
            }
          ]}
          buttons={[
            { text: "Kontaktujte nás", href: "#contact" },
            { text: "Zavolajte", href: "tel:+421900123456" }
          ]}
          buttonAnimation="slide-up"
          carouselPosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          tag="O Nás"
          tagIcon={Shield}
          tagAnimation="blur-reveal"
          title="Sme skúsená elektrikárska firma, ktorá poskytuje kvalitné elektroinštalačné služby pre domácnosti aj firmy. Našou prioritou je bezpečnosť, spoľahlivosť a profesionálny prístup ku každému zákazníkovi. Máme dlhoročné skúsenosti v oblasti elektroinštalácií, opráv elektrických rozvodov, montáže osvetlenia a moderných riešení pre domácnosti aj podniky."
          useInvertedBackground={false}
          buttons={[
            { text: "Zistite viac", href: "#services" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTwelve
          title="Naše Služby"
          description="Poskytujeme kompletnú škálu elektrikárskych služieb pre všetky vaše potreby"
          tag="Služby"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          features={[
            {
              id: "installations",              label: "Elektroinštalácie",              title: "Kompletné elektroinštalácie v domoch, bytoch a firmách",              items: [
                "Nové elektroinštalácie",                "Rekonštrukcia rozvodov",                "Modernizácia elektrosystémov",                "Inštalácie podľa noriem"
              ]
            },
            {
              id: "lighting",              label: "Osvetlenie",              title: "Inštalácia moderného LED osvetlenia",              items: [
                "Montáž lustrov",                "LED systémy",                "Vonkajšie svetlá",                "Efektné osvetlenie"
              ]
            },
            {
              id: "outlets",              label: "Zásuvky",              title: "Montáž a výmena zásuviek a vypínačov",              items: [
                "Nové zásuvky",                "Výmena vypínačov",                "Bezpečné inštalácie",                "Modernizácia"
              ]
            },
            {
              id: "switchboards",              label: "Rozvádzače",              title: "Montáž a opravy elektrických rozvádzačov",              items: [
                "Inštalácia nových",                "Údržba a servis",                "Modernizácia",                "Bezpečnostné zlepšenia"
              ]
            }
          ]}
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={true}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="why-us" data-section="why-us">
        <MetricCardSeven
          title="Prečo si vybrať nás"
          description="Naše kľúčové výhody a prečo nám veria tisíce zákazníkov"
          tag="Naše Prednosti"
          tagIcon={Award}
          tagAnimation="slide-up"
          metrics={[
            {
              id: "1",              value: "5+",              title: "rokov skúsenosti",              items: [
                "Dlhoročná tradícia",                "Overené kvality",                "Školení špecialisti"
              ]
            },
            {
              id: "2",              value: "100%",              title: "spokojní zákazníci",              items: [
                "Profesionálny prístup",                "Kvalitná práca",                "Férové ceny"
              ]
            },
            {
              id: "3",              value: "24/7",              title: "dostupnosť",              items: [
                "Rýchla reakcia",                "Pohotovosť",                "Urgentné opravy"
              ]
            },
            {
              id: "4",              value: "100+",              title: "projektov",              items: [
                "Rozmanité projekty",                "Skúsenosť",                "Referenčné práce"
              ]
            }
          ]}
          animationType="scale-rotate"
          textboxLayout="default"
          useInvertedBackground={false}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwelve
          testimonials={[
            {
              id: "1",              name: "Peter Kováč",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=q28sq4&_wi=1",              imageAlt: "Peter Kováč"
            },
            {
              id: "2",              name: "Mária Horváthová",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=dsbeli&_wi=1",              imageAlt: "Mária Horváthová"
            },
            {
              id: "3",              name: "Ján Varga",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=pz41rb",              imageAlt: "Ján Varga"
            },
            {
              id: "4",              name: "Anna Balážová",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=z2y1pm",              imageAlt: "Anna Balážová"
            },
            {
              id: "5",              name: "Tomáš Molnár",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=q28sq4&_wi=2",              imageAlt: "Tomáš Molnár"
            },
            {
              id: "6",              name: "Elena Nováková",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=dsbeli&_wi=2",              imageAlt: "Elena Nováková"
            }
          ]}
          cardTitle="Viac ako 1000 spokojných zákazníkov nám dôveruje s ich elektrickými potrebami"
          cardTag="Pozrite si ich skúsenosti"
          cardTagIcon={Heart}
          cardAnimation="blur-reveal"
          useInvertedBackground={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Rýchla oprava v do 24 hodín – Napíšte nám teraz"
          description="Tatra Mont s.r.o. | Tel: +421 910 360 086 | Email: contact@tatramont.com\n\nRadi vám pomôžeme s akýmkoľvek elektro problémom alebo projektom. Vyplňte formulár a my vás kontaktujeme čo najskôr."
          inputs={[
            { name: "meno", type: "text", placeholder: "Vaše meno", required: true },
            { name: "telefon", type: "tel", placeholder: "Telefónne číslo", required: true },
            { name: "email", type: "email", placeholder: "E-mailová adresa", required: true }
          ]}
          textarea={{
            name: "sprava",            placeholder: "Popíšte váš problém alebo projekt...",            rows: 5,
            required: true
          }}
          useInvertedBackground={false}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=4evppq"
          imageAlt="Profesionálny elektrikár"
          mediaAnimation="slide-up"
          mediaPosition="right"
          buttonText="Objednať službu"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="ElektroServis"
          leftLink={{
            text: "Ochrana údajov",            href: "#"
          }}
          rightLink={{
            text: "Podmienky používania",            href: "#"
          }}
        />
      </div>
    </ThemeProvider>
  );
}