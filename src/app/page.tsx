"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const NAV_LINKS = [
  { label: "How We Transform Spaces", href: "#services" },
  { label: "Our Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
];

const SERVICES = [
  {
    icon: "✦",
    title: "Deep Clean Revival",
    desc: "Every nook, every corner — we restore your home to a state of immaculate freshness. A deep clean that leaves no trace behind.",
  },
  {
    icon: "✦",
    title: "Eco-Friendly Refresh",
    desc: "Plant-based, pet-safe products that clean deeply without compromise. Good for your home, gentle on the planet.",
  },
  {
    icon: "✦",
    title: "Organized & Polished",
    desc: "Beyond clean — we bring order. Neatly arranged spaces that feel lighter, calmer, and instantly more livable.",
  },
  {
    icon: "✦",
    title: "Premium Finishes",
    desc: "The details matter. From streak-free glass to perfectly made beds, we obsess over the finishing touches.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "You Reach Out",
    desc: "Tell us what needs refreshing. A quick chat and we'll tailor a plan that fits your space and schedule.",
  },
  {
    step: "02",
    title: "We Arrive",
    desc: "Our team shows up fully equipped — on time, in uniform, ready to transform your space from top to bottom.",
  },
  {
    step: "03",
    title: "Your Space Feels New",
    desc: "We don't leave until every surface gleams. Breathe in that fresh feeling — your home, reborn.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Vrithy made our home feel brand new. The attention to detail was remarkable — things I'd stopped noticing are sparkling again.",
    name: "Sarah M.",
    location: "Koramangala, Bangalore",
  },
  {
    quote:
      "The most thorough cleaning we've ever had. The eco-friendly products are a huge plus — our son has allergies and there was zero irritation.",
    name: "James & Priya R.",
    location: "Indiranagar, Bangalore",
  },
  {
    quote:
      "I booked a one-time refresh and now I'm a monthly regular. Worth every rupee. My flat has never looked better.",
    name: "Ananya K.",
    location: "Whitefield, Bangalore",
  },
];

function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return progress;
}

function useScrollVisibility(threshold = 0.1) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * threshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return visible;
}

function FreshnessMeter({ progress }: { progress: number }) {
  const pct = Math.round(progress * 100);
  return (
    <>
      <div className="freshness-meter" style={{ width: `${pct}%` }} />
      <div className="fixed top-3 right-4 z-[101] text-[11px] font-semibold tracking-wider uppercase text-fresh/70 select-none">
        {pct}% Fresh
      </div>
    </>
  );
}

