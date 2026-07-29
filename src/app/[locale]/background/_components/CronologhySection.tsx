"use client";

import React from "react";

import Timeline from "@/components/miscellaneous/Timeline";
import Modal from "@/components/miscellaneous/Modal";
import { useModalStore } from "@/store/useModalStore";
import { useTranslation } from "react-i18next";

const CronologhySection = () => {
  const { isOpen, hideWindow, title, children, endContent } = useModalStore();
  const { t } = useTranslation();
  const timedata = [
    {
      id: 0,
      time_range: "09/2019 - 06/2021",
      title: t("timeline-1-t", { ns: "background" }),
      description: t("timeline-1-d", { ns: "background" }),
      more_info: [
        t("more-info-1-1", { ns: "background" }),
        t("more-info-1-2", { ns: "background" }),
      ],
      company_logo_src: "/icons/companies/gdsc.webp",
      more: "https://www.inf.upv.es/www/etsinf/ca/200-estudiantes-de-la-etsinf-asisten-a-la-presentacion-del-developer-student-club-dsc/",
      tech_icons: [
        "/icons/tech/torch.webp",
        "/icons/tech/keras.webp",
        "/icons/tech/scikit.webp",
        "/icons/tech/python.webp",
        "/icons/tech/js.webp",
        "/icons/tech/docker.webp",
        "/icons/tech/github.webp",
      ],
      externalLinks: [
        { id: "instagram", href: "https://www.instagram.com/gdsc_upv/" },
        {
          id: "link",
          href: "https://www.inf.upv.es/www/etsinf/ca/200-estudiantes-de-la-etsinf-asisten-a-la-presentacion-del-developer-student-club-dsc/",
        },
      ],
    },
    {
      id: 1,
      time_range: "09/2020 - 08/2021",
      title: t("timeline-2-t", { ns: "background" }),
      description: t("timeline-2-d", { ns: "background" }),
      more_info: [
        t("more-info-2-1", { ns: "background" }),
        t("more-info-2-2", { ns: "background" }),
        t("more-info-2-3", { ns: "background" }),
      ],
      company_logo_src: "/icons/companies/datamaran.webp",
      more: "https://www.datamaran.com/",
      tech_icons: [
        "/icons/tech/torch.webp",
        "/icons/tech/keras.webp",
        "/icons/tech/scikit.webp",
        "/icons/tech/python.webp",
        "/icons/tech/pandas.webp",
        "/icons/tech/numpy.webp",
        "/icons/tech/huggingface.webp",
        "/icons/tech/pillow.webp",
        "/icons/tech/scrapy.webp",
        "/icons/tech/aws.webp",
        "/icons/tech/vue.webp",
        "/icons/tech/mongodb.webp",
      ],
      externalLinks: [{ id: "link", href: "https://www.datamaran.com/" }],
    },
    {
      id: 2,
      time_range: "12/2022 - 03/2023",
      title: t("timeline-3-t", { ns: "background" }),
      description: t("timeline-3-d", { ns: "background" }),
      more_info: [
        t("more-info-3-1", { ns: "background" }),
        t("more-info-3-2", { ns: "background" }),
        t("more-info-3-3", { ns: "background" }),
      ],
      company_logo_src: "/icons/companies/grifenix.webp",
      more: "",
      tech_icons: [
        "/icons/tech/aws.webp",
        "/icons/tech/vue.webp",
        "/icons/tech/nextjs.webp",
        "/icons/tech/postgresql.webp",
        "/icons/tech/pillow.webp",
        "/icons/tech/drf.webp",
        "/icons/tech/solidity.webp",
        "/icons/tech/hardhat.webp",
        "/icons/tech/ganache.webp",
        "/icons/tech/alchemy.webp",
        "/icons/tech/heroku.webp",
        "/icons/tech/figma.webp",
      ],
      externalLinks: [
        { id: "github", href: "https://github.com/Grifenix-com" },
        { id: "instagram", href: "https://www.instagram.com/grifenix/" },
      ],
    },
    {
      id: 4,
      time_range: "01/2023 - 03/2024",
      title: t("timeline-6-t", { ns: "background" }),
      description: t("timeline-6-d", { ns: "background" }),
      more_info: [
        t("more-info-6-1", { ns: "background" }),
        t("more-info-6-2", { ns: "background" }),
        t("more-info-6-3", { ns: "background" }),
        t("more-info-6-4", { ns: "background" }),
      ],
      company_logo_src: "/icons/companies/lanzadera.webp",
      tech_icons: [
        "/icons/tech/aws.webp",
        "/icons/tech/nextjs.webp",
        "/icons/tech/figma.webp",
        "/icons/tech/excel.webp",
        "/icons/tech/notion.webp",
        "/icons/tech/hubspot.webp",
        "/icons/tech/slack.webp",
      ],
      externalLinks: [
        {
          id: "instagram",
          href: "https://www.instagram.com/lanzadera.es/?hl=es",
        },
        { id: "link", href: "https://lanzadera.es/" },
      ],
    },
    {
      id: 3,
      time_range: "03/2023 - 03/2024",
      title: t("timeline-4-t", { ns: "background" }),
      description: t("timeline-4-d", { ns: "background" }),
      more_info: [
        t("more-info-4-1", { ns: "background" }),
        t("more-info-4-2", { ns: "background" }),
        t("more-info-4-3", { ns: "background" }),
        t("more-info-4-4", { ns: "background" }),
      ],
      company_logo_src: "/icons/companies/essenfy.webp",
      tech_icons: [
        "/icons/tech/aws.webp",
        "/icons/tech/nextjs.webp",
        "/icons/tech/figma.webp",
        "/icons/tech/postgresql.webp",
        "/icons/tech/pillow.webp",
        "/icons/tech/drf.webp",
        "/icons/tech/tailwind.webp",
        "/icons/tech/torch.webp",
        "/icons/tech/scikit.webp",
      ],
      externalLinks: [
        { id: "github", href: "https://github.com/Essenfy" },
        { id: "instagram", href: "https://www.instagram.com/essenfy/" },
      ],
    },
    {
      id: 4,
      time_range: "03/2024 - 10/2024",
      title: t("timeline-7-t", { ns: "background" }),
      description: t("timeline-7-d", { ns: "background" }),
      more_info: [
        t("more-info-7-1", { ns: "background" }),
        t("more-info-7-2", { ns: "background" }),
        t("more-info-7-3", { ns: "background" }),
      ],
      company_logo_src: "/icons/companies/falquor_logo.webp",
      tech_icons: [
        "/icons/tech/aws.webp",
        "/icons/tech/litestar.webp",
        "/icons/tech/nextjs.webp",
        "/icons/tech/postgresql.webp",
        "/icons/tech/drf.webp",
        "/icons/tech/docker.webp",
        "/icons/tech/redis.webp",
        "/icons/tech/rabbitmq.webp",
        "/icons/tech/celery.webp",
        "/icons/tech/figma.webp",
        "/icons/tech/tailwind.webp",
        "/icons/tech/github.webp",
        "/icons/tech/openai.webp",
      ],
      externalLinks: [
        { id: "github", href: "https://github.com/Essenfy" },
        { id: "instagram", href: "https://www.instagram.com/essenfy/" },
      ],
    },
    {
      id: 5,
      time_range: "12/2024 - 03/2026",
      title: t("timeline-8-t", { ns: "background" }),
      description: t("timeline-8-d", { ns: "background" }),
      more_info: [
        t("more-info-8-1", { ns: "background" }),
        t("more-info-8-2", { ns: "background" }),
        t("more-info-8-3", { ns: "background" }),
        t("more-info-8-4", { ns: "background" }),
        t("more-info-8-5", { ns: "background" }),
        t("more-info-8-6", { ns: "background" }),
        t("more-info-8-7", { ns: "background" }),
      ],
      company_logo_src: "/icons/companies/pnp.webp",
      tech_icons: [
        "/icons/tech/aws.webp",
        "/icons/tech/postgresql.webp",
        "/icons/tech/drf.webp",
        "/icons/tech/docker.webp",
        "/icons/tech/redis.webp",
        "/icons/tech/rabbitmq.webp",
        "/icons/tech/celery.webp",
        "/icons/tech/elasticsearch.webp",
        "/icons/tech/salesforce.webp",
        "/icons/tech/eventbrite.webp",
        "/icons/tech/crunchbase.webp",
        "/icons/tech/github.webp",
        "/icons/tech/openai.webp",
      ],
      externalLinks: [
        { id: "github", href: "https://github.com/Essenfy" },
        { id: "instagram", href: "https://www.instagram.com/essenfy/" },
      ],
    },
  ];

  return (
    <div className="relative w-full flex justify-center px-5 bg-[var(--background-22)]">
      <div className="relative gap-10 w-full max-w-screen-xl">
        <Timeline timedata={timedata} />
      </div>
      <Modal
        isOpen={isOpen}
        onClose={hideWindow}
        title={title}
        endContent={endContent}
        isCloseBtnDefault
        isCloseBtn
        isMobileVersion
      >
        {children}
      </Modal>
    </div>
  );
};

export default CronologhySection;
