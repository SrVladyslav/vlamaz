"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { Eye, EyeOff, X } from "lucide-react";
import * as React from "react";

import { hasNestedElementOfType } from "@/helpers/hasNestedElementOfType";
import { cn } from "@/lib/utils";

const inputVariants = cva(
  "h-13 w-full max-w-full rounded-2xl border-2 py-2 pt-4 text-sm font-medium text-[var(--foreground)] outline-none transition-all disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-[var(--foreground-3)]",
  {
    variants: {
      variant: {
        default:
          "border-[var(--foreground-3)]/30 bg-transparent focus-within:border-[var(--yellow)]/70 focus-within:ring-1 focus-within:ring-[var(--yellow)]/70",
        filled:
          "border-transparent bg-[var(--gray-4)] focus-within:border-[var(--yellow)]/70 focus-within:ring-1 focus-within:ring-[var(--yellow)]/70",
        flushed:
          "rounded-none border-x-0 border-t-0 border-b-[var(--foreground-3)]/40 outline-none focus:bg-[var(--background-3)] focus-visible:outline-none",
        flushedfilled:
          "rounded-none border-x-0 border-t-0 border-b-[var(--foreground-3)]/40 bg-[var(--background-3)] outline-none",
        dashed:
          "border-dashed border-2 border-[var(--foreground-3)]/50 bg-transparent focus-within:border-[var(--yellow)]/70 focus-within:ring-1 focus-within:ring-[var(--yellow)]/70",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

type InputContextType = {
  id: string;
  disabled?: boolean;
  error?: boolean;
  isFocused: boolean;
  showPassword: boolean;
  required?: boolean;
  isKiosk?: boolean;
  value?: string | number | readonly string[];
  maxLength?: number;
  variant?: VariantProps<typeof inputVariants>["variant"];
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
  elementChecks: {
    hasLeftIcon: boolean;
    hasRightIcon: boolean;
    hasLabel: boolean;
    hasPassword: boolean;
    hasClearButton: boolean;
  };
  placeholder?: string;
  onFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  setShowPassword: (show: boolean) => void;
};

const InputContext = React.createContext<InputContextType | undefined>(
  undefined,
);

const useInputContext = () => {
  const context = React.useContext(InputContext);
  if (!context) {
    throw new Error(
      "Input compound components must be used within an Input.Root component",
    );
  }
  return context;
};

interface InputRootProps
  extends
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  error?: boolean;
  textError?: string;
  maxLength?: number;
  isKiosk?: boolean;
  children?: React.ReactNode;
}
export type { InputRootProps };

const getCounterPosition = (
  elementChecks: InputContextType["elementChecks"],
  hasValue: boolean,
) => {
  if (elementChecks.hasClearButton && hasValue && elementChecks.hasPassword) {
    return "right-[3.2rem] rtl:right-auto rtl:left-[3.2rem]";
  }
  if (elementChecks.hasPassword || elementChecks.hasRightIcon) {
    return "right-8 rtl:right-auto rtl:left-8";
  }
  if (elementChecks.hasClearButton && hasValue) {
    return "right-8 rtl:right-auto rtl:left-8";
  }
  return "right-3 rtl:right-auto rtl:left-3";
};

const getLabelPadding = (
  elementChecks: InputContextType["elementChecks"],
  hasValue: boolean,
  maxLength?: number,
) => {
  if (
    elementChecks.hasClearButton &&
    hasValue &&
    elementChecks.hasPassword &&
    maxLength
  )
    return "pe-24";
  if (elementChecks.hasClearButton && hasValue && elementChecks.hasPassword)
    return "pe-20";
  if ((elementChecks.hasPassword || elementChecks.hasRightIcon) && maxLength)
    return "pe-20";
  if (elementChecks.hasClearButton && hasValue && maxLength) return "pe-20";
  return "pe-8";
};

const InputComponent = React.forwardRef<HTMLInputElement, InputRootProps>(
  (props, ref) => {
    const {
      className,
      id,
      variant,
      type,
      error,
      textError,
      disabled,
      required,
      isKiosk,
      value,
      maxLength,
      children,
      placeholder,
      onFocus: propOnFocus,
      onBlur: propOnBlur,
      onChange: propOnChange,
      ...inputProps
    } = props;

    const [isFocused, setIsFocused] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);
    const [internalValue, setInternalValue] = React.useState(value ?? "");

    const isControlled = value !== undefined;
    const trackedValue = isControlled ? value : internalValue;

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      if (!disabled) {
        setIsFocused(true);
        propOnFocus?.(e);
      }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      propOnBlur?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) setInternalValue(e.target.value);
      propOnChange?.(e);
    };

    const elementChecks = React.useMemo(
      () => ({
        hasLeftIcon: hasNestedElementOfType(children, [InputLeftIcon]),
        hasRightIcon: hasNestedElementOfType(children, [InputRightIcon]),
        hasLabel: hasNestedElementOfType(children, [InputLabel]),
        hasPassword: hasNestedElementOfType(children, [InputPasswordToggle]),
        hasClearButton: hasNestedElementOfType(children, [InputClearButton]),
      }),
      [children],
    );

    const generatedId = React.useId();
    const inputId = id || generatedId;

    const contextValue: InputContextType = {
      id: inputId,
      disabled,
      error,
      isFocused,
      showPassword,
      isKiosk,
      value: trackedValue,
      maxLength,
      variant,
      required,
      elementChecks,
      type,
      placeholder,
      onFocus: handleFocus,
      onBlur: handleBlur,
      setShowPassword,
    };

    const currentValue = String(trackedValue || "");
    const hasValue = currentValue.length > 0;
    const counterPosition = getCounterPosition(elementChecks, hasValue);
    const labelPadding = getLabelPadding(elementChecks, hasValue, maxLength);

    const inputClassName = cn(
      inputVariants({ variant }),
      elementChecks.hasLeftIcon ? "ps-9" : "px-6",
      elementChecks.hasRightIcon ? "pr-11!" : "px-6",
      elementChecks.hasLabel,
      hasValue && variant === "flushedfilled" && "bg-[var(--background-3)]",
      error && [
        "border-[var(--red)] text-[var(--red)]",
        !["flushedfilled", "flushed"].includes(variant as string) &&
          "focus-within:border-[var(--red)] focus-within:ring-[var(--red)]",
      ],
      disabled && "opacity-50 cursor-not-allowed",
      labelPadding,
      isKiosk && "h-24! text-2xl pt-5 border-2",
    );
    return (
      <InputContext.Provider value={contextValue}>
        <div className={cn("relative overflow-hidden rounded-2xl", className)}>
          {children}
          <input
            id={inputId}
            ref={ref}
            type={type === "password" && showPassword ? "text" : type}
            className={cn(
              inputClassName,
              "text-left rtl:text-right rtl:direction-rtl",
            )}
            disabled={disabled}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            value={trackedValue ?? ""}
            maxLength={maxLength}
            placeholder={placeholder}
            {...inputProps}
          />
          {maxLength && (
            <div
              className={cn(
                "absolute top-2.5 text-xs text-[var(--foreground-3)]",
                currentValue.length >= maxLength && "text-[var(--red)]",
                counterPosition,
              )}
            >
              {currentValue.length}/{maxLength}
            </div>
          )}
          {error && textError && (
            <p className="mt-1 text-xs text-[var(--red)]">{textError}</p>
          )}
        </div>
      </InputContext.Provider>
    );
  },
);
InputComponent.displayName = "InputComponent";

