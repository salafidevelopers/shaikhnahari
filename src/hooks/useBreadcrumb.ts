// hooks/useBreadcrumb.ts
import { useMemo } from "react";

interface BreadcrumbItem {
  name: string;
  path: string;
}

export function useBreadcrumb(path: string) {
  const pathItems: BreadcrumbItem[] = useMemo(() => {
    const pathNames = path.split("/").filter((path) => path);
    return pathNames.map((path, i) => ({
      name: path,
      path: pathNames.slice(0, i + 1).join("/"),
    }));
  }, [path]);

  const getCustomBreadcrumbName = (
    path: string,
    customNames: Record<string, JSX.Element | string>,
  ) => {
    if (customNames && customNames[path]) {
      return customNames[path];
    }
    return path;
  };

  return { pathItems, getCustomBreadcrumbName };
}
