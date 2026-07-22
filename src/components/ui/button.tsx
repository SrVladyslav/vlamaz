import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium " +
  "transition-colors duration-75 cursor-pointer disabled:pointer-events-none disabled:opacity-50 " +
  "[&_svg]:pointer-events-none [&_svg]:shrink-0 outline-none " +
  "focus-visible:ring-2 focus-visible:ring-[var(--foreground-2)] focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        solid: "bg-[var(--foreground-2)] text-white hover:opacity-90",
        light: "bg-transparent text-[var(--foreground)] hover:bg-[var(--background-2)]",
        ghost: "bg-transparent hover:bg-[var(--background-2)]",
      },
      size: {
        md: "h-10 px-4 py-2 text-sm",
        lg: "h-12 px-6 text-base",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "md",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
