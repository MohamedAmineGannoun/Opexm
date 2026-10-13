import { CtaSection } from "@/components/cta";
import { PageHero } from "@/components/page-hero";
import { SectionTitle } from "@/components/shared-ui";
import { ProjectsGrid, TestimonialsGrid } from "@/components/data-sections";
import { dictionaries } from "@/lib/i18n-dictionaries";
import { isLocale, type Locale } from "@/lib/i18n-config";

export default async function RealisationsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) return null;
  const locale = lang as Locale;
  const dict = dictionaries[locale];

  return (
    <>
      <PageHero title={dict.worksPage.title} intro={dict.worksPage.intro} />

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <ProjectsGrid locale={locale} />
      </section>

      {/*<section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionTitle
            etikette={dict.worksPage.clientsEta}
            title={dict.worksPage.clientsTitle}
          />
          <TestimonialsGrid locale={locale} />
        </div>
      </section>*/}

      <CtaSection
        locale={locale}
        title={dict.worksPage.ctaTitle}
        description={dict.worksPage.ctaText}
      />
    </>
  );
}
