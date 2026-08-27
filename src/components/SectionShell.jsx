import Reveal from "./Reveal";

// Every section shares the same header grammar: mono kicker + rule + title/lede.
export default function SectionShell({ id, kicker, title, lede, children, className = "" }) {
  return (
    <section id={id} className={`relative border-t border-line py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="label">{kicker}</span>
            <span className="h-px flex-1 bg-gradient-to-r from-signal-500/60 to-transparent" />
          </div>
          <h2 className="mt-4 max-w-3xl text-2xl leading-tight font-semibold md:text-4xl">{title}</h2>
          {lede && <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slateish-400 md:text-base">{lede}</p>}
        </Reveal>
        <div className="mt-10 md:mt-14">{children}</div>
      </div>
    </section>
  );
}
