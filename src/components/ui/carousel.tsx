"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface CarouselProps {
  items: React.ReactNode[]
  className?: string
  autoplay?: boolean
  interval?: number
  showDots?: boolean
  showArrows?: boolean
}

export function Carousel({
  items,
  className,
  autoplay = true,
  interval = 5000,
  showDots = true,
  showArrows = true,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isAnimating, setIsAnimating] = React.useState(false)

  React.useEffect(() => {
    if (!autoplay) return
    const timer = setInterval(() => {
      if (!isAnimating) {
        setCurrentIndex((prev) => (prev + 1) % items.length)
      }
    }, interval)
    return () => clearInterval(timer)
  }, [autoplay, interval, items.length, isAnimating])

  const goToPrevious = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
    setTimeout(() => setIsAnimating(false), 300)
  }

  const goToNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev + 1) % items.length)
    setTimeout(() => setIsAnimating(false), 300)
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div
        className="flex transition-transform duration-300 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="w-full flex-shrink-0 px-2">
            {item}
          </div>
        ))}
      </div>

      {showArrows && (
        <>
          <button
            onClick={goToPrevious}
            disabled={isAnimating}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-surface/80 p-2 text-text-primary shadow-lg hover:bg-surface transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={goToNext}
            disabled={isAnimating}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-surface/80 p-2 text-text-primary shadow-lg hover:bg-surface transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      {showDots && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "h-2 w-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                index === currentIndex
                  ? "bg-primary w-6"
                  : "bg-neutral-400 hover:bg-neutral-500"
              )}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex ? "true" : "false"}
            />
          ))}
        </div>
      )}
    </div>
  )
}