type InputType = typeof InputComponent & {
  Group: typeof InputGroup;
  Label: typeof InputLabel;
  LeftIcon: typeof InputLeftIcon;
  RightIcon: typeof InputRightIcon;
  PasswordToggle: typeof InputPasswordToggle;
  ClearButton: typeof InputClearButton;
};

const Input = InputComponent as InputType;

const InputGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => (
  <div ref={ref} className={cn("relative", props.className)} {...props} />
));
InputGroup.displayName = "InputGroup";

const InputLabel = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>((props, ref) => {
  const { className, children, ...rest } = props;
  const {
    id,
    isFocused,
    isKiosk,
    value,
    disabled,
    error,
    variant,
    elementChecks,
    type,
    placeholder,
  } = useInputContext();

  const isFloated = isFocused || !!value || type === "date" || !!placeholder;

  const labelClassName = cn(
    "z-10 absolute font-medium text-[var(--foreground-3)] transition-all duration-200 ease-in-out cursor-text border-transparent ",
    isKiosk ? "top-8 text-2xl" : "top-3.75 text-sm",
    elementChecks.hasLeftIcon
      ? "left-9 rtl:left-auto rtl:right-9"
      : "left-6 rtl:left-auto rtl:right-1",
    isFloated && [
      "top-0.5 px-1 text-xs rounded-md font-medium",
      variant === "flushed" || variant === "flushedfilled"
        ? "-left-[20px] ps-2 rtl:left-auto rtl:-right-[20px]"
        : "left-[20px] rtl:left-auto rtl:right-[2px]",
      isKiosk && "top-2 text-md tracking-wider",
    ],
    error && "text-[var(--red)]",
    disabled && "opacity-50 cursor-not-allowed",
    className,
  );

  return (
    <label ref={ref} htmlFor={id} className={labelClassName} {...rest}>
      {children}
    </label>
  );
});
InputLabel.displayName = "InputLabel";

