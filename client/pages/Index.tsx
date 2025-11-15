import { Button } from "@/components/ui/button";
import {
  Feather,
  Zap,
  Brain,
  TrendingUp,
  Layers,
  Search,
  Lock,
  Bot,
  Clock,
  ArrowRight,
  Star,
  Shield,
  Zap as Lightning,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Index() {
    const navigate = useNavigate();
  return (
    <div className="w-full bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Feather className="w-6 h-6 text-slate-900" />
            <span className="text-2xl font-bold text-slate-900 font-display">
              IdeaVault
            </span>
          </div>
          <div className="hidden md:flex gap-8">
            <a
              href="#features"
              className="text-slate-600 hover:text-slate-900 transition font-medium"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-slate-600 hover:text-slate-900 transition font-medium"
            >
              About
            </a>
            <a
              href="#pricing"
              className="text-slate-600 hover:text-slate-900 transition font-medium"
            >
              Pricing
            </a>
          </div>
          <div className="flex gap-3 items-center">
            <Button
              variant="ghost"
              className="text-slate-900 hover:bg-slate-100"
            >
              Login
            </Button>
           <Button
      className="bg-slate-900 hover:bg-slate-800 text-white font-semibold"
      onClick={() => navigate("/signup")}
    >
      Sign Up
    </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Feather className="w-5 h-5 text-slate-400" />
                  <span className="text-sm text-slate-500 font-medium">
                    Capture Ideas Before They Disappear
                  </span>
                </div>
                <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 leading-tight font-display">
                  Your ideas deserve a home.
                </h1>
                <p className="text-xl text-slate-600 max-w-lg">
                  Save, organize, and grow every business idea — in one calm
                  space.
                </p>
              </div>

              <div className="flex gap-4 pt-4">
                <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 text-base rounded-lg">
                  Start for free
                </Button>
                <Button
                  variant="outline"
                  className="px-8 py-6 text-base rounded-lg border-slate-300 text-slate-900 hover:bg-slate-50"
                >
                  See how it works
                </Button>
              </div>

              <div className="flex gap-6 pt-4 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 fill-slate-900 text-slate-900" />
                  <span>4.9/5 from 200+ users</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-slate-900" />
                  <span>100% private & encrypted</span>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <img
                src="https://images.pexels.com/photos/17828687/pexels-photo-17828687.jpeg"
                alt="App dashboard mockup"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="flex justify-center">
            <div className="p-3 bg-slate-100 rounded-full">
              <Zap className="w-6 h-6 text-slate-900" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 font-display">
            Why This App Exists
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Ideas come randomly. Most disappear. This app helps you capture them
            instantly and turn sparks into real business plans.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50"
      >
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-slate-900 font-display">
              Powerful Features
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Everything you need to turn ideas into reality
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group p-8 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition bg-white">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-slate-900 transition">
                <Zap className="w-6 h-6 text-slate-900 group-hover:text-white transition" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Instant Idea Capture
              </h3>
              <p className="text-slate-600">
                Type, voice record, or quick-add ideas in seconds. Clean,
                distraction-free editor with tags.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition bg-white">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-slate-900 transition">
                <Brain className="w-6 h-6 text-slate-900 group-hover:text-white transition" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                AI Idea Expansion
              </h3>
              <p className="text-slate-600">
                Breaks your idea into problem, target users, monetization, tech
                stack, competition. Turns a spark into something real.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition bg-white">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-slate-900 transition">
                <TrendingUp className="w-6 h-6 text-slate-900 group-hover:text-white transition" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Idea Score System
              </h3>
              <p className="text-slate-600">
                AI scores difficulty, demand, cost, timeline, and earning
                potential. Helps you pick the best ideas to work on.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group p-8 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition bg-white">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-slate-900 transition">
                <Layers className="w-6 h-6 text-slate-900 group-hover:text-white transition" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Execution Planner
              </h3>
              <p className="text-slate-600">
                Convert ideas into task boards. Add steps, deadlines,
                priorities, and progress bars.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group p-8 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition bg-white">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-slate-900 transition">
                <Search className="w-6 h-6 text-slate-900 group-hover:text-white transition" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Smart Search & Tags
              </h3>
              <p className="text-slate-600">
                Organize ideas with auto-tags. Filter by feasibility, category,
                effort, and more.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group p-8 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition bg-white">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-slate-900 transition">
                <Lock className="w-6 h-6 text-slate-900 group-hover:text-white transition" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Secure Private Vault
              </h3>
              <p className="text-slate-600">
                Encrypted idea storage. Only you can access your idea bank.
              </p>
            </div>

            {/* Feature 7 */}
            <div className="group p-8 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition bg-white">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-slate-900 transition">
                <Bot className="w-6 h-6 text-slate-900 group-hover:text-white transition" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Idea AI Agent
              </h3>
              <p className="text-slate-600">
                Helps generate names, landing pages, business models. Basically
                your AI co-founder.
              </p>
            </div>

            {/* Feature 8 */}
            <div className="group p-8 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition bg-white">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-slate-900 transition">
                <Clock className="w-6 h-6 text-slate-900 group-hover:text-white transition" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Daily Idea Recap
              </h3>
              <p className="text-slate-600">
                Get daily summaries of your ideas, progress, and AI-generated
                insights to stay motivated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-slate-900 font-display">
              How It Works
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Three simple steps from idea to execution
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-slate-900 to-slate-700 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Capture</h3>
              <p className="text-slate-600">
                Quickly jot down your idea with our intuitive editor
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-slate-900 to-slate-700 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Expand</h3>
              <p className="text-slate-600">
                Let AI help you develop and validate your concept
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-slate-900 to-slate-700 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Execute</h3>
              <p className="text-slate-600">
                Turn your idea into action with our planning tools
              </p>
            </div>
          </div>

          <div className="mt-12">
            <img
              src="https://images.pexels.com/photos/17486100/pexels-photo-17486100.png"
              alt="How it works visualization"
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-slate-900 font-display">
              Powerful Dashboard
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Beautiful, intuitive interface designed for your productivity
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
            <img
              src="https://images.pexels.com/photos/7190953/pexels-photo-7190953.jpeg"
              alt="Dashboard preview"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-slate-900 font-display">
              Loved by Creators
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              See what entrepreneurs and creators are saying
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Founder, TechVentures",
                quote:
                  "IdeaVault transformed how I capture and develop ideas. I went from scattered notes to actionable plans.",
                avatar:
                  "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
              },
              {
                name: "Marcus Johnson",
                role: "Product Manager, Startup Co.",
                quote:
                  "The AI expansion feature is a game-changer. It helps me think through ideas from every angle.",
                avatar:
                  "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
              },
              {
                name: "Elena Rodriguez",
                role: "Entrepreneur & Investor",
                quote:
                  "Finally a tool that matches the speed of my ideas. Clean, simple, and incredibly useful.",
                avatar:
                  "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg",
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="p-8 rounded-xl border border-slate-200 bg-white hover:shadow-lg transition"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-slate-900 text-slate-900"
                    />
                  ))}
                </div>
                <p className="text-slate-600 mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-slate-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50"
      >
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-slate-900 font-display">
              Simple Pricing
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Choose the plan that fits your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Free",
                price: "Free",
                period: "",
                description: "Get started",
                features: [
                  "Max 10 ideas",
                  "Basic capture",
                  "Limited categories",
                  "No AI expand",
                  "No scoring",
                  "No export",
                ],
                cta: "Get Started",
                popular: false,
                highlight: false,
              },
              {
                name: "Premium",
                price: "₹199",
                period: "/month",
                description: "For builders",
                features: [
                  "Unlimited ideas",
                  "AI Expand",
                  "AI Scoring",
                  "Feasibility check",
                  "PDF export",
                  "Task board",
                  "Daily reminders",
                ],
                cta: "Start Free Trial",
                popular: true,
                highlight: true,
              },
              {
                name: "Pro",
                price: "₹499",
                period: "/month",
                description: "Power users",
                features: [
                  "Everything in Premium",
                  "Voice-to-text",
                  "Offline mode",
                  "Priority support",
                  "Collaboration (coming)",
                  "Advanced analytics",
                  "Custom integrations",
                ],
                cta: "Start Free Trial",
                popular: false,
                highlight: false,
              },
              {
                name: "Lifetime",
                price: "₹1,299",
                period: "one-time",
                description: "Forever access",
                features: [
                  "All Pro features",
                  "Lifetime updates",
                  "No recurring charges",
                  "Priority support",
                  "Exclusive community",
                  "Early access features",
                  "Cancel anytime*",
                ],
                cta: "Get Lifetime",
                popular: false,
                highlight: false,
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`rounded-2xl p-8 transition relative ${
                  plan.highlight
                    ? "border-2 border-slate-900 shadow-2xl bg-white"
                    : "border border-slate-200 bg-white hover:shadow-lg hover:border-slate-300"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-slate-900 to-slate-700 text-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-slate-900 mb-2 font-display">
                  {plan.name}
                </h3>
                <p className="text-slate-600 text-sm mb-6">
                  {plan.description}
                </p>
                <div className="mb-8">
                  <span className="text-5xl font-bold text-slate-900 font-display">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-slate-600 ml-2 text-sm">
                      {plan.period}
                    </span>
                  )}
                </div>
                <Button
                  className={`w-full mb-8 font-semibold ${
                    plan.highlight
                      ? "bg-slate-900 hover:bg-slate-800 text-white"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-900"
                  }`}
                >
                  {plan.cta}
                </Button>
                <ul className="space-y-3">
                  {plan.features.map((feature, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-slate-600 text-sm"
                    >
                      <Check className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 border-t border-slate-200 pt-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 font-display mb-2">
                Team Bundle
              </h3>
              <p className="text-slate-600">
                Perfect for small teams and agencies
              </p>
            </div>
            <div className="bg-white border-2 border-slate-900 rounded-2xl p-8 max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-3xl font-bold text-slate-900 mb-4 font-display">
                    ₹999<span className="text-lg text-slate-600">/month</span>
                  </h4>
                  <p className="text-slate-600 mb-6">For 5 users</p>
                  <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold">
                    Start Free Trial
                  </Button>
                </div>
                <div>
                  <ul className="space-y-3">
                    {[
                      "Everything in Pro",
                      "Shared ideas workspace",
                      "Shared task board",
                      "Team backup & export",
                      "Perfect for agencies",
                      "5 team members included",
                    ].map((feature, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-3 text-slate-600"
                      >
                        <Check className="w-5 h-5 text-slate-900 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <Shield className="w-8 h-8 text-slate-900 mx-auto" />
              <h4 className="font-bold text-slate-900">Bank-Level Security</h4>
              <p className="text-sm text-slate-600">End-to-end encrypted</p>
            </div>
            <div className="space-y-2">
              <Lightning className="w-8 h-8 text-slate-900 mx-auto" />
              <h4 className="font-bold text-slate-900">Lightning Fast</h4>
              <p className="text-sm text-slate-600">Built for speed</p>
            </div>
            <div className="space-y-2">
              <Zap className="w-8 h-8 text-slate-900 mx-auto" />
              <h4 className="font-bold text-slate-900">Cross-Platform</h4>
              <p className="text-sm text-slate-600">Web, iOS, Android</p>
            </div>
            <div className="space-y-2">
              <Star className="w-8 h-8 text-slate-900 mx-auto" />
              <h4 className="font-bold text-slate-900">Trusted by 5000+</h4>
              <p className="text-sm text-slate-600">Creators worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold font-display">
            Your next great idea is waiting.
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Join thousands of creators and entrepreneurs capturing and building
            on their ideas every day.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-6 text-base rounded-lg flex items-center gap-2">
              Start for Free <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              className="px-8 py-6 text-base rounded-lg bg-slate-800 border-white text-white hover:bg-white hover:text-slate-800"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 pb-12 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Feather className="w-5 h-5 text-white" />
                <span className="text-lg font-bold text-white font-display">
                  IdeaVault
                </span>
              </div>
              <p className="text-sm">
                Capture, organize, and execute your best ideas.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#features" className="hover:text-white transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white transition">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Follow</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>© 2024 IdeaVault. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Check({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}
