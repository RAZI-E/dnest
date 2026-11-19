import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#C8A04A] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer select-none",
  {
    variants: {
      variant: {
        default:
          "bg-[#C8A04A] text-[#12163A] hover:bg-[#B68F3C] shadow-sm active:scale-[0.98]",
        gold:
          "bg-[#C8A04A] text-[#12163A] hover:bg-[#B68F3C] shadow-sm active:scale-[0.98]",
        navy:
          "bg-[#12163A] text-white hover:bg-[#0D102D] shadow-sm active:scale-[0.98]",
        amber:
          "bg-[#B9772E] text-white hover:bg-[#A36624] shadow-sm active:scale-[0.98]",
        rose:
          "bg-[#B4506A] text-white hover:bg-[#9E4158] shadow-sm active:scale-[0.98]",
        berry:
          "bg-[#7A2E4D] text-white hover:bg-[#68233F] shadow-sm active:scale-[0.98]",
        outline:
          "border border-[#C8A04A] text-[#C8A04A] hover:bg-[#C8A04A]/10 active:scale-[0.98]",
        outlineLight:
          "border border-white/30 text-white hover:border-white hover:bg-white/10 active:scale-[0.98]",
        outlineCocoa:
          "border border-[#3B2218]/30 text-[#3B2218] hover:border-[#3B2218] hover:bg-[#3B2218]/5 active:scale-[0.98]",
        whatsapp:
          "bg-[#25D366] text-white hover:bg-[#20ba5a] shadow-sm active:scale-[0.98]",
      },
      size: {
        default: "min-h-[44px] h-11 px-6 text-sm",
        sm: "min-h-[40px] h-10 px-4 text-xs",
        lg: "min-h-[48px] h-12 px-8 text-base",
        xl: "min-h-[52px] h-[52px] px-9 text-base",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
