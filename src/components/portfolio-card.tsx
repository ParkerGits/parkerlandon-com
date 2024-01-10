import { PortfolioItem } from "@/lib/portfolio";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import PortfolioCardTag from "./portfolio-card-tag";

interface PortfolioCardProps {
  item: PortfolioItem;
}

export default function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader className="flex flex-row items-center gap-4">
        <span aria-label={`Project 1 Emoji`} role="img" className="text-6xl">
          {item.emoji}
        </span>
        <div className="flex flex-col gap-1">
          <CardTitle>{item.title}</CardTitle>
          <CardDescription>{item.shortDescription}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex flex-row flex-wrap gap-1">
        {item.tags.map((tag) => (
          <PortfolioCardTag key={tag} tag={tag} />
        ))}
      </CardContent>
      <CardFooter>
        <Button>View Details</Button>
      </CardFooter>
    </Card>
  );
}
