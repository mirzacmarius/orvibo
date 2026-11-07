/**
 * Text whose `\n`-separated parts are each balanced on their own: a part that
 * wraps gets even lines instead of a word alone on the last one (balancing
 * the whole paragraph does not do that across a forced break).
 */
export function BalancedLines({ text }: { text: string }) {
  return (
    <>
      {text.split("\n").map((line) => (
        <span key={line} className="block text-balance">
          {line}
        </span>
      ))}
    </>
  );
}
