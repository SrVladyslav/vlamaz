"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

const Select = SelectPrimitive.Root;
const SelectValue = SelectPrimitive.Value;
const SelectGroup = SelectPrimitive.Group;

interface SelectTriggerProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> {
  label?: React.ReactNode;
  required?: boolean;
  error?: boolean;
}

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectTriggerProps
>(({ className, children, label, required, error, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "group relative flex h-13 w-full items-center justify-between overflow-hidden rounded-2xl border-2 border-transparent bg-[var(--gray-4)] px-6 py-2 pt-4 text-left text-sm font-medium text-[var(--foreground)] transition-all focus:outline-none focus:border-[var(--yellow)]/70 focus:ring-1 focus:ring-[var(--yellow)]/70 disabled:cursor-not-allowed disabled:opacity-50",
      error && "border-[var(--red)] focus:border-[var(--red)] focus:ring-[var(--red)]",
      className,
    )}
    {...props}
  >
    <div className="flex flex-col items-start gap-0.5 overflow-hidden">
      {label && (
        <span
          className={cn(
            "text-xs font-medium text-[var(--foreground-3)]",
            error && "text-[var(--red)]",
          )}
        >
          {label}
          {required && (
            <span className="ml-0.5 text-[var(--red)]">*</span>
          )}
        </span>
      )}
      <span className="truncate">{children}</span>
    </div>
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 shrink-0 text-[var(--foreground-3)] transition-transform duration-200 data-[state=open]:rotate-180" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      position={position}
      className={cn(
        "relative z-50 min-w-[8rem] overflow-hidden rounded-xl border border-[var(--foreground-3)]/20 bg-[var(--gray-4)] p-1 shadow-lg",
        position === "popper" &&
          "w-[var(--radix-select-trigger-width)] translate-y-1",
        className,
      )}
      {...props}
    >
      <SelectPrimitive.Viewport className="p-1">
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-pointer select-none items-center justify-between rounded-lg px-3 py-2 text-sm text-[var(--foreground)] outline-none transition-colors data-[highlighted]:bg-[var(--foreground)] data-[highlighted]:text-[var(--background)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    <SelectPrimitive.ItemIndicator>
      <Check className="h-3.5 w-3.5 text-[var(--yellow)]" />
    </SelectPrimitive.ItemIndicator>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
};
