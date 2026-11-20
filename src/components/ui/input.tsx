"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string
  label?: string
  helperText?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, label, helperText, id, ...props }, ref) => {
    const inputId = id || React.useId()
    const errorId = error ? `${inputId}-error` : undefined
    const helperId = helperText ? `${inputId}-helper` : undefined

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="mb-2 block text-sm font-medium text-text-primary"
          >
            {label}
          </label>
        )}
        <input
          type={type}
          id={inputId}
          className={cn(
            "flex h-11 w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted transition-all duration-200",
            "focus:border-border-focus focus:outline-none focus:ring-2 focus:ring-primary/20",
            "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-background-alt",
            "aria-invalid:border-danger aria-invalid:focus:border-danger aria-invalid:focus:ring-danger/20",
            error && "border-danger focus:border-danger focus:ring-danger/20",
            className
          )}
          ref={ref}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={`${errorId || ""} ${helperId || ""}`.trim() || undefined}
          {...props}
        />
        {error && (
          <p id={errorId} className="mt-1.5 text-sm text-danger" role="alert">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id={helperId} className="mt-1.5 text-sm text-text-muted">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }