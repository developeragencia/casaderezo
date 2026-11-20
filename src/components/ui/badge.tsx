"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-primary-hover",
        secondary: "bg-surface-elevated text-text-primary border border-border hover:bg-surface-hover",
        destructive: "bg-danger-light text-danger hover:bg-danger/10",
        outline: "bg-transparent border-2 border-border text-text-primary hover:bg-surface-hover",
        success: "bg-success-light text-success hover:bg-success/10",
        warning: "bg-warning-light text-warning hover:bg-warning/10",
        wholesale: "bg-primary-light text-primary border border-primary-muted",
        new: "bg-secondary text-white",
        sale: "bg-danger text-white",
      },
      size: {
        default: "px-2.5 py-0.5 text-xs",
        sm: "px-2 py-0.5 text-[10px]",
        lg: "px-3 py-1 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant, size, className }))} {...props} />
}

export { Badge, badgeVariants }