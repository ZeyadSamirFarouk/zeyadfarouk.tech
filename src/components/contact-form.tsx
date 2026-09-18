"use client";

import type { ChangeEvent, FormEvent, ReactNode } from "react";
import { useMemo, useState } from "react";
import {
  budgetOptions,
  brand,
  serviceOptions,
  timelineOptions,
} from "@/data/site-content";

type FormValues = {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  brief: string;
  contactMethod: string;
};

const initialValues: FormValues = {
  name: "",
  email: "",
  company: "",
  service: "",
  budget: "",
  timeline: "",
  brief: "",
  contactMethod: "email",
};

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`طلب مشروع جديد - ${values.service || "تصميم"}`);
    const body = encodeURIComponent(
      [
        `الاسم: ${values.name}`,
        `البريد: ${values.email}`,
        `الشركة/العلامة: ${values.company}`,
        `الخدمة: ${values.service}`,
        `الميزانية: ${values.budget}`,
        `المدة: ${values.timeline}`,
        `طريقة التواصل المفضلة: ${values.contactMethod}`,
        "",
        "نبذة المشروع:",
        values.brief,
      ].join("\n")
    );

    return `mailto:${brand.email}?subject=${subject}&body=${body}`;
  }, [values]);

  const handleChange =
    (field: keyof FormValues) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setValues((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const validate = () => {
    const nextErrors: Partial<Record<keyof FormValues, string>> = {};
    if (!values.name.trim()) nextErrors.name = "اكتب اسمك";
    if (!values.email.trim()) nextErrors.email = "اكتب البريد الإلكتروني";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "البريد الإلكتروني غير صالح";
    }
    if (!values.service) nextErrors.service = "اختر الخدمة";
    if (!values.budget) nextErrors.budget = "اختر نطاق الميزانية";
    if (!values.timeline) nextErrors.timeline = "اختر المدة المتوقعة";
    if (values.brief.trim().length < 30) {
      nextErrors.brief = "اكتب نبذة أوضح (30 حرف على الأقل)";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("idle");
    if (!validate()) return;

    setStatus("success");
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5 rounded-3xl border border-white/10 bg-zinc-900/40 p-6 sm:p-8">
      <p className="text-sm text-zinc-400">
        النموذج يعمل محليًا بأمان دون إرسال تلقائي. بعد التحقق يمكنك إرسال نفس التفاصيل عبر البريد.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="الاسم الكامل" error={errors.name}>
          <input
            value={values.name}
            onChange={handleChange("name")}
            className="input"
            autoComplete="name"
          />
        </Field>
        <Field label="البريد الإلكتروني" error={errors.email}>
          <input
            value={values.email}
            onChange={handleChange("email")}
            type="email"
            className="input"
            autoComplete="email"
          />
        </Field>
        <Field label="الشركة / العلامة" error={errors.company}>
          <input
            value={values.company}
            onChange={handleChange("company")}
            className="input"
            autoComplete="organization"
          />
        </Field>
        <Field label="الخدمة المطلوبة" error={errors.service}>
          <select value={values.service} onChange={handleChange("service")} className="input">
            <option value="">اختر الخدمة</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field label="نطاق الميزانية" error={errors.budget}>
          <select value={values.budget} onChange={handleChange("budget")} className="input">
            <option value="">اختر الميزانية</option>
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field label="الإطار الزمني" error={errors.timeline}>
          <select value={values.timeline} onChange={handleChange("timeline")} className="input">
            <option value="">اختر المدة</option>
            {timelineOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="طريقة التواصل المفضلة" error={errors.contactMethod}>
        <div className="flex flex-wrap gap-2">
          {[
            { id: "email", label: "Email" },
            { id: "whatsapp", label: "WhatsApp" },
            { id: "call", label: "Call" },
          ].map((option) => (
            <label key={option.id} className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-zinc-700 px-3 py-2 text-sm text-zinc-200 transition hover:border-[--accent]">
              <input
                type="radio"
                name="contactMethod"
                value={option.id}
                checked={values.contactMethod === option.id}
                onChange={handleChange("contactMethod")}
              />
              {option.label}
            </label>
          ))}
        </div>
      </Field>

      <Field label="نبذة المشروع" error={errors.brief}>
        <textarea
          value={values.brief}
          onChange={handleChange("brief")}
          rows={5}
          className="input resize-y"
          placeholder="اكتب الأهداف، الجمهور المستهدف، والمخرجات المتوقعة"
        />
      </Field>

      <div className="flex flex-wrap items-center gap-3">
        <button type="submit" className="btn-primary">
          تحقق من الطلب
        </button>
        <a href={`mailto:${brand.email}`} className="btn-secondary">
          تواصل مباشر عبر البريد
        </a>
      </div>

      {status === "success" ? (
        <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-sm text-emerald-200">
          تم التحقق من بياناتك. الخطوة التالية: أرسل الطلب عبر البريد لضمان وصوله مباشرة.
          <div className="mt-3">
            <a href={mailtoHref} className="btn-secondary inline-flex border-emerald-300/40 text-emerald-100">
              فتح البريد مع التفاصيل
            </a>
          </div>
        </div>
      ) : null}
    </form>
  );
}

type FieldProps = {
  label: string;
  error?: string;
  children: ReactNode;
};

function Field({ label, error, children }: FieldProps) {
  return (
    <label className="space-y-2 text-sm text-zinc-200">
      <span>{label}</span>
      {children}
      {error ? <span className="text-xs text-rose-300">{error}</span> : null}
    </label>
  );
}
