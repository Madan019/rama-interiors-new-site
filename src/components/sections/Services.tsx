"use client";

import { motion } from "framer-motion";
import { Home, Building2, ChefHat, Archive, Lightbulb, Paintbrush, Hammer, Zap, Droplets, Layers } from "lucide-react";
import { Container } from "../ui/Container";

const services = [
    {
        id: "01",
        title: "Interior Design",
        subtitle: "Bespoke Interior Styling Solutions",
        icon: <Home className="w-6 h-6 text-accent" />,
        desc: "Expert design services blending aesthetics and functionality. We transform residential and commercial spaces with tailored concepts that reflect your unique style.",
        features: ["Space Planning", "Material Selection", "3D Visualization", "Project Management"],
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "02",
        title: "Commercial Interiors",
        subtitle: "Functional & Modern Workspaces",
        icon: <Building2 className="w-6 h-6 text-accent" />,
        desc: "End-to-end interior solutions for offices, retail stores, and commercial establishments. We create engaging environments that boost productivity and reflect your brand identity.",
        features: ["Office Layouts", "Brand Integration", "Retail Spaces", "Efficient Execution"],
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "03",
        title: "Modular Kitchens",
        subtitle: "Smart & Ergonomic Culinary Spaces",
        icon: <ChefHat className="w-6 h-6 text-accent" />,
        desc: "Custom-designed modular kitchens crafted using premium materials, offering style, durability, and convenience. Built to fit your exact space and storage needs.",
        features: ["Custom Sizing", "Premium Finishes", "Smart Storage", "Durable Materials"],
        image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "04",
        title: "Wardrobes & Storage",
        subtitle: "Optimized Organization Systems",
        icon: <Archive className="w-6 h-6 text-accent" />,
        desc: "Elegant and highly functional wardrobe solutions tailored to your lifestyle. We maximize space utilization while maintaining a sophisticated aesthetic for your bedrooms.",
        features: ["Sliding & Hinged", "Walk-in Closets", "Custom Shelving", "Premium Hardware"],
        image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "05",
        title: "False Ceiling",
        subtitle: "Architectural Ceiling Design",
        icon: <Lightbulb className="w-6 h-6 text-accent" />,
        desc: "Innovative false ceiling designs that enhance room volumes and acoustics. We integrate ambient lighting solutions to create the perfect atmosphere for any space.",
        features: ["POP & Gypsum", "Grid & Wooden", "Cove Lighting", "Acoustic Panels"],
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "06",
        title: "Wall Treatments",
        subtitle: "Accent Walls & Finishes",
        icon: <Paintbrush className="w-6 h-6 text-accent" />,
        desc: "Transform bland spaces into striking focal points with premium wall treatments. From textured paints to custom wallpapers, we add depth and character to every room.",
        features: ["Textured Paints", "Wood Paneling", "Wallpapers", "3D Wall Art"],
        image: "https://images.unsplash.com/photo-1528114039593-4366cc08227d?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "07",
        title: "Woodwork & Carpentry",
        subtitle: "Custom Crafted Wooden Elements",
        icon: <Hammer className="w-6 h-6 text-accent" />,
        desc: "Unmatched craftsmanship for all your structural and decorative woodwork needs. Our skilled carpenters deliver precision and quality for lasting wooden installations.",
        features: ["Doors & Windows", "Custom Furnishings", "Wall Paneling", "Restoration Work"],
        image: "https://images.unsplash.com/photo-1610505466023-9520935daeed?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "08",
        title: "Electrical Works",
        subtitle: "Safe & Modern Electrical Systems",
        icon: <Zap className="w-6 h-6 text-accent" />,
        desc: "Comprehensive electrical solutions ensuring safety and efficiency. We handle complete wiring, smart home integrations, and modern lighting fixture installations.",
        features: ["Complete Wiring", "Lighting Design", "Smart Home Integrations", "Panel Upgrades"],
        image: "https://images.unsplash.com/photo-1558227691-41ea78d1f631?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "09",
        title: "Plumbing & Sanitary",
        subtitle: "Reliable Water & Drainage Systems",
        icon: <Droplets className="w-6 h-6 text-accent" />,
        desc: "Expert plumbing services for precise installation of pipelines, fixtures, and sanitary ware. We ensure leak-proof systems that blend seamlessly with your interior design.",
        features: ["Pipe Laying", "Waterproofing", "Fixture Installation", "Drainage Solutions"],
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "10",
        title: "Flooring Solutions",
        subtitle: "Premium Surface Applications",
        icon: <Layers className="w-6 h-6 text-accent" />,
        desc: "Diverse flooring options from classic hardwood to modern vitrified tiles. We provide expert installation ensuring flawless finishes that elevate the foundation of your space.",
        features: ["Hardwood & Laminate", "Vitrified Tiles", "Marble & Granite", "Epoxy Flooring"],
        image: "https://images.unsplash.com/photo-1581858326456-78801d01f8d4?auto=format&fit=crop&w=800&q=80"
    }
];

export function Services() {
    return (
        <section className="section-padding bg-surface">
            <Container>
                {/* Header section can be omitted to avoid repetition since we'll have InnerHero in the page, but let's just make it a clean list */}

                {/* Services List - Alternating layout */}
                <div className="flex flex-col gap-12 lg:gap-24 pt-8">
                    {services.map((service, idx) => {
                        const isEven = idx % 2 !== 0;
                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}
                            >

                                {/* Image side */}
                                <div className={`relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 bg-gray-200"
                                    />
                                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500" />
                                </div>

                                {/* Content side */}
                                <div className={`flex flex-col gap-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                                    <div className="flex items-center gap-4">
                                        <span className="text-5xl md:text-6xl font-black text-primary/10 tracking-tighter tabular-nums">
                                            {service.id}
                                        </span>
                                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100">
                                            {service.icon}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <h3 className="text-2xl md:text-3xl font-semibold text-primary">
                                            {service.title}
                                        </h3>
                                        <p className="text-accent font-medium text-lg">
                                            {service.subtitle}
                                        </p>
                                    </div>

                                    <p className="text-text-muted text-lg leading-relaxed">
                                        {service.desc}
                                    </p>

                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-3 text-text">
                                                <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                                                <span className="font-medium text-primary/80">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </Container>
        </section>
    );
}
