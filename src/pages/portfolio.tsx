import PageLayout from "@/components/layouts/page-layout";
import PortfolioList from "@/components/portfolio-list";
import { TitleText } from "@/components/typography/title-text";
import { projects } from "@/lib/portfolio";

export default function PortfolioPage() {
  return (
    <PageLayout>
      <main>
        <TitleText>Parker&apos;s Portfolio</TitleText>
        <PortfolioList items={projects} />
      </main>
    </PageLayout>
  );
}
