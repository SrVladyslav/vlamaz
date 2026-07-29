"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { FaArrowRight } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const PointsBackground = dynamic(
  () => import("@/components/miscellaneous/PointsBackground"),
  { ssr: false },
);

import { LazyMotion, domAnimation, m as motion } from "framer-motion";

const LetsTalk = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <div
      className="relative w-full flex justify-center bg-[var(--background-2)]
        border-b-[1px] border-b-[var(--background)] select-none
    "
    >
      <PointsBackground color={theme == "dark" ? "#0055ff" : "#aeaeb3"} />
      <div
        // ref={viewRef}
        className="z-[100] relative w-full max-w-screen-md px-5 
                sm:px-10 py-32 sm:py-40 tracking-wider
                flex flex-col gap-8 items-center justify-center
            "
      >
        <LazyMotion features={domAnimation}>
          <motion.h3
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative font-medium text-[var(--foreground-5)]
                        text-4xl md:text-5xl text-center
                    "
          >
            <div className="relative w-full flex justify-center pb-5">
              <Image
                src="/images/vlamaz.webp"
                alt="Logo"
                width={96}
                height={96}
                className="h-24 w-24 min-h-24 min-w-24"
              />
            </div>
            {t("contact-1", { ns: "misc" })}
            <span className="text-[var(--yellow)] font-semibold">
              {t("contact-2", { ns: "misc" })}
            </span>
            {t("contact-3", { ns: "misc" })}
            <span className="text-[var(--yellow)] font-semibold">
              {t("contact-4", { ns: "misc" })}
            </span>
            {t("contact-5", { ns: "misc" })}
            <span className="text-[var(--yellow)] font-semibold">
              {t("contact-6", { ns: "misc" })}
            </span>
            {t("contact-7", { ns: "misc" })}
          </motion.h3>
        </LazyMotion>
        <LazyMotion features={domAnimation}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="relative w-full flex justify-center"
          >
            <Button
              asChild
              variant="solid"
              size="lg"
              className="text-[var(--foreground)] font-medium bg-transparent group duration-75
                            bg-[var(--background-2)] hover:text-[var(--foreground-2)] tracking-wider
                            border-[2px] border-[var(--foreground-2)] hover:border-[var(--foreground-2)]
                        "
            >
              <Link href="/contact">
                <span>{t("contact-8", { ns: "misc" })}</span>
                <FaArrowRight className="icon-mini mt-[0px] duration-75 fill-[var(--foreground)] group-hover:fill-[var(--foreground-2)]" />
              </Link>
            </Button>
          </motion.div>
        </LazyMotion>
      </div>
    </div>
  );
};

export default LetsTalk;
