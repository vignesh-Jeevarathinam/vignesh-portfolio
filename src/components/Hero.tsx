"use client";

import { motion } from "framer-motion";

import { personalInfo } from "@/data/personal";

import ProfileCard from "./ProfileCard";
import TechStackPills from "./TechStackPills";
import SocialLinks from "./SocialLinks";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20">
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          grid
          md:grid-cols-2
          gap-16
          items-center
        "
      >
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-blue-500 font-semibold"
          >
            AVAILABLE FOR OPPORTUNITIES
          </motion.p>

          <motion.h1
            initial={{ y: 40 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="
              text-5xl
              md:text-7xl
              font-bold
              mt-4
            "
          >
            {personalInfo.name}
          </motion.h1>

          <motion.h2
            initial={{ y: 40 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
            className="
              text-2xl
              md:text-3xl
              mt-4
              text-blue-500
            "
          >
            {personalInfo.role}
          </motion.h2>

          <p className="max-w-2xl mt-6 text-lg text-gray-500">
            {personalInfo.tagline}
          </p>

          <TechStackPills />

          <div className="flex gap-4 mt-8">
            <a
              href="#contact"
              className="
                px-6
                py-3
                rounded-xl
                bg-blue-600
                text-white
                font-semibold
              "
            >
              Contact Me
            </a>

            <a
              href="/resume/Vignesh_J_Resume.pdf"
              download
              className="
                px-6
                py-3
                rounded-xl
                border
                font-semibold
              "
            >
              Download Resume
            </a>
          </div>

          <SocialLinks />
        </div>

        <ProfileCard />
      </div>
    </section>
  );
}