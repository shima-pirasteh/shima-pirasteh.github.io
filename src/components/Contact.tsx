import React, { useState } from "react";
import { Mail, Linkedin, Globe, MapPin, Send, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    subject: "Project Collaboration",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setLoading(true);
    // Simulate submission latency
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: "", email: "", organization: "", subject: "Project Collaboration", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="pt-32 pb-24 bg-[#0F0F10] px-6 md:px-12 lg:px-24 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div id="contact-outer-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Column 1: Contact Methods Info */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#FAC700] font-semibold mb-3 block">
                Get In Touch
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-stone-100 tracking-tight leading-tight">
                Initiate a Collaboration
              </h2>
              <p className="mt-4 text-stone-400 text-sm md:text-base leading-relaxed">Feel free to reach out!</p>
            </div>

            <div className="my-8 space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-[#0A0A0B] border border-white/5 rounded">
                  <Mail className="text-[#FAC700]" size={18} />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-stone-500 uppercase block tracking-wider">
                    Direct Correspondence
                  </span>
                  <a
                    href="mailto:shima.pirasteh@gmail.com"
                    className="font-sans text-stone-200 hover:text-[#FAC700] transition-colors text-sm font-medium"
                  >
                    shima.pirasteh@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-[#0A0A0B] border border-white/5 rounded">
                  <Linkedin className="text-[#FAC700]" size={18} />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-stone-500 uppercase block tracking-wider">
                    Professional Presence
                  </span>
                  <a
                    href="https://www.linkedin.com/in/shima-pirasteh"
                    target="_blank"
                    rel="noreferrer"
                    className="font-sans text-stone-200 hover:text-[#FAC700] transition-colors text-sm font-medium"
                  >
                    https://www.linkedin.com/in/shima-pirasteh
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-[#0A0A0B] border border-white/5 rounded">
                  <MapPin className="text-[#FAC700]" size={18} />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-stone-500 uppercase block tracking-wider">
                    Active Base
                  </span>
                  <span className="font-sans text-stone-200 text-sm font-medium">Rome, Italy</span>
                </div>
              </div>
            </div>

            <p className="text-stone-500 font-mono text-[10px]">
              © {new Date().getFullYear()} Spatial Heritage Architect Portfolio. All rights reserved. Built with
              material honesty.
            </p>
          </div>

          {/* Column 2: Sleek Interactive Form */}
          <div className="lg:col-span-8">
            <div className="bg-[#111112] p-8 md:p-10 border border-white/5 rounded-sm relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    id="contact-inner-form"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-mono text-[10px] text-stone-400 uppercase tracking-widest mb-2 font-semibold">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full bg-[#0A0A0B] border border-white/5 px-4 py-3 text-stone-200 font-sans text-sm focus:outline-none focus:border-[#FAC700] transition-colors rounded-sm"
                          placeholder="e.g., Jean Nouvel"
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-[10px] text-stone-400 uppercase tracking-widest mb-2 font-semibold">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full bg-[#0A0A0B] border border-white/5 px-4 py-3 text-stone-200 font-sans text-sm focus:outline-none focus:border-[#FAC700] transition-colors rounded-sm"
                          placeholder="e.g., client@institution.org"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-mono text-[10px] text-stone-400 uppercase tracking-widest mb-2 font-semibold">
                          Organization
                        </label>
                        <input
                          type="text"
                          value={form.organization}
                          onChange={(e) => setForm({ ...form, organization: e.target.value })}
                          className="w-full bg-[#0A0A0B] border border-white/5 px-4 py-3 text-stone-200 font-sans text-sm focus:outline-none focus:border-[#FAC700] transition-colors rounded-sm"
                          placeholder="e.g., Museum of Modern Cartography"
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-[10px] text-stone-400 uppercase tracking-widest mb-2 font-semibold">
                          Subject Area
                        </label>
                        <select
                          value={form.subject}
                          onChange={(e) => setForm({ ...form, subject: e.target.value })}
                          className="w-full bg-[#0A0A0B] border border-white/5 px-4 py-3 text-stone-200 font-sans text-sm focus:outline-none focus:border-[#FAC700] transition-colors rounded-sm cursor-pointer"
                        >
                          <option value="Project Collaboration">Project Collaboration</option>
                          <option value="Speaking & Lectures">Speaking & Lectures</option>
                          <option value="Exhibition Inquiry">Exhibition Inquiry</option>
                          <option value="Other">General Discussion</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block font-mono text-[10px] text-stone-400 uppercase tracking-widest mb-2 font-semibold">
                        Brief Narrative Proposal *
                      </label>
                      <textarea
                        required
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        rows={5}
                        className="w-full bg-[#0A0A0B] border border-white/5 px-4 py-3 text-[#f0f0f0] font-sans text-sm focus:outline-none focus:border-[#FAC700] transition-colors rounded-sm resize-none"
                        placeholder="State your spatial constraints, archaeological timelines, or creative objectives..."
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full md:w-auto bg-[#FAC700] text-stone-950 font-mono text-xs uppercase font-extrabold tracking-widest py-4 px-8 hover:opacity-90 transition-colors flex items-center justify-center space-x-2 rounded-sm cursor-pointer disabled:opacity-50"
                      >
                        {loading ? (
                          <span>Sending...</span>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send size={12} />
                          </>
                        )}
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 flex flex-col items-center justify-center text-center"
                  >
                    <CheckCircle2 size={54} className="text-[#FAC700] mb-6" />
                    <h3 className="font-serif text-2xl text-stone-100">Message Transmitted</h3>
                    <p className="text-stone-400 text-sm max-w-sm mt-3 leading-relaxed">
                      Thank you for your transmission. The communication has been securely logged, and I will correspond
                      within 48 business hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-8 font-mono text-xs text-[#FAC700] border border-[#FAC700] px-4 py-2 hover:bg-[#FAC700]/5 transition-all cursor-pointer rounded-sm"
                    >
                      Send New Inquiry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
