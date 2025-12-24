"use client";

import React, { useEffect, useMemo, useState } from "react";
import { X, Send, Loader2 } from "lucide-react";

type Locale = "uz" | "ru" | "en";

function detectLocale(): Locale {
  if (typeof window === "undefined") return "uz";
  const p = window.location.pathname.split("/")[1];
  if (p === "uz" || p === "ru" || p === "en") return p;
  const htmlLang = (document.documentElement.lang || "").toLowerCase();
  if (htmlLang.startsWith("ru")) return "ru";
  if (htmlLang.startsWith("en")) return "en";
  return "uz";
}

const TXT = {
  uz: {
    title: "Telegramga so‘rov yuborish",
    subtitle: "Ma’lumotlaringizni qoldiring — biz tez orada bog‘lanamiz.",
    name: "Ismingiz",
    phone: "Telefon raqam",
    message: "Xabar (ixtiyoriy)",
    send: "Yuborish",
    sending: "Yuborilmoqda...",
    successTitle: "Yuborildi ✅",
    successDesc: "So‘rovingiz qabul qilindi. Tez orada aloqaga chiqamiz.",
    close: "Yopish",
    required: "Majburiy",
    placeholderName: "Masalan: Usmonjon",
    placeholderPhone: "+998 90 123 45 67",
    placeholderMsg: "Nima kerakligini qisqacha yozing...",
    errors: {
      name: "Ism kamida 2 ta harf bo‘lsin",
      phone: "Telefon raqam noto‘g‘ri ko‘rinmoqda",
      server: "Xatolik. Keyinroq qayta urinib ko‘ring.",
    },
  },
  ru: {
    title: "Отправить заявку в Telegram",
    subtitle: "Оставьте данные — мы скоро свяжемся.",
    name: "Ваше имя",
    phone: "Номер телефона",
    message: "Сообщение (необязательно)",
    send: "Отправить",
    sending: "Отправляем...",
    successTitle: "Отправлено ✅",
    successDesc: "Заявка принята. Мы свяжемся с вами в ближайшее время.",
    close: "Закрыть",
    required: "Обязательно",
    placeholderName: "Например: Усмонжон",
    placeholderPhone: "+998 90 123 45 67",
    placeholderMsg: "Коротко опишите задачу...",
    errors: {
      name: "Имя должно быть минимум 2 символа",
      phone: "Некорректный номер телефона",
      server: "Ошибка. Попробуйте позже.",
    },
  },
  en: {
    title: "Send request to Telegram",
    subtitle: "Leave your details — we’ll contact you soon.",
    name: "Your name",
    phone: "Phone number",
    message: "Message (optional)",
    send: "Send",
    sending: "Sending...",
    successTitle: "Sent ✅",
    successDesc: "We received your request. We’ll get back to you soon.",
    close: "Close",
    required: "Required",
    placeholderName: "E.g. Usmonjon",
    placeholderPhone: "+998 90 123 45 67",
    placeholderMsg: "Briefly describe what you need...",
    errors: {
      name: "Name must be at least 2 characters",
      phone: "Phone number looks invalid",
      server: "Error. Please try again later.",
    },
  },
} as const;

function isValidPhone(value: string) {
  const v = value.trim();
  return /^[+]?[\d\s()-]{7,20}$/.test(v);
}

export function TelegramLeadModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const locale = useMemo(() => detectLocale(), []);
  const tr = TXT[locale];

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const [errName, setErrName] = useState<string | null>(null);
  const [errPhone, setErrPhone] = useState<string | null>(null);
  const [errServer, setErrServer] = useState<string | null>(null);

  // Reset modal state each time it opens
  useEffect(() => {
    if (!open) return;
    setSuccess(false);
    setErrName(null);
    setErrPhone(null);
    setErrServer(null);
  }, [open]);

  // ESC to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const validate = () => {
    let ok = true;

    if (name.trim().length < 2) {
      setErrName(tr.errors.name);
      ok = false;
    } else setErrName(null);

    if (!isValidPhone(phone)) {
      setErrPhone(tr.errors.phone);
      ok = false;
    } else setErrPhone(null);

    return ok;
  };

 const submit = async (e: React.FormEvent) => {
  e.preventDefault();
  setErrServer(null);

  if (!validate()) return;

  try {
    setSubmitting(true);

    const BOT_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

    if (!BOT_TOKEN || !CHAT_ID) {
      throw new Error("Telegram env not set");
    }

    const text =
      `🧾 New Lead\n\n` +
      `👤 Name: ${name}\n` +
      `📞 Phone: ${phone}\n` +
      `📝 Message: ${message || "-"}\n` +
      `🌍 Locale: ${locale}\n` +
      `🔗 Source: website_modal`;

    const tgRes = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
        // parse_mode: "HTML", // xohlasang yoqasan
        disable_web_page_preview: true,
      }),
    });

    if (!tgRes.ok) throw new Error("Telegram request failed");

    setSuccess(true);
    setName("");
    setPhone("");
    setMessage("");
  } catch (e) {
    console.error(e);
    setErrServer(tr.errors.server);
  } finally {
    setSubmitting(false);
  }
};


  if (!open) return null;

  return (
    // BACKDROP: outside click => close
    <div
      className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      {/* Center */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        {/* CONTENT: stop propagation => inside click won't close */}
        <div
          className="relative w-full max-w-xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-background border border-border rounded-2xl shadow-xl overflow-hidden">
            {/* Header */}
            <div className="p-6 border-b border-border flex items-start justify-between gap-4">
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-bold">
                  {success ? tr.successTitle : tr.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {success ? tr.successDesc : tr.subtitle}
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="h-10 w-10 rounded-full border border-border bg-background hover:bg-muted flex items-center justify-center"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6">
              {success ? (
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={onClose}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition"
                  >
                    {tr.close}
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold">
                        {tr.name}{" "}
                        <span className="text-xs text-muted-foreground">
                          ({tr.required})
                        </span>
                      </label>
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={tr.placeholderName}
                        className={`w-full h-12 px-4 rounded-xl border bg-background outline-none transition
                          ${errName ? "border-red-500" : "border-border focus:border-primary"}`}
                      />
                      {errName ? (
                        <p className="text-xs text-red-500">{errName}</p>
                      ) : null}
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold">
                        {tr.phone}{" "}
                        <span className="text-xs text-muted-foreground">
                          ({tr.required})
                        </span>
                      </label>
                      <input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder={tr.placeholderPhone}
                        className={`w-full h-12 px-4 rounded-xl border bg-background outline-none transition
                          ${errPhone ? "border-red-500" : "border-border focus:border-primary"}`}
                        inputMode="tel"
                      />
                      {errPhone ? (
                        <p className="text-xs text-red-500">{errPhone}</p>
                      ) : null}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">{tr.message}</label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={tr.placeholderMsg}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background outline-none focus:border-primary transition resize-none"
                    />
                  </div>

                  {errServer ? (
                    <p className="text-sm text-red-500">{errServer}</p>
                  ) : null}

                  {/* Actions */}
                  <div className="flex items-center justify-between gap-3 pt-2">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-5 py-3 rounded-xl border border-border bg-background hover:bg-muted transition font-semibold"
                      disabled={submitting}
                    >
                      {tr.close}
                    </button>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition disabled:opacity-60"
                    >
                      {submitting ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Send className="h-4 w-4" />
                      )}
                      {submitting ? tr.sending : tr.send}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {!success ? (
            <p className="text-xs text-muted-foreground mt-3 text-center">
              Telegramga yuboriladi • javob berish tezligi: 5–30 daqiqa
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
