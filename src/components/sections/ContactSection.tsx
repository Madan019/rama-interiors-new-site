"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

export function ContactSection() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        project: "residential",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({
                    name: "",
                    phone: "",
                    email: "",
                    project: "residential",
                    message: ""
                });
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setStatus("error");
        }
    };

    return (
        <section className="section-padding bg-bg" id="contact">
            <Container>
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="heading-2 mb-6">
                        Let's Discuss Your <span className="text-accent italic font-light">Project</span>
                    </h2>
                    <p className="text-lg text-text-muted leading-relaxed">
                        Whether you need bespoke residential furniture or bulk educational seating, our team is ready to deliver. Reach out to discuss your requirements or schedule a factory visit.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                    {/* Left: Info Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-surface p-8 md:p-10 rounded-3xl border border-border shadow-xl h-full flex flex-col"
                    >
                        <h3 className="text-2xl font-bold text-primary mb-8">Contact Information</h3>

                        <div className="space-y-5 flex-grow">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-bg border border-border flex items-center justify-center shrink-0">
                                    <MapPin className="w-4 h-4 text-accent" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-primary mb-0.5">Factory Location</h3>
                                    <p className="text-sm text-text-muted">New Loha Mandi Rd, Balaji Vihar, Macheda, V.K.I.A, Harmada, Jaipur, Rajasthan 302013</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-bg border border-border flex items-center justify-center shrink-0">
                                    <Phone className="w-4 h-4 text-accent" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-primary mb-0.5">Phone Number</h3>
                                    <a href="tel:+919772966307" className="text-sm text-text-muted hover:text-accent transition-colors">+91 9772966307</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-bg border border-border flex items-center justify-center shrink-0">
                                    <Mail className="w-4 h-4 text-accent" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-primary mb-0.5">Email Address</h3>
                                    <a href="mailto:info@ramainteriors.in" className="text-sm text-text-muted hover:text-accent transition-colors">interiorsbyrama@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-bg border border-border flex items-center justify-center shrink-0">
                                    <Clock className="w-4 h-4 text-accent" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-primary mb-0.5">Working Hours</h3>
                                    <p className="text-sm text-text-muted">Mon - Sat: 09:00 AM - 07:00 PM</p>
                                </div>
                            </div>

                            {/* Google Map */}
                            <div className="mt-8 relative w-full h-[220px] rounded-2xl overflow-hidden border border-border">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3555.064447848992!2d75.751864!3d26.996511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDU5JzQ3LjQiTiA3NcKwNDUnMDYuNyJF!5e0!3m2!1sen!2sin!4v1776672451901!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={false}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Rama Interiors Location Map"
                                ></iframe>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Inquiry Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-surface p-8 md:p-10 rounded-3xl border border-border shadow-xl h-full flex flex-col"
                    >
                        {status === "success" ? (
                            <div className="flex-grow flex flex-col items-center justify-center text-center space-y-4">
                                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center">
                                    <CheckCircle2 className="w-10 h-10 text-accent" />
                                </div>
                                <h3 className="text-2xl font-bold text-primary">Inquiry Sent!</h3>
                                <p className="text-text-muted">Thank you for reaching out. Our team will get back to you shortly.</p>
                                <Button variant="outline" onClick={() => setStatus("idle")}>Send Another Message</Button>
                            </div>
                        ) : (
                            <>
                                <h3 className="text-2xl font-bold text-primary mb-2">Send an Inquiry</h3>
                                <p className="text-text-muted mb-8 text-sm">Fill out the form below and our team will get back to you within 24 hours.</p>

                                <form className="space-y-5 flex-grow flex flex-col" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-primary mb-1.5 ml-1">Full Name</label>
                                            <Input
                                                id="name"
                                                type="text"
                                                placeholder="John Doe"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-primary mb-1.5 ml-1">Phone Number</label>
                                            <Input
                                                id="phone"
                                                type="tel"
                                                placeholder="+91 98765 43210"
                                                required
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-primary mb-1.5 ml-1">Email Address</label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="john@company.com"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="project" className="block text-sm font-medium text-primary mb-1.5 ml-1">Project Type</label>
                                        <select
                                            id="project"
                                            value={formData.project}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-bg border border-border rounded-xl text-text focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none appearance-none"
                                        >
                                            <option value="residential">Residential Fit-out</option>
                                            <option value="commercial">Commercial/Office Space</option>
                                            <option value="educational">Educational Institution</option>
                                            <option value="bulk">Bulk Manufacturing (Other)</option>
                                        </select>
                                    </div>

                                    <div className="flex-grow flex flex-col">
                                        <label htmlFor="message" className="block text-sm font-medium text-primary mb-1.5 ml-1">Message / Requirements</label>
                                        <textarea
                                            id="message"
                                            placeholder="Tell us about your project scale and timeline..."
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full flex-grow min-h-[120px] px-4 py-3 bg-bg border border-border rounded-xl text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none resize-none"
                                        />
                                    </div>

                                    {status === "error" && (
                                        <p className="text-red-500 text-sm font-medium">Something went wrong. Please try again.</p>
                                    )}

                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full mt-4 gap-2 shrink-0"
                                        disabled={status === "submitting"}
                                    >
                                        {status === "submitting" ? "Sending..." : "Send Inquiry"}
                                        <Send className="w-4 h-4" />
                                    </Button>
                                </form>
                            </>
                        )}
                    </motion.div>

                </div>
            </Container>
        </section>
    );
}
