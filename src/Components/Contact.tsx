import { Send, Mail, Phone, User, HelpCircle, MessageSquare, CheckCircle, Loader2 } from "lucide-react";
import React, { useState } from "react";
export default function Contact() {
    const [isSubmiting, setIsSubmiting] = useState<boolean>(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmiting(true);
        setStatus('idle');

        const form = e.currentTarget;
        const formData = new FormData(form);

        formData.append('access_key', 'a477b99b-3727-417f-9845-93c98d63526d');

        try {
            const respose = await fetch("https://api.web3forms.com/submit", {
                method: 'POST',
                body: formData
            });

            const data = await respose.json();

            if (data.success) {
                setStatus('success');
                form.reset();
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        } finally {
            setIsSubmiting(false)
        }
    };
    return (
        <section id="contact" className="min-h-screen flex items-center justify-center max-w-4xl mx-auto p-4">
            <div className="flex flex-col items-center">

                <div className="flex flex-col items-center mb-12">
                    <div className="bg-zinc-800/50 px-3 py-1.5 rounded-full border border-zinc-700/40 flex items-center justify-center space-x-1.5 w-fit">
                        <span className="text-[12px] text-cyan-400 font-mono font-semibold">04.</span>
                        <span className="text-[12px] font-medium font-mono text-zinc-400">Contact</span>
                    </div>

                    <div className="text-center py-3">
                        <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
                            Get In Touch
                        </h2>
                        <p className="text-zinc-400 sm:text-base pt-2 max-w-2xl leading-relaxed">
                            Have a project in mind, a job opportunity, or a general question? Fill out the form below.
                        </p>
                    </div>
                </div>

                <div className="p-5 w-full border border-zinc-700 rounded-xl bg-zinc-950/80">
                    <div className="">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div className="flex flex-col gap-2">
                                    <label className="flex items-center gap-1.5">
                                        <User className="w-4 h-4 text-cyan-400" />
                                        <span className="text-xs font-mono font-semibold text-zinc-400">Your Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="Ibrahim Seyid"
                                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950/50 border border-zinc-700/80 text-zinc-200 placeholder-zinc-600 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 outline-none transition text-sm"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="flex items-center gap-1.5">
                                        <Mail className="w-4 h-4 text-cyan-400" />
                                        <span className="text-xs font-mono font-semibold text-zinc-400">Email Address</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="client@example.com"
                                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950/50 border border-zinc-700/80 text-zinc-200 placeholder-zinc-600 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 outline-none transition text-sm"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                                <div className="flex flex-col gap-2">
                                    <label className="flex items-center gap-1.5">
                                        <Phone className="w-4 h-4 text-cyan-400" />
                                        <span className="text-xs font-mono font-semibold text-zinc-400">Phone Number</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        placeholder="+90 5xx xxx xx xx"
                                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950/50 border border-zinc-700/80 text-zinc-200 placeholder-zinc-600 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 outline-none transition text-sm"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="flex items-center gap-1.5">
                                        <HelpCircle className="w-4 h-4 text-cyan-400" />
                                        <span className="text-xs font-mono font-semibold text-zinc-400">Reason / Purpose</span>
                                    </label>
                                    <select
                                        className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950/50 border border-zinc-700/80 text-zinc-200 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 outline-none transition text-sm cursor-pointer"
                                        name="reason"
                                        required
                                        defaultValue=""
                                    >
                                        <option value="" disabled className="bg-zinc-900 text-zinc-500">Select reason...</option>
                                        <option value="Freelance Project" className="bg-zinc-900 text-zinc-200">New Project / Freelance</option>
                                        <option value="Job Opportunity" className="bg-zinc-900 text-zinc-200">Job Opportunity / Role</option>
                                        <option value="Consultation" className="bg-zinc-900 text-zinc-200">General Consultation</option>
                                        <option value="Other" className="bg-zinc-900 text-zinc-200">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 mb-1.5">
                                    <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                                    <span>Message</span>
                                </label>
                                <textarea
                                    name="message"
                                    rows={4}
                                    required
                                    placeholder="Describe your project, timeline, or any questions..."
                                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950/50 border border-zinc-800/80 text-zinc-200 placeholder-zinc-600 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 outline-none transition text-sm resize-none"
                                />
                            </div>
                            {status === 'success' && (
                                <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                                    <CheckCircle className="w-4 h-4 shrink-0" />
                                    <span>Thank You! your message has been sent successfully.</span>
                                </div>
                            )}

                            {status === 'error' && (
                                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-mono">
                                    Something went wrong. Please try again or email directly.
                                </div>
                            )}
                            <button
                                disabled={isSubmiting}
                                type="submit"
                                className="w-full py-2 px-4 mt-4 rounded-xl bg-zinc-800/80 hover:bg-zinc-700/80 text-white border border-zinc-700 font-medium text-sm flex items-center justify-center gap-2 transition-all hover:border-cyan-500/40 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmiting ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin text-cyan-400" />
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-4 h-4 text-cyan-400" />
                                        <span>send message</span>
                                    </>
                                )}
                            </button>

                        </form>

                        <div className="mt-6 pt-6 border-t border-zinc-800/80 flex items-center justify-center text-xs font-mono text-zinc-400">
                            <a href="mailto:barumalseyid77@gmail.com"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
                            >
                                <Mail className="w-4 h-4" />
                                <span>barumalseyid77@gmail.com</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}