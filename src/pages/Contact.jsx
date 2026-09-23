import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowUpRight,
  LoaderCircle,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { sendContactMessage } from "../services/contactApi";


function GitHubIcon({ size = 19 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.465-1.11-1.465-.908-.621.069-.608.069-.608 1.004.071 1.532 1.03 1.532 1.03.892 1.529 2.341 1.087 2.91.831.091-.646.349-1.087.635-1.338-2.22-.252-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.57 9.57 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.579.688.481A10.003 10.003 0 0 0 22 12c0-5.523-4.477-10-10-10Z" />
    </svg>
  );
}

function LinkedInIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.48v6.26zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z" />
    </svg>
  );
}

function InstagramIcon({ size = 19 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    const form = e.target;

    const contactData = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    try {
      const response = await sendContactMessage(contactData);

      setSuccess(
        response.data.message || "Your message was sent successfully!"
      );

      // Clear form
      form.reset();
    } catch (error) {
      console.error("Contact form error:", error);

      setError(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0a0a0a] px-6 py-24 text-white sm:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-orange-600/10 blur-[150px]" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-[400px] w-[400px] rounded-full bg-amber-500/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-16 text-center">

          <div className="mb-4 flex items-center justify-center gap-3">

            <span className="h-[2px] w-10 bg-gradient-to-r from-orange-500 to-amber-500" />

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
              Get In Touch
            </span>

            <span className="h-[2px] w-10 bg-gradient-to-r from-amber-500 to-orange-500" />

          </div>

          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
              Together.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            I'm open to opportunities, collaborations and interesting web
            development projects. Feel free to reach out.
          </p>

        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">

          {/* Left Side */}
          <div className="lg:col-span-2">

            <div className="h-full rounded-3xl border border-white/10 bg-white/[0.02] p-7 sm:p-9">

              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-orange-400">
                Contact Information
              </p>

              <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                Have a project in mind?
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-500">
                Whether you're looking for a developer, have a project idea,
                or simply want to connect, I'd be happy to hear from you.
              </p>

              {/* Email */}
              <a
                href="mailto:your-email@example.com"
                className="group mt-8 flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4 transition-all duration-300 hover:border-orange-500/30 hover:bg-orange-500/[0.04]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                  <Mail size={19} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs text-gray-500">
                    Email
                  </p>

                  <p className="mt-1 truncate text-sm font-medium text-gray-300 group-hover:text-orange-400">
                    your-email@example.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+910000000000"
                className="group mt-5 flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4 transition-all duration-300 hover:border-orange-500/30 hover:bg-orange-500/[0.04]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                  <Phone size={19} />
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Phone
                  </p>

                  <p className="mt-1 text-sm font-medium text-gray-300 group-hover:text-orange-400">
                    +91 XXXXX XXXXX
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="mt-5 flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                  <MapPin size={19} />
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Location
                  </p>

                  <p className="mt-1 text-sm font-medium text-gray-300">
                    Kerala, India
                  </p>
                </div>

              </div>

              {/* Social Media */}
              <div className="mt-8 border-t border-white/10 pt-7">

                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-gray-500">
                  Connect With Me
                </p>

                <div className="flex gap-3">

                  {/* GitHub */}
                  <a
                    href="https://github.com/muhammadniishad786-rgb"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-black/20 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:bg-orange-500/10 hover:text-orange-400"
                  >
                    <GitHubIcon size={19} />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="YOUR_LINKEDIN_URL"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-black/20 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:bg-orange-500/10 hover:text-orange-400"
                  >
                    <LinkedInIcon size={18} />
                  </a>

                  {/* Instagram */}
                  <a
                    href="YOUR_INSTAGRAM_URL"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-black/20 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:bg-orange-500/10 hover:text-orange-400"
                  >
                    <InstagramIcon size={19} />
                  </a>

                </div>

              </div>

            </div>

          </div>

          {/* Right Side */}
          <div className="lg:col-span-3">

            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 sm:p-9"
            >

              <div className="mb-7">

                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-orange-400">
                  Send a Message
                </p>

                <h3 className="mt-3 text-2xl font-bold text-white">
                  Tell me about your project
                </h3>

              </div>

              {/* Name + Email */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-400"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-600 transition-all duration-300 focus:border-orange-500/60 focus:ring-2 focus:ring-orange-500/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-400"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-600 transition-all duration-300 focus:border-orange-500/60 focus:ring-2 focus:ring-orange-500/10"
                  />
                </div>

              </div>

              {/* Subject */}
              <div className="mt-5">

                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-gray-400"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Let's work together"
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-600 transition-all duration-300 focus:border-orange-500/60 focus:ring-2 focus:ring-orange-500/10"
                />

              </div>

              {/* Message */}
              <div className="mt-5">

                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-400"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  placeholder="Tell me a little about your project..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-600 transition-all duration-300 focus:border-orange-500/60 focus:ring-2 focus:ring-orange-500/10"
                />

              </div>

              {/* Success Message */}
              {success && (
                <div className="mt-5 flex items-center gap-3 rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-400">
                  <CheckCircle2 size={18} />
                  <span>{success}</span>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="mt-5 flex items-center gap-3 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                  <AlertCircle size={18} />
                  <span>{error}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_25px_rgba(249,115,22,0.15)] transition-all duration-300 hover:-translate-y-1 hover:from-orange-600 hover:to-amber-600 hover:shadow-[0_0_35px_rgba(249,115,22,0.3)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {loading ? (
                  <>
                    <LoaderCircle
                      size={18}
                      className="animate-spin"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message

                    <Send
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </>
                )}
              </button>

              <p className="mt-4 text-center text-xs text-gray-600">
                Your message will be securely submitted to the server.
              </p>

            </form>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 text-center sm:flex-row sm:text-left">

          <p className="text-sm text-gray-500">
            Let's connect and create something meaningful.
          </p>

          <a
            href="#home"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-orange-400 transition-colors hover:text-orange-300"
          >
            Back to top

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;