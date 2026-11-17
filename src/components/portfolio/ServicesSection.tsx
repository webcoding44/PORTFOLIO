import {
  BarChart3,
  BriefcaseBusiness,
  PanelsTopLeft,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { FadeInItem, FadeInStagger, Reveal } from "@/components/animations/Reveal";

const services = [
  {
    title: "E-commerce",
    description:
      "Online stores with product catalogs, secure checkout, and straightforward order management.",
    icon: ShoppingBag,
  },
  {
    title: "Business Websites",
    description:
      "Professional websites that present your business, services, and brand clearly.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Landing Pages",
    description:
      "Focused, responsive pages designed to introduce a product and turn visitors into customers.",
    icon: Sparkles,
  },
  {
    title: "SaaS Applications",
    description:
      "Scalable web applications with thoughtful user flows, authentication, and useful features.",
    icon: PanelsTopLeft,
  },
  {
    title: "Dashboards",
    description:
      "Data-rich dashboards with clear visualizations, filters, and responsive interfaces.",
    icon: BarChart3,
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24 px-4">
    <div className="container mx-auto max-w-6xl">
      <Reveal className="text-center">
        <h2 className="section-title">Services</h2>
        <p className="mt-4 text-foreground/60 text-lg">
          Digital products and websites I can build for you
        </p>
      </Reveal>

      <FadeInStagger className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <FadeInItem key={service.title}>
              <article className="h-full neobrutalist-card p-6 bg-card border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-brutal hover:border-primary">
                <div className="mb-5 flex h-12 w-12 items-center justify-center border-2 border-primary/30 bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 leading-relaxed text-foreground/70">
                  {service.description}
                </p>
              </article>
            </FadeInItem>
          );
        })}
      </FadeInStagger>
    </div>
  </section>
);

export default ServicesSection;
