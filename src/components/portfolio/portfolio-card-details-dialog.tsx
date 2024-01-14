import { PortfolioItem } from "@/lib/portfolio";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogFooter,
} from "../ui/dialog";
import { DialogClose, DialogDescription } from "@radix-ui/react-dialog";
import { TypographyUL } from "../typography";

interface PortfolioCardDetailsButtonProps {
  item: PortfolioItem;
}

export default function PortfolioCardDetailsDialog({
  item,
}: PortfolioCardDetailsButtonProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm">View Details</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{item.title}</DialogTitle>
          <DialogDescription>{item.longDescription}</DialogDescription>
          <TypographyUL>
            {item.links.map((link) => (
              <li key={link.url}>
                <a href={link.url} target="_blank">
                  <Button variant="link" size="link">
                    {link.text}
                  </Button>
                </a>
              </li>
            ))}
          </TypographyUL>
        </DialogHeader>
        <DialogFooter>
          <DialogClose>
            <Button variant="secondary">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
