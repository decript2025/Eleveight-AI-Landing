import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "ui/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 foregroundspace-nowrap text-sm font-semibold whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-[8px]",
  {
    variants: {
      variant: {
        default:
          "bg-[#EA580C] text-foreground shadow-[0_0_8px_0_#EA580C] hover:shadow-[0_0_16px_0_#EA580C] border border-[#F9731600] dual-gradient duration-0",
        outline:
          "bg-foreground shadow-[0_0_8px_0_#EA580C] text-[#EA580C] hover:shadow-[0_0_16px_0_#EA580C]",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4",
        sm: "h-8 px-3 text-xs",
        lg: "h-10 px-4",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
