import { EchoLogo } from "../ui/EchoLogo";

const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Models", href: "#models" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help center", href: "#" },
      { label: "Contact", href: "#" },
      { label: "FAQ", href: "#faq" },
    ],
  },
];

export function LandingFooter() {
  return (
    <footer className="border-t border-border px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 text-[15px] font-bold text-text">
              <EchoLogo size={28} className="rounded-lg" />
              EchoGPT
            </div>
            <p className="mt-3 max-w-55 text-[12.5px] leading-relaxed text-text-secondary">
              One workspace for every AI model you use.
            </p>
          </div>
          {footerColumns.map((col) => (
            <div key={col.title}>
              <p className="text-[11.5px] font-bold uppercase tracking-wide text-text-muted">
                {col.title}
              </p>
              <div className="mt-3.5 flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-[13px] text-text-secondary hover:text-text"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-11 flex flex-wrap items-center justify-between gap-2.5 border-t border-border pt-6 text-[12px] text-text-muted">
          <span>© 2026 EchoGPT. All rights reserved.</span>
          <span>Privacy · Terms</span>
        </div>
      </div>
    </footer>
  );
}
