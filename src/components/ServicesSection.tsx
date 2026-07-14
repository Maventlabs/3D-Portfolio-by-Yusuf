import FadeIn from './FadeIn';

const SERVICES = [
  {
    name: 'Full-Stack Development',
    description:
      'Building modern, scalable web applications using React, Next.js, TypeScript, FastAPI, Go, and cloud-native technologies with a focus on performance and maintainability.',
  },
  {
    name: 'AI & LLM Solutions',
    description:
      'Developing AI-powered applications with LLMs, RAG pipelines, intelligent agents, computer vision, and machine learning to automate workflows and solve complex problems.',
  },
  {
    name: 'IoT Systems',
    description:
      'Designing end-to-end IoT solutions using ESP32, MQTT, Firebase, sensors, and real-time communication for industrial automation and smart monitoring.',
  },
  {
    name: 'Backend & API Engineering',
    description:
      'Creating secure, scalable REST APIs, authentication systems, databases, and real-time services that power reliable and high-performance applications.',
  },
  {
    name: 'Cloud & DevOps',
    description:
      'Deploying and maintaining production-ready applications with Docker, CI/CD pipelines, monitoring, Linux servers, and modern infrastructure practices.',
  },
];

export default function ServicesSection() {
  return (
    <section
      className="bg-[#FFFFFF] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <h2
        className="text-[#0C0C0C] font-black uppercase text-center leading-none mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Services
      </h2>

      <div className="flex flex-col max-w-5xl mx-auto">
        {SERVICES.map((service, i) => (
          <FadeIn
            key={service.name}
            delay={i * 0.1}
            y={30}
            className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 py-8 sm:py-10 md:py-12"
            style={{ borderTop: '1px solid rgba(12, 12, 12, 0.15)' }}
          >
            <span
              className="font-black text-[#0C0C0C] flex-shrink-0"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="flex flex-col gap-2">
              <h3
                className="font-medium uppercase text-[#0C0C0C]"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {service.name}
              </h3>
              <p
                className="font-light leading-relaxed max-w-2xl text-[#0C0C0C]"
                style={{
                  fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                  opacity: 0.6,
                }}
              >
                {service.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
