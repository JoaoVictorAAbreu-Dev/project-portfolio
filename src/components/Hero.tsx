import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../motionVariants";

export function Hero() {
  const resumeUrl = `${import.meta.env.BASE_URL}curriculo-joao-victor.pdf`;

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="blob blob--purple -top-24 -left-24 hidden md:block" aria-hidden />
      <div className="blob blob--teal -bottom-24 -right-24 hidden md:block" aria-hidden />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="relative z-10"
          >
            <p className="inline-block rounded-full px-3 py-1 text-sm font-medium bg-[var(--color-primary-50)] text-[var(--color-primary-700)]">
              Olá — Prazer, eu sou João
            </p>

            <h1 className="mt-6 text-3xl md:text-5xl font-extrabold leading-tight">
              Construo backends e APIs claros, testáveis e prontos para produção.
            </h1>

            <p className="mt-4 text-base text-[var(--text-700)] max-w-xl">
              Foco em arquitetura, contratos bem definidos e soluções que mostram impacto — veja projetos com estudos de caso e setups reproduzíveis.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projetos"
                className="inline-flex items-center gap-2 btn btn--primary"
              >
                Ver projetos
              </a>

              <a
                href={resumeUrl}
                download
                className="inline-flex items-center gap-2 btn btn--ghost"
              >
                Baixar CV
              </a>
            </div>

            <div className="mt-8 flex gap-6 text-sm text-[var(--muted-700)]">
              <div>
                <div className="text-xs uppercase">Projetos selecionados</div>
                <div className="font-semibold">3 cases</div>
              </div>
              <div>
                <div className="text-xs uppercase">Stack</div>
                <div className="font-semibold">Java • Spring • TypeScript</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
            aria-hidden
          >
            {/* Mockup / image container */}
            <div className="relative w-full max-w-sm">
              <div className="rounded-2xl overflow-hidden bg-[var(--surface)] shadow-lg" style={{ boxShadow: 'var(--card-elev)' }}>
                <picture>
                  <source srcSet="/images/hero-mockup.avif" type="image/avif" />
                  <img
                    src="/images/hero-mockup.webp"
                    alt="Mockup dos projetos"
                    className="block w-full h-auto object-cover"
                    loading="lazy"
                  />
                </picture>
              </div>

              {/* subtle overlay */}
              <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-gradient-to-r from-[var(--color-primary-300)] to-[var(--accent-500)] opacity-20 blur-3xl pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
