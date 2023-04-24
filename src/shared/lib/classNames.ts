export function classNames(
  cls: string,
  mods: Mods = {},
  additional: string[] = []
): string {
  console.log(additional, 'additional', [
    cls,
    ...additional,
    Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className),
  ]);
  return [
    cls,
    ...additional,
    Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ');
}

type Mods = Record<string, boolean | string>;
