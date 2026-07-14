import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';
import ContactButton from './ContactButton';

const DECOR_IMAGES = {
  moon:
    'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
  p59:
    'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
  lego:
    'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
  group:
    'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
};

const ABOUT_TEXT =
  "I build intelligent digital products by combining full-stack development, AI, and IoT. Passionate about scalable systems, modern web technologies, and automation, I enjoy turning ambitious ideas into reliable, real-world solutions. Let's build something impactful together.";

export default function AboutSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden">
      {/* Decorative images */}
      {/* Top-left moon */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px] z-0"
      >
        <img src={DECOR_IMAGES.moon} alt="" className="w-full h-auto" />
      </FadeIn>

      {/* Bottom-left 3D object */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px] z-0"
      >
        <img src={DECOR_IMAGES.p59} alt="" className="w-full h-auto" />
      </FadeIn>

      {/* Top-right lego */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px] z-0"
      >
        <img src={DECOR_IMAGES.lego} alt="" className="w-full h-auto" />
      </FadeIn>

      {/* Bottom-right 3D group */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px] z-0"
      >
        <img src={DECOR_IMAGES.group} alt="" className="w-full h-auto" />
      </FadeIn>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16 text-center">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <AnimatedText
          text={ABOUT_TEXT}
          className="text-[#D7E2EA] font-medium leading-relaxed max-w-[560px]"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
        />
      </div>

      <FadeIn
        delay={0}
        y={30}
        className="relative z-10 mt-16 sm:mt-20 md:mt-24"
      >
        <ContactButton />
      </FadeIn>
    </section>
  );
}
