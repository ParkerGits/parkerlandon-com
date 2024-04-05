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
import AnchorText from "../typography/anchor-text";
import LoomEmbed from "./loom-embed";

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
          {item.loomUrl && <LoomEmbed url={item.loomUrl} />}
          <DialogDescription>{item.longDescription}</DialogDescription>
          <TypographyUL>
            {item.links.map((link) => (
              <li key={link.url}>
                <a href={link.url} target="_blank">
                  <AnchorText>{link.text}</AnchorText>
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
