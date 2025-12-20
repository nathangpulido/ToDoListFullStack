import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";
import { ChevronRight, Trash2 } from "lucide-react";

type Task = {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
};

const ListTask = async () => {
  const res = await fetch("http://localhost:3000/api/tasks", {
    cache: "no-store",
  });

  const tasks: Task[] = await res.json();

  return (
    <Card className="bg-black w-full max-w-md flex flex-col gap-2 p-4">
      {tasks.map((task) => (
        <Item key={task.id} variant="outline" className="w-full">
          <ItemContent>
            <ItemTitle className="text-white">{task.title}</ItemTitle>

            <ItemDescription className="text-slate-300">
              {task.description}
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
      ))}
    </Card>
  );
};

export default ListTask;
