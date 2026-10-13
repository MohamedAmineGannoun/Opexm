import { ContactForm } from "@/components/contact-form";
import { dictionaries } from "@/lib/i18n-dictionaries";
import { isLocale, type Locale } from "@/lib/i18n-config";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) return null;
  const locale = lang as Locale;
  const dict = dictionaries[locale];

  return <ContactForm dict={dict} />;
}
