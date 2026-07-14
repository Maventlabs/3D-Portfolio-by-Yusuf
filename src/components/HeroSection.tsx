import FadeIn from './FadeIn';
import Magnet from './Magnet';
import ContactButton from './ContactButton';
import portrait from "../../assets/portrait.png";
const PORTRAIT_URL = portrait;
const NAV_LINKS = ['About', 'Price', 'Projects', 'Contact'];

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col justify-between overflow-x-clip">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="nav">
        <ul className="flex justify-between px-6 md:px-10 pt-6 md:pt-8">
          {NAV_LINKS.map((link) => (
            <li
              key={link}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
            >
              {link}
            </li>
          ))}
        </ul>
      </FadeIn>

      {/* Hero Heading */}
      <FadeIn delay={0.15} y={40} className="overflow-hidden w-full">
        <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5">
          Hi, i&apos;m Yusuf
        </h1>
      </FadeIn>

      {/* Bottom bar */}
      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}>
            a 3d creator driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      {/* Hero Portrait */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0">
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <img
              src={PORTRAIT_URL}
              alt="Yusuf portrait"
              className="w-full h-auto object-contain"
              loading="eager"
            />
          </Magnet>
        </FadeIn>
      </div>
    </section>
  );
}
