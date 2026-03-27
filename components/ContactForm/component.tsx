"use client";

import clsx from "clsx";
import React, { FC, FormEvent, useState } from "react";
import { FaPaperPlane, FaCheck, FaExclamationCircle } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validateForm = (data: FormData): FormErrors => {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Name is required";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!validateEmail(data.email)) {
    errors.email = "Please enter a valid email";
  }

  if (!data.message.trim()) {
    errors.message = "Message is required";
  } else if (data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  }

  return errors;
};

export const ContactForm: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("submitting");

    try {
      const mailtoLink = `mailto:hello@tarunsingh.dev?subject=Portfolio Contact from ${encodeURIComponent(
        formData.name,
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
      )}`;

      window.location.href = mailtoLink;
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
    }
  };

  const inputClasses = clsx(
    "w-full px-4 py-3 rounded-md border-2 transition-colors duration-200",
    "bg-white dark:bg-gray-900",
    "text-black-900 dark:text-white-900",
    "focus:outline-none focus:ring-2 focus:ring-blue-700",
    "dark:border-white-300 dark:focus:border-blue-700",
    "border-black-700 focus:border-blue-700",
  );

  const labelClasses = clsx(
    "block mb-2 text-sm font-medium",
    "text-black-900 dark:text-white-900",
  );

  const errorClasses = clsx(
    "mt-1 text-sm flex items-center gap-1",
    "text-red-600 dark:text-red-400",
  );

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-5 max-w-xl">
      <div>
        <label htmlFor="name" className={labelClasses}>
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          className={clsx(
            inputClasses,
            errors.name && "border-red-500 dark:border-red-500",
          )}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          disabled={status === "submitting"}
        />
        {errors.name && (
          <p id="name-error" className={errorClasses}>
            <FaExclamationCircle /> {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className={labelClasses}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your.email@example.com"
          className={clsx(
            inputClasses,
            errors.email && "border-red-500 dark:border-red-500",
          )}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          disabled={status === "submitting"}
        />
        {errors.email && (
          <p id="email-error" className={errorClasses}>
            <FaExclamationCircle /> {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message..."
          rows={5}
          className={clsx(
            inputClasses,
            "resize-none",
            errors.message && "border-red-500 dark:border-red-500",
          )}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          disabled={status === "submitting"}
        />
        {errors.message && (
          <p id="message-error" className={errorClasses}>
            <FaExclamationCircle /> {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className={clsx(
          "flex items-center justify-center gap-2 px-6 py-3 rounded-md font-medium",
          "transition-all duration-200",
          "bg-blue-900 hover:bg-blue-700 text-white",
          "dark:bg-blue-700 dark:hover:bg-blue-900",
          "focus:outline-none focus:ring-2 focus:ring-blue-700",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          status === "success" && "bg-green-600 hover:bg-green-600",
        )}
      >
        {status === "submitting" ? (
          <span className="flex items-center gap-2">
            <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
            Sending...
          </span>
        ) : status === "success" ? (
          <>
            <FaCheck /> Sent!
          </>
        ) : (
          <>
            <FaPaperPlane /> Send Message
          </>
        )}
      </button>

      {status === "success" && (
        <p className="text-green-600 dark:text-green-400 text-sm mt-2">
          Your email client should have opened. If not, please email me directly
          at hello@tarunsingh.dev
        </p>
      )}

      {status === "error" && (
        <p className="text-red-600 dark:text-red-400 text-sm mt-2">
          Something went wrong. Please try again or email me directly.
        </p>
      )}
    </form>
  );
};
