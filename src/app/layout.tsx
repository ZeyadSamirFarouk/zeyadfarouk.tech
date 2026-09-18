import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://zeyadfarouk.tech"),
  title: {
    default: "زياد سمير فاروق | مصمم جرافيك أول",
    template: "%s | zeyadfarouk.tech",
  },
  description:
    "موقع احترافي لعرض أعمال وخدمات زياد سمير فاروق كمصمم جرافيك أول مع نموذج طلب مشروع وتواصل مباشر.",
  openGraph: {
    title: "زياد سمير فاروق | Senior Graphic Designer",
    description:
      "هوية بصرية، حملات إبداعية، وتصميمات عالية الجودة للعلامات التجارية التي تبحث عن حضور فاخر.",
    url: "https://zeyadfarouk.tech",
    siteName: "zeyadfarouk.tech",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ar" dir="rtl" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
