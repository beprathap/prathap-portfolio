export default function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10">
      <p className="text-sm font-semibold tracking-[0.22em] uppercase text-slate-500">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-3xl text-base md:text-lg text-slate-600">
          {description}
        </p>
      ) : null}
    </div>
  );
}