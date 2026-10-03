export function SectionHeading({
    eyebrow,
    title,
    description,
    align = 'left',
}: {
    eyebrow?: string;
    title: string;
    description?: string;
    align?: 'left' | 'center';
}) {
    return (
        <div className={`max-w-3xl mb-14 ${align === 'center' ? 'mx-auto text-center' : ''}`}>
            {eyebrow && (
                <span className="text-mos-accent font-[Manrope,sans-serif] tracking-widest text-xs uppercase font-bold mb-4 block">
                    {eyebrow}
                </span>
            )}
            <h2 className="font-[Newsreader,serif] text-3xl md:text-5xl text-mos-navy font-semibold leading-tight">
                {title}
            </h2>
            {description && (
                <p className="text-mos-muted text-lg font-[Manrope,sans-serif] mt-5 leading-relaxed">
                    {description}
                </p>
            )}
        </div>
    );
}