const InputLeftIcon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { className, children, ...rest } = props;
  const { disabled, error } = useInputContext();

  return (
    <div
      ref={ref}
      className={cn(
        "absolute left-3 top-4.5 rtl:left-auto rtl:right-3 flex h-4 w-4 items-center text-[var(--foreground-3)]",
        disabled && "opacity-50",
        error && "text-[var(--red)]",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
});
InputLeftIcon.displayName = "InputLeftIcon";

const InputRightIcon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { className, children, ...rest } = props;
  const { disabled, error, elementChecks } = useInputContext();

  return (
    <div
      ref={ref}
      className={cn(
        "absolute right-0 top-0 rtl:right-auto rtl:left-0 flex w-10 h-full items-center",
        disabled && "opacity-50",
        error && "text-[var(--red)]",
        elementChecks.hasPassword && "hidden",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
});
InputRightIcon.displayName = "InputRightIcon";

const InputPasswordToggle = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  const { className, ...rest } = props;
  const { showPassword, setShowPassword } = useInputContext();

  return (
    <button
      ref={ref}
      type="button"
      className={cn(
        "absolute right-3 top-2.5 flex items-center text-[var(--foreground-3)]",
        className,
      )}
      onClick={() => setShowPassword(!showPassword)}
      {...rest}
    >
      {showPassword ? (
        <EyeOff className="h-4 w-4" />
      ) : (
        <Eye className="h-4 w-4" />
      )}
    </button>
  );
});
InputPasswordToggle.displayName = "InputPasswordToggle";

const InputClearButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  const { className, onClick, ...rest } = props;
  const { value, elementChecks } = useInputContext();

  if (!value) return null;

  return (
    <button
      ref={ref}
      type="button"
      className={cn(
        "absolute right-3 top-2.5 flex items-center text-[var(--foreground-3)]",
        (elementChecks.hasPassword || elementChecks.hasRightIcon) && "right-8",
        className,
      )}
      onClick={onClick}
      {...rest}
    >
      <X className="h-4 w-4" />
    </button>
  );
});
InputClearButton.displayName = "InputClearButton";

Input.Group = InputGroup;
Input.Label = InputLabel;
Input.LeftIcon = InputLeftIcon;
Input.RightIcon = InputRightIcon;
Input.PasswordToggle = InputPasswordToggle;
Input.ClearButton = InputClearButton;

export { Input };
