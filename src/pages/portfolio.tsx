import PageLayout from "@/components/layouts/page-layout";
import PortfolioList from "@/components/portfolio/portfolio-list";
import { TypographyH4 } from "@/components/typography";
import AnchorText from "@/components/typography/anchor-text";
import { TitleText } from "@/components/typography/title-text";
import { projects } from "@/lib/portfolio";

export default function PortfolioPage() {
  return (
    <PageLayout>
      <main>
        <div className="flex flex-col items-center justify-center space-y-2 mb-8">
          <TitleText className="mb-0">Parker&apos;s Portfolio</TitleText>
          <TypographyH4 className="mt-0 text-zinc-500 text-center text-sm sm:text-xl">
            Fullstack Software Engineer at Smartsheet
          </TypographyH4>
          <a target="_blank" href="/resume.pdf" rel="noopener noreferrer">
            <AnchorText>View Resume</AnchorText>
          </a>
        </div>
        <PortfolioList items={projects} />
      </main>
    </PageLayout>
  );
}
