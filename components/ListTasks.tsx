import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";
import { ChevronRight } from "lucide-react";
import { Trash2 } from "lucide-react";

const ListTask = () => {
  return (
    <>
      <Card className="bg-black w-full max-w-md flex flex-col items-center justify-center">
        <Item variant="outline" className="w-sm max-w-fit">
          <ItemContent>
            <ItemTitle className="text-white">Basic Item</ItemTitle>
            <ItemDescription className="text-slate-300">
              A simple item with title and description.
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant="outline" size="sm">
              <ChevronRight />
            </Button>
            <Button variant="outline" size="sm">
              <Trash2 />
            </Button>
          </ItemActions>
        </Item>
      </Card>
    </>
  );
};

export default ListTask;
