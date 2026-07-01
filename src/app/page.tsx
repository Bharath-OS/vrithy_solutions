"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Why Vrithy", href: "#why-vrithy" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
];

const SERVICES = [
  { title: "Residential Cleaning", desc: "Making everyday homes feel fresh again." },
  { title: "Apartment Cleaning", desc: "Compact spaces cleaned with care and precision." },
  { title: "Commercial Cleaning", desc: "Professional cleaning for offices and businesses." },
  { title: "Specialized Services", desc: "Deep cleans, post renovation, move in and out." },
  { title: "Water Tank Cleaning", desc: "Clean water starts with a clean tank." },
  { title: "Sofa Shampoo Washing", desc: "Stains and odours gone. Your sofa, revived." },
  { title: "Interlock Cleaning", desc: "Driveways and walkways restored and refreshed." },
];

const PROCESS_STEPS = [
  { step: "01", title: "Contact Us", desc: "Reach out and tell us what you need." },
  { step: "02", title: "We Inspect", desc: "We visit, assess, and plan the perfect clean." },
  { step: "03", title: "Professional Cleaning", desc: "Our team arrives fully equipped and gets to work." },
  { step: "04", title: "Final Check", desc: "We inspect every corner before we leave." },
  { step: "05", title: "Enjoy Your Refreshed Space", desc: "Walk into a home that feels brand new." },
];

const WHY_CHOOSE = [
  { title: "Every Corner Matters", desc: "We clean beyond what the eye notices." },
  { title: "We Bring Everything", desc: "No equipment required from you." },
  { title: "Hassle-Free Experience", desc: "One call. One visit. Complete cleaning." },
  { title: "Professional Equipment", desc: "Industrial-grade tools for better results." },
  { title: "Local Team", desc: "Built in Kozhikode. Serving Kozhikode with pride." },
  { title: "Satisfaction Comes First", desc: "We aren't done until you're happy." },
];

const TESTIMONIALS = [
  {
    quote: "Vrithy made our home feel brand new. The attention to detail was remarkable.",
    name: "Sarah M.",
    location: "Koramangala, Bangalore",
  },
  {
    quote: "The most thorough cleaning we have ever had. The eco-friendly products are a huge plus.",
    name: "James & Priya R.",
    location: "Indiranagar, Bangalore",
  },
  {
    quote: "I booked a one time refresh and now I am a monthly regular. Worth every rupee.",
    name: "Ananya K.",
    location: "Whitefield, Bangalore",
  },
];

const STATS = [
  { number: "20+", label: "Spaces Cleaned" },
  { number: "100%", label: "Dedication" },
  { number: "Same Day", label: "Response" },
  { number: "Kozhikode", label: "Local Team" },
];

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

function WhatsAppCTA({ visible }: { visible: boolean }) {
  return (
    <a
      href="https://wa.me/919495804501?text=Hi%20Vrithy!%20I'd%20love%20to%20refresh%20my%20space."
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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-stone-200/60 shadow-sm"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Vrithy Solutions"
            width={160}
            height={48}
            className="h-12 w-auto"
            priority
          />
        </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-text hover:text-fresh transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-gray-text"
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
        <div className="md:hidden bg-white border-b border-border-light px-6 pb-6 pt-2 space-y-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-sm font-medium text-gray-text hover:text-fresh"
            >
              {link.label}
            </a>
          ))}
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
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30" />

      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block rounded-full bg-white/15 backdrop-blur-md px-4 py-1.5 text-xs font-semibold tracking-wider text-white/90 border border-white/20 uppercase mb-6"
        >
          Kozhikode&rsquo;s Trusted Cleaning Service
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.1] tracking-tight text-white [text-shadow:0_4px_24px_rgba(0,0,0,0.35)]"
        >
          Transform Your Space,<br />
          <span className="text-gold">Not Your Schedule.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-white/85 [text-shadow:0_2px_12px_rgba(0,0,0,0.25)]"
        >
          Professional deep cleaning for homes, apartments, offices and commercial spaces across Kozhikode.
          We bring the people, equipment and attention to detail so you simply enjoy the results.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="rounded-full gradient-fresh px-8 py-3.5 text-base font-bold text-white shadow-xl shadow-black/25 hover:shadow-2xl hover:scale-[1.02] transition-all"
          >
            Refresh My Space
          </a>
          <a
            href="#services"
            className="rounded-full border border-white/40 bg-white/10 backdrop-blur-md px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-black/15 hover:bg-white/20 hover:scale-[1.02] transition-all"
          >
            Watch the Transformation
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/70"
        >
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            Professional Team
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            Advanced Equipment
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            Hassle-Free Service
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            Based in Kozhikode
          </span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <svg className="h-5 w-5 text-white/40 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}

