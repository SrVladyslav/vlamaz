"use client";

import React, { useState, useMemo } from "react";
import { Loader2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/extendui/input";
import { Button } from "@/components/ui/button";

import { useTranslation } from "react-i18next";
import { sendEmailToVlad } from "@/actions/emailVladAction";

import { useForm, Controller, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { contactSchema } from "@/schemas/contactSchema";

const ContactForm = () => {
  const { t } = useTranslation();

  const serviceTypes = useMemo(
    () => [
      { label: t("service_type_1", { ns: "contact" }), value: "JUST_MEETING" },
      { label: t("service_type_3", { ns: "contact" }), value: "MENTORING" },
      // {label: t('service_type_2', {ns:'contact'}), value:"HIRING"},
    ],
    [t],
  );
  const projectTypes = useMemo(
    () => [
      { label: t("project_type_1", { ns: "contact" }), value: "STARTUP-FT" },
      { label: t("project_type_2", { ns: "contact" }), value: "COMPANY-FT" },
      // {label: t('project_type_3', {ns:'contact'}), value:"STARTUP-PT"},
      // {label: t('project_type_4', {ns:'contact'}), value:"COMPANY-PT"}
    ],
    [t],
  );
  const subjectTypes = useMemo(
    () => [
      { label: t("ml", { ns: "contact" }), value: "ML" },
      { label: t("da", { ns: "contact" }), value: "DA" },
      { label: t("bd", { ns: "contact" }), value: "BACK-DEV" },
      { label: t("fd", { ns: "contact" }), value: "FRONT-DEV" },
      { label: t("sm", { ns: "contact" }), value: "SALES-MARK" },
    ],
    [t],
  );

  const [subjectType, setSubjectType]: any = useState(null);
  const [isLoadingBtn, setIsLoadingBtn] = useState(false);

  const { register, control, handleSubmit, formState, reset } = useForm({
    resolver: zodResolver(contactSchema),
  });
  const serviceTypeWatch = useWatch({ control, name: "service_type" });
  const { errors } = formState;
  const labelByValue = (array: any, val: any) => {
    return array.find((v: any) => v.value === val)?.label || "-";
  };
  const handleContact = async (formInfo: any) => {
    setIsLoadingBtn(true);
    const {
      email,
      name,
      service_type,
      project_type,
      mentoring_type,
      description,
      budget,
    } = formInfo;
    const data = {
      name: name,
      email: email,
      budget: budget,
      description: description,
      service_type: labelByValue(serviceTypes, service_type),
      project_type: labelByValue(projectTypes, project_type),
      mentoring_type: labelByValue(subjectTypes, mentoring_type),
    };

    await sendEmailToVlad(data)
      .then((res) => {
        setIsLoadingBtn(false);
        if (res.success) {
          toast.success("Tu mensaje se envió correctamente!");
          reset();
        } else {
          toast.error(
            "It vas imposible to send your email, please, try again or contact me on Linkedin.",
          );
        }
      })
      .catch(() => {
        toast.error(
          "It vas imposible to send your email, please, try again or contact me on Linkedin.",
        );
        setIsLoadingBtn(false);
      });
    setIsLoadingBtn(false);
  };

  return (
    <form
      className="relative grid grid-cols-2 gap-5 w-full md:max-w-[450px] duration-100"
      onSubmit={handleSubmit(handleContact)}
    >
      <Input
        type="text"
        variant={"filled"}
        label={t("name", { ns: "contact" })}
        className="col-span-2 sm:col-span-1"
        disabled={isLoadingBtn}
        {...register("name")}
        error={!!errors.name}
        textError={errors.name?.message as string}
        required
      />
      <Controller
        render={({ field }) => (
          <Select
            value={field.value}
            onValueChange={field.onChange}
            disabled={isLoadingBtn}
          >
            <SelectTrigger
              label={t("service_type", { ns: "contact" })}
              required
              error={!!errors.service_type}
              className="col-span-2 sm:col-span-1"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {serviceTypes.map((sType) => (
                <SelectItem key={sType.value} value={sType.value}>
                  {sType.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
        control={control}
        name="service_type"
        defaultValue={"JUST_MEETING"}
      />
      {serviceTypeWatch == "MENTORING" ? (
        <>
          <Controller
            render={({ field }) => (
              <Select
                value={field.value}
                onValueChange={field.onChange}
                disabled={isLoadingBtn}
              >
                <SelectTrigger
                  label={t("project_type", { ns: "contact" })}
                  required
                  error={!!errors.project_type}
                  className="col-span-2 sm:col-span-1"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {projectTypes.map((pType) => (
                    <SelectItem key={pType.value} value={pType.value}>
                      {pType.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
            control={control}
            name="project_type"
            defaultValue={"STARTUP-FT"}
          />
          <Input
            type="text"
            variant={"filled"}
            label={t("budget", { ns: "contact" })}
            className="col-span-2 sm:col-span-1"
            disabled={isLoadingBtn}
            {...register("budget")}
            error={!!errors.budget}
            textError={errors.budget?.message as string}
          />
          <Controller
            render={({ field }) => (
              <Select
                value={field.value}
                onValueChange={field.onChange}
                disabled={isLoadingBtn}
              >
                <SelectTrigger
                  label={t("mentoring_area", { ns: "contact" })}
                  required
                  error={!!errors.mentoring_type}
                  className="col-span-2 sm:col-span-2"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {subjectTypes.map((sType) => (
                    <SelectItem key={sType.value} value={sType.value}>
                      {sType.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
            control={control}
            name="mentoring_type"
            defaultValue={"ML"}
          />
        </>
      ) : (
        serviceTypeWatch == "HIRING" && (
          <Select value={subjectType} onValueChange={setSubjectType}>
            <SelectTrigger
              label={t("mentoring_area", { ns: "contact" })}
              required
              error={!!errors.mentoring_type}
              className="col-span-2 sm:col-span-2"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {subjectTypes.map((sType) => (
                <SelectItem key={sType.value} value={sType.value}>
                  {sType.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )
      )}

      <Input
        type="email"
        variant={"filled"}
        label={t("email", { ns: "contact" })}
        className="col-span-2 sm:col-span-1 duration-100"
        disabled={isLoadingBtn}
        {...register("email")}
        error={!!errors.email}
        textError={errors.email?.message as string}
        required
      />
      <Textarea
        label={t("details", { ns: "contact" })}
        className="w-full col-span-2 duration-100"
        disabled={isLoadingBtn}
        {...register("description")}
        error={!!errors.description}
        textError={errors.description?.message as string}
      />
      <div className="relative w-full flex justify-center col-span-2 duration-100">
        <Button
          variant="solid"
          size="lg"
          disabled={isLoadingBtn}
          className="text-[var(--foreground)] font-medium bg-transparent
                    bg-[var(--btn-cta)] text-[white] w-full
                    hover:text-[var(--black)]"
          type="submit"
        >
          {isLoadingBtn ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            t("send", "contact")
          )}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
