import { useState } from "react";
import { Send, LinkIcon, Mail, Sparkles, Phone, User, HelpCircle, MessageSquare, CheckCircle, Loader2 } from "lucide-react";

export default function Footer() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus("idle");

        const form = e.currentTarget;
        const formData = new FormData(form);

        // استبدل المفتاح هنا بالمفتاح الذي وصلك على الإيميل من Web3Forms
        formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus("success");
                form.reset();
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="max-w-6xl mx-auto py-20 px-4 min-h-screen flex items-center justify-center">
            <div className="flex flex-col items-center w-full max-w-2xl">

                {/* 04. Section Badge */}
                <div className="flex flex-col items-center mb-10 text-center">
                    <div className="bg-zinc-800/50 px-3 py-1.5 rounded-full border border-zinc-700/40 flex items-center justify-center space-x-1.5 w-fit mb-3">
                        <span className="text-[12px] text-cyan-400 font-mono font-semibold">04.</span>
                        <span className="text-[12px] font-medium font-mono text-zinc-400">Contact</span>
                    </div>

                    <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
                        Get In Touch
                    </h2>
                    <p className="text-zinc-400 sm:text-base pt-2 max-w-md leading-relaxed">
                        Have a project in mind, a job opportunity, or a general question? Fill out the form below.
                    </p>
                </div>

                {/* Form Card */}
                <div className="w-full bg-zinc-900/40 border border-zinc-800/80 p-6 sm:p-8 rounded-2xl backdrop-blur-sm">
                    <form onSubmit={handleSubmit} className="space-y-4">

                        {/* الصف الأول: الاسم + البريد */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 mb-1.5">
                                    <User className="w-3.5 h-3.5 text-cyan-400" />
                                    <span>Your Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Ibrahim Said"
                                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950/50 border border-zinc-800/80 text-zinc-200 placeholder-zinc-600 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 outline-none transition text-sm"
                                />
                            </div>

                            <div>
                                <label className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 mb-1.5">
                                    <Mail className="w-3.5 h-3.5 text-cyan-400" />
                                    <span>Email Address</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="client@example.com"
                                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950/50 border border-zinc-800/80 text-zinc-200 placeholder-zinc-600 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 outline-none transition text-sm"
                                />
                            </div>
                        </div>

                        {/* الصف الثاني: رقم الهاتف + سبب التواصل */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 mb-1.5">
                                    <Phone className="w-3.5 h-3.5 text-cyan-400" />
                                    <span>Phone Number</span>
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="+90 5xx xxx xx xx"
                                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950/50 border border-zinc-800/80 text-zinc-200 placeholder-zinc-600 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 outline-none transition text-sm"
                                />
                            </div>

                            <div>
                                <label className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 mb-1.5">
                                    <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
                                    <span>Reason / Purpose</span>
                                </label>
                                <select
                                    name="reason"
                                    required
                                    defaultValue=""
                                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950/50 border border-zinc-800/80 text-zinc-200 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 outline-none transition text-sm cursor-pointer"
                                >
                                    <option value="" disabled className="bg-zinc-900 text-zinc-500">Select reason...</option>
                                    <option value="Freelance Project" className="bg-zinc-900 text-zinc-200">New Project / Freelance</option>
                                    <option value="Job Opportunity" className="bg-zinc-900 text-zinc-200">Job Opportunity / Role</option>
                                    <option value="Consultation" className="bg-zinc-900 text-zinc-200">General Consultation</option>
                                    <option value="Other" className="bg-zinc-900 text-zinc-200">Other</option>
                                </select>
                            </div>
                        </div>

                        {/* الصف الثالث: الرسالة */}
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

                        {/* إشعار النجاح أو الخطأ */}
                        {status === "success" && (
                            <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                                <CheckCircle className="w-4 h-4 shrink-0" />
                                <span>Thank you! Your message has been sent successfully.</span>
                            </div>
                        )}

                        {status === "error" && (
                            <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono">
                                Something went wrong. Please try again or email directly.
                            </div>
                        )}

                        {/* زر الإرسال */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-2.5 px-4 rounded-xl bg-zinc-800/80 hover:bg-zinc-700/80 text-white border border-zinc-700/60 font-medium text-sm flex items-center justify-center gap-2 transition-all cursor-pointer hover:border-cyan-500/40 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin text-cyan-400" />
                                    <span>Sending...</span>
                                </>
                            ) : (
                                <>
                                    <Send className="w-4 h-4 text-cyan-400" />
                                    <span>Send Message</span>
                                </>
                            )}
                        </button>
                    </form>

                    {/* الروابط السريعة المباشرة */}
                    <div className="mt-6 pt-6 border-t border-zinc-800/80 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-zinc-400">
                        <a
                            href="mailto:ibrahimsaid.dev@gmail.com"
                            className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
                        >
                            <Mail className="w-3.5 h-3.5" />
                            <span>ibrahimsaid.dev@gmail.com</span>
                        </a>
                        <span className="text-zinc-700">•</span>
                        <a
                            href="https://github.com/ibrahim1i1"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1.5 hover:text-white transition-colors"
                        >
                            <LinkIcon className="w-3.5 h-3.5" />
                            <span>GitHub</span>
                        </a>
                        <span className="text-zinc-700">•</span>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1.5 hover:text-white transition-colors"
                        >
                            <LinkIcon className="w-3.5 h-3.5" />
                            <span>LinkedIn</span>
                        </a>
                    </div>
                </div>

                {/* Footer Tagline */}
                <div className="mt-16 w-full flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 border-t border-zinc-800/50 pt-6">
                    <p>© 2026 Ibrahim Said.</p>
                    <p className="flex items-center gap-1.5 mt-2 sm:mt-0">
                        <span>Built with React & Tailwind CSS</span>
                        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    </p>
                </div>

            </div>
        </section>
    );
}