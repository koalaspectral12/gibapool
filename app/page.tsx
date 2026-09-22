import { Header, MobileCtaBar, WhatsAppFloat } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Divisions } from '@/components/Divisions';
import { Services } from '@/components/Services';
import { Store } from '@/components/Store';
import { Technical } from '@/components/Technical';
import { Portfolio } from '@/components/Portfolio';
import { Testimonials } from '@/components/Testimonials';
import { Faq } from '@/components/Faq';
import { Contact } from '@/components/Contact';
import { FinalCta } from '@/components/FinalCta';
import { Footer, InstagramCta } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand-900 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Ir para o conteúdo
      </a>

      <Header />

      <main>
        <Hero />
        <Divisions />
        <Services />
        <Store />
        <Technical />
        <Portfolio />
        <Testimonials />
        <Faq />
        <InstagramCta />
        <Contact />
        <FinalCta />
      </main>

      <Footer />
      <WhatsAppFloat />
      <MobileCtaBar />
    </>
  );
}
