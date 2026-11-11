import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-bold transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-navy-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer select-none",
  {
    variants: {
      variant: {
        default:
          "bg-navy-900 text-white hover:bg-navy-800 shadow-sm hover:shadow active:scale-[0.98]",
        outline:
          "border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white active:scale-[0.98]",
        dark: "bg-navy-900 text-white hover:bg-navy-800 shadow-sm active:scale-[0.98]",
        subtle:
          "bg-navy-50 text-navy-900 hover:bg-navy-100 active:scale-[0.98]",
        white:
          "bg-white text-navy-900 hover:bg-gray-100 shadow-sm active:scale-[0.98]",
        whatsapp:
          "bg-[#25D366] text-white hover:bg-[#20ba5a] shadow-md hover:shadow-lg active:scale-[0.98]",
      },
      size: {
        default: "h-11 px-6 text-sm",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-base sm:text-lg",
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
