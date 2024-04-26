import { Children, useState, type ReactNode, useMemo } from "react";
import { usePathname } from "next/navigation";
import { BreadCrumbsContext } from "./breadcrumbs-context";
import Link from "next/link";
import { Spinner } from "../spinner";

type BreadcrumbsContainerProps = {
  children: ReactNode;
  separator?: string | ReactNode;
};

type BreadcrumbsProps = {
  children: ReactNode;
  withHome?: boolean;
};

type BreadcrumbItemProps = {
  children: ReactNode;
  href: string;
};

export const BreadcrumbsItem = ({
  children,
  href,
  ...props
}: BreadcrumbItemProps) => {
  return (
    <li {...props}>
      <Link href={href} passHref>
        {children}
      </Link>
    </li>
  );
};

export const BreadcrumbsContainer = ({
  children,
  separator = "/",
}: BreadcrumbsContainerProps) => (
  <nav className="min-h-6 py-2 border-t-2 border-neutral-300 border-b-2 w-fit">
    <ol className="flex items-center gap-4 text-primary-700">
      {Children.map(children, (child, index) => (
        <>
          {child}
          {index < Children.count(children) - 1 ? (
            <span>{separator}</span>
          ) : null}
        </>
      ))}
    </ol>
  </nav>
);

export const BreadCrumbs = ({
  children,
  withHome = false,
}: BreadcrumbsProps) => {
  const paths = usePathname();
  const [trailingPath, setTrailingPath] = useState("");
  const context = useMemo(
    () => ({
      trailingPath,
      setTrailingPath,
    }),
    [trailingPath]
  );

  const pathNames = paths.split("/").filter((path) => path);
  const pathItems = pathNames.map((path, i) => ({
    name: path,
    path: pathNames.slice(0, i + 1).join("/"),
  }));

  if (
    context.trailingPath &&
    pathItems.length > 0 &&
    context.trailingPath !== pathItems[pathItems.length - 1].name
  ) {
    pathItems[pathItems.length - 1].name = context.trailingPath;
  }

  return (
    <>
      <BreadcrumbsContainer>
        {withHome && <BreadcrumbsItem href="/">Home</BreadcrumbsItem>}
        {pathItems.map((item) => (
          <BreadcrumbsItem key={item.path} href={`/${item.path}`}>
            {item.name === "loading" ? (
              <Spinner className="w-4 h-4" />
            ) : (
              item.name
            )}
          </BreadcrumbsItem>
        ))}
      </BreadcrumbsContainer>
      <BreadCrumbsContext.Provider value={context}>
        {children}
      </BreadCrumbsContext.Provider>
    </>
  );
};
