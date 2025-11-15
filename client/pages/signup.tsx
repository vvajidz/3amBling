"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

export default function AuthPage() {
  const [mode, setMode] = useState<"login" | "signup">("login");

  const switchMode = () => {
    setMode((prev) => (prev === "login" ? "signup" : "login"));
  };

  const isLogin = mode === "login";

  return (
    <motion.main
      className="min-h-screen w-full bg-white flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className="w-full max-w-lg bg-white border border-[rgba(10,15,44,0.12)] rounded-2xl p-6 sm:p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-semibold text-[#0a0f2c]">
            {isLogin ? "Welcome back" : "Create your account"}
          </h1>

          <button
            onClick={switchMode}
            className="text-sm underline-offset-4 underline text-[#0a0f2c]"
          >
            {isLogin ? "Signup" : "Login"}
          </button>
        </div>

        {/* Animated Sliding Container */}
        <div className="relative overflow-hidden w-full">
          <motion.div
            className="flex w-[200%]"
            animate={{ x: isLogin ? "0%" : "-50%" }}
            transition={{ type: "spring", stiffness: 220, damping: 28 }}
          >
            {/* LOGIN FORM */}
            <motion.div
              className="w-1/2 pr-3"
              animate={{ scale: isLogin ? 1 : 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <AuthForm mode="login" />
            </motion.div>

            {/* SIGNUP FORM */}
            <motion.div
              className="w-1/2 pl-3"
              animate={{ scale: isLogin ? 0.98 : 1 }}
              transition={{ duration: 0.2 }}
            >
              <AuthForm mode="signup" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.main>
  );
}

function AuthForm({ mode }: { mode: "login" | "signup" }) {
  const isLogin = mode === "login";

  return (
    <form className="space-y-5">
      {/* Fields */}
      <div className="space-y-4">
        {mode === "signup" && (
          <FloatingInput id="name" label="Full name" type="text" />
        )}
        <FloatingInput id="email" label="Email" type="email" />
        <FloatingInput id="password" label="Password" type="password" />
      </div>

      {/* Extra */}
      {isLogin && (
        <div className="text-xs text-[#0a0f2c]/60 underline-offset-4 underline">
          Forgot password?
        </div>
      )}

      {/* Button */}
      <motion.button
        type="submit"
        className="w-full py-2.5 rounded-lg text-white bg-[#0a0f2c] text-sm font-medium"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.12 }}
      >
        {isLogin ? "Login" : "Create Account"}
      </motion.button>
    </form>
  );
}

function FloatingInput({
  id,
  label,
  type,
}: {
  id: string;
  label: string;
  type: string;
}) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");

  const floating = focused || value.length > 0;

  return (
    <div className="relative w-full">
      <label
        htmlFor={id}
        className={`absolute left-3 transition-all duration-150 text-[#0a0f2c]/50 pointer-events-none ${
          floating ? "top-1 text-xs" : "top-3 text-sm"
        }`}
      >
        {label}
      </label>

      <input
        id={id}
        type={type}
        className="w-full border border-[rgba(10,15,44,0.2)] rounded-lg px-3 pt-5 pb-2 text-sm text-[#0a0f2c] bg-white focus:outline-none"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