function VrithyDifference() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="aspect-[4/3] rounded-3xl bg-bg-light flex items-center justify-center overflow-hidden"
          >
            <div className="w-full h-full bg-gradient-to-br from-fresh/10 to-fresh/5 flex items-center justify-center">
              <span className="text-fresh/20 text-8xl font-heading font-extrabold">V</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs font-semibold tracking-[0.2em] text-fresh uppercase">
              The Vrithy Difference
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-dark-text mt-3">
              More Than Cleaning. We Restore Spaces.
            </h2>
            <p className="mt-6 text-gray-text leading-relaxed">
              Started by hardworking teenagers. Built on dedication. Every project is treated with care.
            </p>
            <p className="mt-4 text-gray-text leading-relaxed">
              Cleaning isnt just about removing dirt. Its about restoring comfort. When we step out, you walk into a space that feels lighter, fresher, and truly yours again.
            </p>
            <div className="mt-8 flex gap-6">
              <div>
                <span className="font-number text-2xl font-bold text-fresh">50+</span>
                <p className="text-xs text-gray-text mt-1">Cities Covered</p>
              </div>
              <div>
                <span className="font-number text-2xl font-bold text-fresh">3+</span>
                <p className="text-xs text-gray-text mt-1">Years of Trust</p>
              </div>
              <div>
                <span className="font-number text-2xl font-bold text-fresh">100%</span>
                <p className="text-xs text-gray-text mt-1">Dedication</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-28 px-6"
    >
      <div className="blob blob-4" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] text-fresh uppercase">
            What We Offer
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-dark-text mt-3">
            How We Transform Spaces
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-gray-text">
            Every service is tailored to your space. No shortcuts, no compromises. Just a home that feels renewed.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="service-card rounded-3xl bg-white border border-border-light overflow-hidden group cursor-pointer"
            >
              <div className="aspect-[4/3] bg-bg-light flex items-center justify-center text-gray-text/40 text-sm overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-fresh/5 to-fresh/10 flex items-center justify-center">
                  <span className="text-fresh/30 text-6xl font-heading font-extrabold">
                    {svc.title.charAt(0)}
                  </span>
                </div>
              </div>
              <div className="p-5 border-t border-border-light">
                <h3 className="text-base font-bold text-dark-text">{svc.title}</h3>
                <p className="mt-1.5 text-sm text-gray-text leading-relaxed">{svc.desc}</p>
                <span className="mt-3 inline-flex items-center text-xs font-semibold text-fresh gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More
                  <span>&rarr;</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" ref={ref} className="relative py-28 px-6 bg-bg-light">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] text-fresh uppercase">
            Our Cleaning Process
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-dark-text mt-3">
            From Tired to Transformed
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-gray-text">
            Five simple steps to a space that feels brand new.
          </p>
        </div>

        <div className="relative space-y-0">
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex items-start gap-5 pb-8 last:pb-0"
            >
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full gradient-fresh flex items-center justify-center text-white font-number font-bold text-sm shrink-0 relative z-10">
                  {step.step}
                </div>
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="w-0.5 flex-1 bg-border-light mt-1" />
                )}
              </div>
              <div className="pt-1.5">
                <h3 className="font-bold text-dark-text">{step.title}</h3>
                <p className="mt-1 text-sm text-gray-text leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why-vrithy" ref={ref} className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] text-fresh uppercase">
            Why Vrithy
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-dark-text mt-3">
            Why Families and Businesses Choose Vrithy
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl bg-bg-light border border-border-light p-6 card-hover"
            >
              <div className="w-10 h-10 rounded-xl gradient-fresh flex items-center justify-center text-white text-sm font-bold">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-4 font-bold text-dark-text">{item.title}</h3>
              <p className="mt-1.5 text-sm text-gray-text leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-40px" });
  const [counts, setCounts] = useState({ 0: 0, 1: 0 });

  useEffect(() => {
    if (statsInView) {
      const targets = [20, 100];
      const intervalRefs: ReturnType<typeof setInterval>[] = [];
      targets.forEach((target, i) => {
        const id = setInterval(() => {
          setCounts((prev) => {
            const next = prev[i as keyof typeof prev] + 1;
            if (next >= target) {
              clearInterval(id);
              return { ...prev, [i]: target };
            }
            return { ...prev, [i]: next };
          });
        }, 30 + i * 15);
        intervalRefs.push(id);
      });
      return () => intervalRefs.forEach(clearInterval);
    }
  }, [statsInView]);

  return (
    <section id="testimonials" ref={ref} className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] text-fresh uppercase">
            Real Stories
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-dark-text mt-3">
            Loved by Our Community
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl bg-white border border-border-light p-6"
            >
              <div className="flex gap-1 text-gold mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="w-10 h-10 rounded-full bg-bg-light flex items-center justify-center text-fresh font-bold text-sm mb-3">
                {t.name.charAt(0)}
              </div>
              <p className="text-sm leading-relaxed text-gray-text">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-4 pt-4 border-t border-border-light">
                <p className="text-sm font-bold text-dark-text">{t.name}</p>
                <p className="text-xs text-gray-text">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div ref={statsRef} className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <span className="font-number text-3xl sm:text-4xl font-bold text-fresh block">
                {stat.number.includes("+") ? `${counts[i as keyof typeof counts] || 0}+` : stat.number === "100%" ? `${counts[1] || 0}%` : stat.number}
              </span>
              <span className="text-sm text-gray-text mt-1 block">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SpecialOffer() {
  const OFFERS = [
    {
      discount: "20% OFF",
      title: "House Deep Cleaning",
      desc: "Complete home refresh. Every room, every corner, every surface. Limited time.",
      until: "Aug 15, 2026",
      cta: "I'd like to claim the 20% OFF offer.",
      icon: (
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      discount: "15% OFF",
      title: "Office & Workspace",
      desc: "Professional cleaning for your workplace. Boost productivity with a spotless environment.",
      until: "Sep 1, 2026",
      cta: "I'd like to claim the 15% OFF office cleaning offer.",
      icon: (
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-28 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-[0.2em] text-fresh uppercase">
            Limited Time
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-dark-text mt-3">
            Special Offers
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-gray-text">
            Grab a deal and give your space the care it deserves.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {OFFERS.map((offer, i) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-3xl bg-white border border-border-light p-8 sm:p-10 overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-fresh/5 rounded-bl-[100%] -z-0" />
              <div className="relative z-10">
                <div className="flex items-start justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-fresh to-fresh-dark text-white flex items-center justify-center">
                    {offer.icon}
                  </div>
                  <span className="font-number text-3xl font-extrabold text-fresh">
                    {offer.discount}
                  </span>
                </div>
                <h3 className="mt-5 font-heading text-2xl font-extrabold text-dark-text">
                  {offer.title}
                </h3>
                <p className="mt-2 text-gray-text leading-relaxed">
                  {offer.desc}
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs text-gray-text/60">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>Valid until <strong className="text-fresh">{offer.until}</strong></span>
                </div>
                <a
                  href={`https://wa.me/919495804501?text=Hi%20Vrithy!%20${encodeURIComponent(offer.cta)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-fresh px-6 py-3 text-sm font-bold text-white hover:bg-fresh-dark transition-all shadow-lg group-hover:shadow-xl"
                >
                  Claim on WhatsApp
                  <span>&rarr;</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6 gradient-fresh">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-white">
          Ready to Walk Into a <span className="text-gold">Cleaner Space</span>?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-white/80">
          One call and we take care of everything. Your home, refreshed.
        </p>

        <div className="mt-8 flex flex-col items-center gap-2 text-white/70 text-sm">
          <p>21/203, Eenthum Kandi, Mathara, Kozhikode 673014</p>
          <a href="tel:+919495804501" className="hover:text-white transition-colors">+91 94958 04501</a>
          <a href="https://www.instagram.com/vrithy_clt/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">@vrithy_clt</a>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/919495804501?text=Hi%20Vrithy!%20I'd%20love%20to%20refresh%20my%20space."
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gold px-10 py-4 text-base font-bold text-fresh-dark hover:bg-[#e6c000] transition-all shadow-xl shadow-black/15"
          >
            Chat on WhatsApp
          </a>
        </div>

        <div className="mt-10 mx-auto max-w-xl h-48 rounded-2xl overflow-hidden border border-white/20">
          <iframe
            src="https://www.google.com/maps?q=21/203+Eenthum+Kandi+Mathara+Kozhikode+673014&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Vrithy Solutions Location"
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-dark-text px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="#228504" />
                <path d="M8 24V10h4l4 8 4-8h4v14h-4V16l-4 8-4-8v8H8z" fill="white" />
              </svg>
              <span className="font-heading text-xl font-extrabold text-white tracking-tight">Vrithy</span>
            </a>
            <p className="mt-3 text-sm text-white/40 leading-relaxed max-w-xs">
              100% Satisfaction + 100% Vrithy. Your trusted cleaning partner in Kozhikode.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white/60 tracking-wider uppercase mb-4">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="text-sm text-white/40 hover:text-white transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white/60 tracking-wider uppercase mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-white/40">
              <p>21/203, Eenthum Kandi, Mathara, Kozhikode 673014</p>
              <a href="tel:+919495804501" className="hover:text-white transition-colors">+91 94958 04501</a>
              <a href="https://www.instagram.com/vrithy_clt/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">@vrithy_clt</a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white/60 tracking-wider uppercase mb-4">Get in Touch</h4>
            <p className="text-sm text-white/40 mb-4">Ready to refresh your space?</p>
            <a
              href="https://wa.me/919495804501?text=Hi%20Vrithy!%20I'd%20love%20to%20refresh%20my%20space."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-dark-text hover:bg-[#e6c000] transition-colors"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs text-white/30">
          &copy; {new Date().getFullYear()} Vrithy Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  const waVisible = useScrollVisibility(0.8);

  return (
    <>
      <WhatsAppCTA visible={waVisible} />

      <Navbar />
      <Hero />
      <VrithyDifference />
      <Services />
      <WhyChoose />
      <Process />
      <Testimonials />
      <SpecialOffer />
      <Contact />
      <Footer />
    </>
  );
}
