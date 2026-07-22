import * as React from "react";

export function hasNestedElementOfType(
  children: React.ReactNode,
  targets: React.ElementType[],
): boolean {
  let found = false;

  React.Children.forEach(children, (child) => {
    if (found || !React.isValidElement(child)) return;

    if (targets.includes(child.type as React.ElementType)) {
      found = true;
      return;
    }

    const nestedChildren = (child.props as { children?: React.ReactNode })
      ?.children;
    if (nestedChildren) {
      found = hasNestedElementOfType(nestedChildren, targets);
    }
  });

  return found;
}
