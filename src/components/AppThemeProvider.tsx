import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function AppThemeProvider({ children }: Props) {
  return <ThemeProvider attribute="class" defaultTheme="light">{children}</ThemeProvider>;
}
