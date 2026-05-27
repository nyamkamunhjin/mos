import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import Link from "next/link"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[#001f6e] text-white shadow hover:bg-[#1a368d] active:scale-95",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-[#1a368d] text-white shadow-sm hover:opacity-90 active:scale-95",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-[#001f6e] underline-offset-4 hover:underline",
        "nav-donate":
          "hidden sm:inline-block px-6 lg:px-8 py-2 rounded-full font-bold text-sm hover:opacity-90 active:scale-95 transition-all shadow-md",
        "nav-donate-scrolled":
          "bg-white/15 text-white hover:bg-white/25",
        "nav-donate-mobile":
          "block w-full bg-[#1a368d] text-white py-3 rounded-full font-bold text-sm text-center hover:opacity-90 active:scale-95 transition-all shadow-md",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
        pill: "px-10 py-4 rounded-full font-bold",
        "pill-sm": "px-6 py-2.5 rounded-full text-sm font-bold",
      },
      shape: {
        default: "",
        pill: "rounded-full",
        square: "rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      shape: "default",
    },
  },
)

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  href?: string
  type?: 'button' | 'submit' | 'reset'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, shape, asChild = false, href, children, ...props }, ref) => {
    if (href) {
      return (
        <Link
          href={href}
          className={cn(buttonVariants({ variant, size, shape, className }))}
          {...(props as Record<string, unknown>)}
        >
          {children}
        </Link>
      )
    }
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, shape, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
