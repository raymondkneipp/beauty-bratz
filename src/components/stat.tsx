export function Stat(props: Readonly<{ name: string; value: string }>) {
    return (
        <div className="flex flex-col border-l border-neutral-200 pl-6 py-4 gap-3">
            <span className="text-3xl md:text-4xl font-medium tracking-tight [text-wrap:balance] text-neutral-950 font-stretch-ultra-expanded">
                {props.value}
            </span>
            <span className="text-sm text-neutral-600">{props.name}</span>
        </div>
    );
}