function WhatsAppCTA({ visible }: { visible: boolean }) {
  return (
    <a
      href="https://wa.me/919999999999?text=Hi%20Vrithy!%20I'd%20love%20to%20refresh%20my%20space."
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-cta flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-white shadow-lg hover:bg-[#22c35e] transition-all ${
        visible ? "visible-cta" : "hidden-cta"
      }`}
    >
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      <span className="text-sm font-semibold whitespace-nowrap">
        Need your space refreshed?
      </span>
    </a>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-stone-200/60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Vrithy Solutions"
            width={120}
            height={36}
            className="h-9 w-auto"
            priority
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-stone-600 hover:text-fresh transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-fresh px-5 py-2.5 text-sm font-semibold text-white hover:bg-fresh-dark transition-colors"
          >
            Refresh My Space
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-stone-600"
          aria-label="Menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-white border-b border-stone-200 px-6 pb-6 pt-2 space-y-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-sm font-medium text-stone-600 hover:text-fresh"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="inline-block rounded-full bg-fresh px-5 py-2.5 text-sm font-semibold text-white"
          >
            Refresh My Space
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/80" />

      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <span className="inline-block rounded-full bg-white/80 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold tracking-wider text-fresh shadow-sm uppercase mb-6">
          Vrithy Solutions — Premium Home Cleaning
        </span>
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.1] tracking-tight text-stone-900">
          Refresh
          <br />
          <span className="text-fresh">My Space</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-stone-600">
          Premium home cleaning that brings the sparkle back. Thoughtful, thorough, and
          refreshingly different.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-fresh px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-fresh/25 hover:bg-fresh-dark hover:shadow-xl hover:shadow-fresh/30 transition-all"
          >
            Book Your Refresh
          </a>
          <a
            href="#services"
            className="rounded-full border border-stone-300 bg-white/70 backdrop-blur-sm px-8 py-3.5 text-base font-semibold text-stone-700 hover:border-fresh/40 hover:text-fresh transition-all"
          >
            See How We Work
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="h-6 w-6 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

function Services() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={ref}
      className={`relative py-28 px-6 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="blob blob-4" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] text-fresh uppercase">
            What We Offer
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-stone-900 mt-3">
            How We Transform Spaces
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-stone-500">
            Every service is tailored to your space. No shortcuts, no compromises — just
            a home that feels renewed.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((svc) => (
            <div
              key={svc.title}
              className="card-hover rounded-2xl bg-white border border-stone-200/70 p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-fresh/10 text-fresh text-lg">
                {svc.icon}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-stone-900">{svc.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-500">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="process"
      ref={ref}
      className={`relative py-28 px-6 bg-stone-50/70 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] text-fresh uppercase">
            How It Works
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-stone-900 mt-3">
            From Tired to Transformed
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-stone-500">
            Three simple steps to a space that feels brand new.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {PROCESS.map((step) => (
            <div key={step.step} className="relative text-center md:text-left">
              <span className="font-display text-7xl font-bold text-fresh/10 select-none">
                {step.step}
              </span>
              <h3 className="mt-2 text-xl font-semibold text-stone-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-500">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="testimonials"
      ref={ref}
      className={`relative py-28 px-6 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] text-fresh uppercase">
            Real Stories
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-stone-900 mt-3">
            Loved by Our Community
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl bg-white border border-stone-200/70 p-6"
            >
              <div className="flex gap-1 text-warm mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm leading-relaxed text-stone-600 italic">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-4 pt-4 border-t border-stone-100">
                <p className="text-sm font-semibold text-stone-900">{t.name}</p>
                <p className="text-xs text-stone-400">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={ref}
      className={`relative py-28 px-6 bg-fresh transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
          Get In Touch
        </span>
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-3">
          Let&rsquo;s Make It Fresh Again
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-gold/80">
          Ready to fall in love with your space all over again? Reach out and we&rsquo;ll
          take care of the rest.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/919999999999?text=Hi%20Vrithy!%20I'd%20love%20to%20refresh%20my%20space."
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gold px-8 py-3.5 text-base font-semibold text-fresh-dark hover:bg-[#e6c000] transition-all shadow-lg"
          >
            Chat on WhatsApp
          </a>
          <a
            href="mailto:hello@vrithy.in"
            className="rounded-full border border-gold/50 px-8 py-3.5 text-base font-semibold text-gold hover:bg-gold/10 transition-all"
          >
            hello@vrithy.in
          </a>
        </div>

        <p className="mt-8 text-sm text-gold/60">
          Typically respond within 30 minutes &mdash; often faster.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-stone-900 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <a href="#" className="block">
              <Image
                src="/logo.png"
                alt="Vrithy Solutions"
                width={120}
                height={36}
                className="h-8 w-auto brightness-0 invert"
              />
            </a>
            <p className="mt-1 text-sm text-stone-400">
              Premium home cleaning. Bangalore.
            </p>
          </div>
          <div className="flex items-center gap-6 text-sm text-stone-400">
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#process" className="hover:text-white transition-colors">
              Process
            </a>
            <a href="#testimonials" className="hover:text-white transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-stone-800 text-center text-xs text-stone-500">
          &copy; {new Date().getFullYear()} Vrithy Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  const progress = useScrollProgress();
  const waVisible = useScrollVisibility(0.8);

  return (
    <>
      <FreshnessMeter progress={progress} />
      <WhatsAppCTA visible={waVisible} />

      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
