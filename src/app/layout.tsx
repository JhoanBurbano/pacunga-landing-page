import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Finca La Pacunga",
  description: "Finca La Pacunga, productora apicola de miel de abejas y derivados",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
      className="bg-orange-100"
      >
        {children}
      </body>
    </html>
  );
}
