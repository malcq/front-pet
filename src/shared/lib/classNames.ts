export function classNames(
  cls: string,
  mods: Mods,
  additional: string[]
): string {
  return [
    cls,
    ...additional,
    Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ');
}

type Mods = Record<string, boolean | string>;

classNames('remove-btn', { hovered: true, selectable: true, red: false }, [
  'pdg',
]);
