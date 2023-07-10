export function Spinner({ className, ...rest }: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 27 27"
      {...rest}
      className={`${className} animate-spin`}
      style={{
        animationTimingFunction: "steps(12, end)",
      }}
    >
      <path
        style={{ opacity: 12 / 12 }}
        d="M18.696 10.5a1.002 1.002 0 01.365-1.367l4.759-2.751a1.007 1.007 0 011.37.368.995.995 0 01-.364 1.364l-4.764 2.751a1 1 0 01-1.366-.365z"
        fill="currentColor"
      />
      <path
        style={{ opacity: 11 / 12 }}
        fill="currentColor"
        d="M16.133 6.938l2.75-4.765a1 1 0 011.732 1l-2.748 4.762a1 1 0 11-1.734-.997z"
      />
      <path
        style={{ opacity: 10 / 12 }}
        fill="currentColor"
        d="M13.499 7.5a1 1 0 01-1-1.001V1a1.001 1.001 0 012.003 0v5.499A1.002 1.002 0 0113.499 7.5z"
      />
      <path
        style={{ opacity: 9 / 12 }}
        fill="currentColor"
        d="M8.303 10.5a1 1 0 01-1.365.365L2.175 8.114a.997.997 0 01-.367-1.364c.277-.479.89-.642 1.367-.368l4.762 2.751a1 1 0 01.366 1.367z"
      />
      <path
        style={{ opacity: 8 / 12 }}
        fill="currentColor"
        d="M9.133 7.937l-2.75-4.763a.999.999 0 111.732-1l2.75 4.765a1 1 0 01-1.732.998z"
      />
      <path
        style={{ opacity: 7 / 12 }}
        fill="currentColor"
        d="M6.499 14.5H1a1 1 0 110-2.001h5.499a1.001 1.001 0 010 2.001z"
      />
      <path
        style={{ opacity: 6 / 12 }}
        fill="currentColor"
        d="M8.303 16.502a1 1 0 01-.365 1.366l-4.762 2.749a1.006 1.006 0 01-1.368-.366 1.003 1.003 0 01.367-1.368l4.762-2.748a.996.996 0 011.366.367z"
      />
      <path
        style={{ opacity: 5 / 12 }}
        fill="currentColor"
        d="M10.866 20.062l-2.75 4.767c-.277.475-.89.639-1.367.362a.999.999 0 01-.365-1.365l2.75-4.764a1 1 0 011.732 1z"
      />
      <path
        style={{ opacity: 4 / 12 }}
        fill="currentColor"
        d="M13.499 19.502c.554 0 1.003.448 1.003 1.002v5.498a1.001 1.001 0 01-2.003 0v-5.498a1 1 0 011-1.002z"
      />
      <path
        style={{ opacity: 3 / 12 }}
        fill="currentColor"
        d="M17.867 19.062l2.748 4.764a1 1 0 01-1.732 1.003l-2.75-4.767a1 1 0 011.734-1z"
      />
      <path
        style={{ opacity: 2 / 12 }}
        fill="currentColor"
        d="M18.696 16.502a.995.995 0 011.365-.367l4.765 2.748a1.002 1.002 0 01-1.006 1.734l-4.759-2.749a1.002 1.002 0 01-.365-1.366z"
      />
      <path
        style={{ opacity: 1 / 12 }}
        fill="currentColor"
        d="M25.998 12.499h-5.501a1.001 1.001 0 000 2.001h5.501a1 1 0 100-2.001z"
      />
    </svg>
  );
}
