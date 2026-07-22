"use client";

import type { ComponentProps } from "react";
import { Input as BaseInput } from "@/components/extendui/base-input";
import { Check, Send } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends ComponentProps<typeof BaseInput> {
  leftIcon?: React.ReactNode;
  label?: string | React.ReactNode;
  example?: string;
  checked?: boolean;
  /** If true, renders input in kiosk mode: 80px height with larger typography. */
  isKiosk?: boolean;
  /** If true, input will only accept numbers (and an optional comma as decimal separator). */
  numbersOnly?: boolean;
  /** Max integer digits (to the left of the comma). If undefined, no limit. */
  maxIntegers?: number;
  /** Max decimal digits (to the right of the comma). If 0, comma is not allowed. If undefined, no limit. */
  maxDecimals?: number;
  /** If true (default), negatives are NOT allowed. If false, a single leading '-' is allowed. */
  positiveOnly?: boolean;
  required?: boolean;

  /** Optional action button rendered inside the input on the right side. */
  actionButton?: {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    icon?: React.ReactNode;
    ariaLabel?: string;
    disabled?: boolean;
  };
}

/**
 * Ultra-fast numeric normalizer (single pass, minimal branching).
 * - Comma is the decimal separator; dots are converted to commas.
 * - Filters non-digits; enforces a single comma.
 * - Applies maxIntegers / maxDecimals during the scan.
 * - If maxDecimals === 0, commas are not allowed.
 * - If allowNegative is true, a single leading '-' is allowed.
 * - Removes trailing comma when no decimals are present.
 */
export function normalizeNumericValueUltra(
  raw: string,
  opts: { maxIntegers?: number; maxDecimals?: number; allowNegative?: boolean },
): string {
  if (!raw) return "";

  const maxI = opts.maxIntegers == null ? 1e9 : opts.maxIntegers;
  const maxD = opts.maxDecimals == null ? 1e9 : opts.maxDecimals;
  const allowComma = maxD !== 0;
  const allowNegative = !!opts.allowNegative;

  const out: string[] = new Array(raw.length + 2);
  let o = 0;

  let startIdx = 0;
  if (allowNegative && raw.charCodeAt(0) === 45 /* '-' */) {
    out[o++] = "-";
    startIdx = 1;
  }

  let seenComma = false;
  let iCount = 0;
  let dCount = 0;

  for (let i = startIdx; i < raw.length; i++) {
    const code = raw.charCodeAt(i);

    if (code >= 48 && code <= 57) {
      if (!seenComma) {
        if (iCount < maxI) {
          out[o++] = raw[i];
          iCount++;
        }
      } else {
        if (dCount < maxD) {
          out[o++] = raw[i];
          dCount++;
        }
      }
      continue;
    }

    if (allowComma && (code === 44 || code === 46)) {
      if (seenComma) continue;
      seenComma = true;
      out[o++] = ",";
      continue;
    }
  }

  if (o > 0 && out[o - 1] === "," && maxD === 0) {
    o--;
  }

  return o > 0 ? out.slice(0, o).join("") : "";
}

/**
 * Input wrapper for BaseInput.
 * Adds label, icon, and optional numeric-only filtering.
 */
const Input = ({
  label,
  example,
  leftIcon,
  checked,
  isKiosk,
  numbersOnly,
  maxIntegers,
  maxDecimals,
  positiveOnly = true,
  onChange,
  children,
  required,
  type,
  actionButton,
  ...props
}: InputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (numbersOnly || maxDecimals !== undefined || maxIntegers !== undefined) {
      const filtered = normalizeNumericValueUltra(e.target.value, {
        maxIntegers,
        maxDecimals,
        allowNegative: !positiveOnly,
      });
      if (filtered !== e.target.value) {
        e.target.value = filtered;
      }
    }
    onChange?.(e);
  };

  return (
    <BaseInput
      {...props}
      onChange={handleChange}
      required={required}
      type={type}
      isKiosk={isKiosk}
      inputMode={
        numbersOnly || maxDecimals !== undefined || maxIntegers !== undefined
          ? "decimal"
          : undefined
      }
    >
      {label ? (
        <BaseInput.Group>
          {leftIcon && (
            <BaseInput.LeftIcon className="items-center">
              {leftIcon}
            </BaseInput.LeftIcon>
          )}
          <BaseInput.Label>
            <span className="flex items-center gap-0.5">
              {label}
              {required && (
                <span
                  className={cn(
                    "text-xs font-thin items-center text-center align-center text-[var(--red)]",
                    isKiosk && "text-md",
                  )}
                >
                  *
                </span>
              )}
              {example && (
                <>
                  {" ("}
                  <span className="text-xs font-thin items-center text-center align-center text-[var(--foreground-3)]">
                    {example}
                  </span>
                  {")"}
                </>
              )}
              <Check
                className={`h-3.5 w-3.5 pt-0.5 ${
                  checked
                    ? "text-[var(--yellow)] opacity-100 duration-200"
                    : "opacity-0"
                }`}
              />
            </span>
          </BaseInput.Label>
        </BaseInput.Group>
      ) : null}

      {/* Right-side action button inside the input */}
      {actionButton && (
        <BaseInput.RightIcon
          className={cn("w-8 h-full mr-2 pt-0", isKiosk && "w-24 h-24 -mr-2")}
        >
          <button
            type="button"
            onClick={actionButton.onClick}
            aria-label={actionButton.ariaLabel ?? "Action"}
            disabled={actionButton.disabled}
            className={cn(
              "tabindexs-0 inline-flex size-8 cursor-pointer items-center justify-center rounded-lg bg-[var(--btn-cta)] text-[var(--btn-cta-2)] disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--yellow)]",
              isKiosk && "size-20 w-20 h-20",
            )}
          >
            {actionButton.icon ?? (
              <Send
                className={cn("h-3.5 w-3.5", isKiosk && "h-8 w-8 size-8")}
              />
            )}
          </button>
        </BaseInput.RightIcon>
      )}
      {children}
    </BaseInput>
  );
};

export { Input };
