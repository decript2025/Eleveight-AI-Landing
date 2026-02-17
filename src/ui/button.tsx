import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center px-[20px] py-2 whitespace-nowrap font-bold cursor-pointer border rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&>svg]:pointer-events-none [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground border-foreground",
        "no-border": "bg-background text-foreground border-none",
        "default-white": "bg-white text-black border-none"
      },
      size: {
        default: "h-[45px] min-w-[150px] px-4 py-2 hover:scale-105 transition-transform duration-300 ease-out",
        sm: "h-8 rounded-md px-3 text-xs hover:scale-105 transition-transform duration-300 ease-out",
        lg: "h-[50px] min-w-[180px] px-4 py-2 hover:scale-105 transition-transform duration-300 ease-out",
        icon: "h-9 w-9",
        flag: "h-9 w-[70px] transition-none hover:scale-100",
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
