import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";
import { SquarePen } from "lucide-react";
import DeleteTask from "./DeleteTask";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { editTask } from "@/app/actions/edit-task";

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
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="cursor-pointer">
                  <SquarePen />
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-zinc-900 text-zinc-100 border border-zinc-800">
                <form
                  action={editTask}
                  className="space-y-4"
                  autoComplete="off"
                >
                  <input type="hidden" name="taskId" value={task.id} />

                  <DialogHeader>
                    <DialogTitle>Editar Tarefa</DialogTitle>
                    <DialogDescription></DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4">
                    <div className="grid gap-3">
                      <label htmlFor="taskname">Editar Título</label>
                      <Input
                        id="taskname"
                        name="taskname"
                        defaultValue={task.title}
                        required
                      />
                    </div>
                    <div className="grid gap-3">
                      <label htmlFor="taskdescription">Editar Descrição</label>
                      <Input
                        id="taskdescription"
                        name="taskdescription"
                        defaultValue={task.description}
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant={"outline"} className="text-black">
                        Cancelar
                      </Button>
                    </DialogClose>
                    <DialogClose asChild>
                      <Button
                        variant={"ghost"}
                        className="text-white"
                        type="submit"
                      >
                        Editar Tarefa
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>

            <DeleteTask taskId={task.id} />
          </ItemActions>
        </Item>
      ))}
    </Card>
  );
};

export default ListTask;
