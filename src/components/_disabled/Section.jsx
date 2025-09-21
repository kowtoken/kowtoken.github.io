// Μικρό helper για ασφαλές merge κλάσεων (χωρίς εξωτερικό dependency)
/*function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Section wrapper για σταθερό spacing, container width, anchor offset (sticky header),
 * προαιρετικό χρυσό divider & glow background layer.
 *
 * Props:
 * - id: string (anchor id)
 * - spacing: "none" | "sm" | "md" | "lg"  (default "md")
 * - container: "sm" | "md" | "lg" | "xl" | "full"  (default "lg")
 * - anchor: boolean (προσθέτει scroll-mt ώστε τα links να μην κρύβονται από sticky header) (default true)
 * - centered: boolean (κεντράρει κείμενα) (default false)
 * - divider: boolean (χρυσή γραμμή κάτω από το title)
 * - title: string (προαιρετικός τίτλος)
 * - subtitle: string (προαιρετικό υπότιτλος)
 * - glow: boolean (βάζει διακριτικό glow overlay) (default false)
 * - className: string (εξτρά κλάσεις στο <section>)
 * - containerClassName: string (εξτρά κλάσεις στο εσωτερικό container)
 */
const spacingMap = {
  none: "py-0",
  sm: "py-12",
  md: "py-16",
  lg: "py-24",
};

const containerMap = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-none",
};

export default function Section({
  id,
  spacing = "md",
  container = "lg",
  anchor = true,
  centered = false,
  divider = false,
  title,
  subtitle,
  glow = false,
  className = "",
  containerClassName = "",
  children,
}) {
  return (
    <section
      id={id}
      className={cx(
        "relative",
        spacingMap[spacing],
        // απόφυγε να κρύβεται το anchor κάτω από sticky header
        anchor && "scroll-mt-24 md:scroll-mt-28",
        className
      )}
    >
      {glow && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-darkblue/70 via-black/40 to-darkblue/70" />
      )}

      <div
        className={cx(
          containerMap[container],
          "mx-auto px-6 relative",
          centered && "text-center",
          containerClassName
        )}
      >
        {title && (
          <h2 className={cx(
            "text-4xl sm:text-5xl font-extrabold mb-4",
            "text-gold"
          )}>
            {title}
          </h2>
        )}

        {subtitle && (
          <p className="text-lg text-gray-300 mb-8">
            {subtitle}
          </p>
        )}

        {divider && (
          <div className="mx-auto mb-10 h-[2px] w-24 bg-gradient-to-r from-transparent via-gold to-transparent rounded" />
        )}

        {children}
      </div>
    </section>
  );
}
