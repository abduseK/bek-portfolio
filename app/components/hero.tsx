"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Linkedin, Send, Twitter, Instagram, X, Download } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const [isCVOpen, setIsCVOpen] = useState(false);
  const skills = [
    "Python",
    "TypeScript",
    "Odoo ERP",
    "Django",
    "FastAPI",
    "PostgreSQL",
    "Docker",
    "AWS",
    "Microservices",
  ];
  const cvUrl = "/CV.pdf";

  return (
    <section className="pt-32 pb-20 mx-auto max-w-6xl py-12 px-10 sm:px-0">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <h1 className="text-5xl mb-6 md:text-7xl font-serif leading-[0.85] md:leading-[0.8] tracking-tighter">
            Bereket Atakilt <br />
            <span className="italic text-gray-500 font-light text-2xl md:text-4xl inline-block mt-2">
              Developer & Creative Writer
            </span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
            I am a{" "}
            <strong className="text-white">
              Tech Lead and Backend Engineer
            </strong>{" "}
            with a strong foundation in Computer Science from{" "}
            <strong className="text-white">Addis Ababa University</strong> and
            extensive experience building and maintaining scalable backend
            systems.
            <br />
            <br />
            My work centers on designing robust architectures, developing secure
            and high-performance APIs, and working deeply with databases, cloud
            infrastructure, and backend frameworks. I have led backend
            development efforts across multiple products, making technical
            decisions that balance performance, maintainability, and business
            requirements.
            <br />
            <br />
            Currently, I work as a{" "}
            <strong className="text-white">
              Tech Lead and Backend Engineer at Cilondis
            </strong>
            and serve as a{" "}
            <strong className="text-white">
              Technology Consultant for the African Union Sports Council,
            </strong>{" "}
            where I contribute to system design, technical strategy, and
            long-term platform scalability. I collaborate closely with
            designers, product teams, and stakeholders to deliver reliable,
            production-ready solutions.
            <br />
            <br />I am driven by clean system design, clear documentation, and
            building technology that is practical, scalable, and built to last.
          </p>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-gray-500"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="relative w-full aspect-[4/5] md:aspect-square max-w-sm rounded-2xl overflow-hidden border border-white/10 p-2 bg-[#111]">
            <div className="relative w-full h-full rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <Image
                src="/bek.jpeg"
                alt="Ab Adam"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Centered Social Icons and Modal Trigger */}
          <div className="flex mt-8 gap-6 text-gray-500 items-center justify-center">
            {/* <a
              href="https://x.com/bek-apha"
              target="_blank"
              className="hover:text-white transition-colors"
            >
              <Twitter size={22} />
            </a> */}
            <a
              href="https://www.linkedin.com/in/bek3113/"
              target="_blank"
              className="hover:text-white transition-colors"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://t.me/beki_314"
              target="_blank"
              className="hover:text-white transition-colors"
            >
              <Send size={22} />
            </a>
            <a
              href="https://instagram.com/ibek2025"
              target="_blank"
              className="hover:text-white transition-colors"
            >
              <Instagram size={22} />
            </a>
            <button
              onClick={() => setIsCVOpen(true)}
              className="ml-2 px-4 py-2 bg-white text-black hover:bg-white/90 text-[10px] uppercase tracking-widest font-bold transition-all rounded-md h-fit leading-none flex items-center cursor-pointer"
            >
              View CV
            </button>
          </div>
        </motion.div>
      </div>

      {/* --- PDF MODAL --- */}
      <AnimatePresence>
        {isCVOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCVOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative h-[90vh] w-full max-w-5xl overflow-hidden rounded-xl border border-white/10 bg-[#111] cursor-default shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-white/5 bg-[#161616] px-6 py-4">
                <h3 className="font-serif italic text-white text-lg">
                  Curriculum Vitae
                </h3>
                <div className="flex items-center gap-6">
                  <a
                    href={cvUrl}
                    download
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-[10px] uppercase tracking-widest"
                  >
                    <Download size={16} /> Download
                  </a>
                  <button
                    onClick={() => setIsCVOpen(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>

              {/* PDF Viewer */}
              <div className="h-[calc(90vh-64px)] w-full bg-zinc-800">
                <iframe
                  src={`${cvUrl}#view=FitH`}
                  className="h-full w-full border-none"
                  title="PDF Viewer"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
