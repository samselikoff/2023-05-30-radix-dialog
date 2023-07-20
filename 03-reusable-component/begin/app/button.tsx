import { ComponentProps, ReactNode, forwardRef } from "react";

type ButtonProps = {
  icon: ReactNode;
  children: ReactNode;
};

export default forwardRef<
  HTMLButtonElement,
  ComponentProps<"button"> & ButtonProps
>(function Button({ icon, children, ...rest }, ref) {
  return (
    <button
      ref={ref}
      className="inline-flex items-center gap-1 p-1 text-sm text-white/50 hover:text-white"
      {...rest}
    >
      {icon}
      {children}
    </button>
  );
});
