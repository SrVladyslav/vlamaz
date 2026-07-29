"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: React.ReactNode;
  required?: boolean;
  error?: boolean;
  textError?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      label,
      required,
      error,
      textError,
      disabled,
      id,
      value,
      onFocus,
      onBlur,
      onChange,
      ...props
    },
    ref,
  ) => {
    const generatedId = React.useId();
    const textareaId = id || generatedId;

    const [isFocused, setIsFocused] = React.useState(false);
    const [internalValue, setInternalValue] = React.useState(value ?? "");

    const isControlled = value !== undefined;
    const trackedValue = isControlled ? value : internalValue;
    const isFloated = isFocused || !!trackedValue;

    const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      if (!disabled) {
        setIsFocused(true);
        onFocus?.(e);
      }
    };

    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (!isControlled) setInternalValue(e.target.value);
      onChange?.(e);
    };

    return (
      <div className={className}>
        <div className="relative">
          {label && (
            <label
              htmlFor={textareaId}
              className={cn(
                "z-10 absolute font-medium text-[var(--foreground-3)] transition-all duration-200 ease-in-out cursor-text top-3.75 left-6 text-sm",
                isFloated && "top-2.5 px-1 left-[20px] text-xs rounded-md",
                error && "text-[var(--red)]",
                disabled && "opacity-50 cursor-not-allowed",
              )}
            >
              {label}
              {required && <span className="ml-0.5 text-[var(--red)]">*</span>}
            </label>
          )}
          <textarea
            ref={ref}
            id={textareaId}
            disabled={disabled}
            value={trackedValue}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            className={cn(
              "w-full min-h-[100px] resize-y rounded-2xl border-1 border-transparent bg-[var(--gray-4)] px-6 py-4 pt-6 text-sm font-medium text-[var(--foreground)] transition-all placeholder:text-[var(--foreground-3)] focus:outline-none focus:border-[var(--yellow)]/70 focus:ring-1 focus:ring-[var(--yellow)]/70 disabled:cursor-not-allowed disabled:opacity-50",
              error &&
                "border-[var(--red)] focus:border-[var(--red)] focus:ring-[var(--red)]",
            )}
            {...props}
          />
        </div>
        {error && textError && (
          <p className="mt-1 text-xs text-[var(--red)]">{textError}</p>
        )}
      </div>
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
