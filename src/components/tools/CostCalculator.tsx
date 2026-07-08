"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  webTypes,
  features,
  formatRupiah,
  WA_NUMBER,
} from "@/lib/calculator-data";

const EASE = [0.16, 1, 0.3, 1] as const;

const CostCalculator = () => {
  const [typeId, setTypeId] = useState<string>("toko");
  const [selected, setSelected] = useState<string[]>(["checkout-wa"]);

  const toggleFeature = (id: string) =>
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );

  const { webType, chosen, min, max } = useMemo(() => {
    const webType = webTypes.find((t) => t.id === typeId) ?? webTypes[0];
    const chosen = features.filter((f) => selected.includes(f.id));
    const addOns = chosen.reduce((sum, f) => sum + f.price, 0);
    const base = webType.basePrice + addOns;
    // Rentang: estimasi bawah = base, atas = +20% (buffer kompleksitas).
    return {
      webType,
      chosen,
      min: base,
      max: Math.round((base * 1.2) / 100000) * 100000,
    };
  }, [typeId, selected]);

  const waHref = useMemo(() => {
    const fiturText =
      chosen.length > 0
        ? chosen.map((f) => `- ${f.name}`).join("\n")
        : "- (tanpa fitur tambahan)";
    const msg =
      `Halo Lini Karya, saya sudah pakai kalkulator biaya di website Anda.\n\n` +
      `Jenis Website: ${webType.name}\n` +
      `Fitur Tambahan:\n${fiturText}\n\n` +
      `Estimasi: ${formatRupiah(min)} – ${formatRupiah(max)}\n\n` +
      `Saya ingin konsultasi gratis untuk memastikan kebutuhan saya.`;
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  }, [webType, chosen, min, max]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-foreground/10 border border-foreground/10">
      {/* KIRI: Pilihan */}
      <div className="lg:col-span-7 bg-background p-8 md:p-12 space-y-16">
        {/* Jenis Website */}
        <div>
          <div className="flex items-baseline gap-4 mb-8">
            <span className="font-display text-3xl tracking-tighter text-accent">
              01
            </span>
            <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tighter">
              Jenis Website
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {webTypes.map((t) => {
              const active = t.id === typeId;
              return (
                <button
                  key={t.id}
                  onClick={() => setTypeId(t.id)}
                  aria-pressed={active}
                  className={`text-left p-6 border transition-all duration-300 ${
                    active
                      ? "bg-foreground text-background border-foreground"
                      : "bg-background border-foreground/15 hover:border-accent"
                  }`}
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-display text-xl uppercase tracking-tighter">
                      {t.name}
                    </span>
                    <span
                      className={`font-mono text-[10px] ${
                        active ? "text-accent" : "opacity-30"
                      }`}
                    >
                      {active ? "[✓]" : "[ ]"}
                    </span>
                  </div>
                  <p
                    className={`font-mono text-[10px] leading-relaxed ${
                      active ? "opacity-70" : "opacity-50"
                    }`}
                  >
                    {t.desc}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Fitur Tambahan */}
        <div>
          <div className="flex items-baseline gap-4 mb-8">
            <span className="font-display text-3xl tracking-tighter text-accent">
              02
            </span>
            <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tighter">
              Fitur Tambahan
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((f) => {
              const active = selected.includes(f.id);
              return (
                <button
                  key={f.id}
                  onClick={() => toggleFeature(f.id)}
                  aria-pressed={active}
                  className={`text-left p-5 border transition-all duration-300 group ${
                    active
                      ? "border-accent bg-accent/5"
                      : "border-foreground/15 hover:border-foreground/40"
                  }`}
                >
                  <div className="flex justify-between items-start gap-3 mb-2">
                    <span className="font-mono text-[11px] uppercase tracking-widest font-bold leading-tight">
                      {f.name}
                    </span>
                    <span
                      className={`font-mono text-[10px] shrink-0 ${
                        active ? "text-accent" : "opacity-30"
                      }`}
                    >
                      {active ? "[✓]" : "[+]"}
                    </span>
                  </div>
                  <p className="font-mono text-[10px] leading-relaxed opacity-50 mb-2">
                    {f.desc}
                  </p>
                  <span className="font-mono text-[10px] text-accent">
                    +{formatRupiah(f.price)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* KANAN: Ringkasan (sticky) */}
      <div className="lg:col-span-5 bg-foreground text-background p-8 md:p-12">
        <div className="lg:sticky lg:top-28">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent font-bold block mb-8">
            Estimasi Investasi
          </span>

          <motion.div
            key={`${min}-${max}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="mb-10"
          >
            <div className="font-display text-3xl md:text-4xl lg:text-5xl tracking-tighter leading-none">
              {formatRupiah(min)}
            </div>
            <div className="font-mono text-[10px] uppercase tracking-widest opacity-40 my-2">
              sampai
            </div>
            <div className="font-display text-3xl md:text-4xl lg:text-5xl tracking-tighter leading-none text-accent">
              {formatRupiah(max)}
            </div>
          </motion.div>

          {/* Rincian */}
          <div className="space-y-3 py-8 border-y border-background/15 mb-8">
            <div className="flex justify-between font-mono text-[10px] uppercase tracking-widest">
              <span className="opacity-50">{webType.name}</span>
              <span>{formatRupiah(webType.basePrice)}</span>
            </div>
            {chosen.map((f) => (
              <div
                key={f.id}
                className="flex justify-between font-mono text-[10px] uppercase tracking-widest"
              >
                <span className="opacity-50">{f.name}</span>
                <span className="text-accent">+{formatRupiah(f.price)}</span>
              </div>
            ))}
          </div>

          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 w-full font-mono text-[10px] uppercase tracking-widest bg-accent text-background px-6 py-5 font-bold hover:bg-background hover:text-foreground transition-colors duration-500 mb-4"
          >
            [ KONSULTASI GRATIS VIA WHATSAPP ]
            <span className="group-hover:translate-x-1 transition-transform">
              ↗
            </span>
          </a>
          <p className="font-mono text-[9px] uppercase tracking-widest opacity-40 leading-relaxed text-center">
            Estimasi awal, bukan penawaran final. Sudah termasuk domain &amp;
            hosting tahun pertama. Harga pasti setelah konsultasi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CostCalculator;
