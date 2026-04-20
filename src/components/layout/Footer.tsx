import Link from "next/link";
import { Container } from "../ui/Container";

export function Footer() {
    return (
        <footer className="bg-primary text-white/70 pt-20 pb-10 border-t border-primary-hover">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">RAMA INTERIORS</h2>
                        <p className="text-sm leading-relaxed mb-6 max-w-sm">
                            Over two decades of excellence in manufacturing premium furniture for homes and institutions across India.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Explore</h3>
                        <ul className="space-y-4">
                            {["About", "Services", "Process", "Portfolio", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`}
                                        className="hover:text-accent transition-colors text-sm"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Our Services</h3>
                        <ul className="space-y-4">
                            <li className="text-sm">Standard Customized Furniture</li>
                            <li className="text-sm">Bulk Educational Seating</li>
                            <li className="text-sm">Complete Office Setup</li>
                            <li className="text-sm">Luxury Residential Sets</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Contact Us</h3>
                        <address className="not-italic space-y-4 text-sm">
                            <p>
                                New Loha Mandi Rd, Balaji Vihar, Macheda,<br />
                                V.K.I.A, Harmada, Jaipur, Rajasthan 302013
                            </p>
                            <p>
                                <a href="tel:+919772966307" className="hover:text-accent transition-colors">+91 9772966307</a><br />
                                <a href="mailto:interiorsbyrama@gmail.com" className="hover:text-accent transition-colors">interiorsbyrama@gmail.com</a>
                            </p>
                            <p>
                                Mon - Sat: 09:00 AM - 07:00 PM
                            </p>
                        </address>
                    </div>

                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
                    <p>© {new Date().getFullYear()} Rama Interiors. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
