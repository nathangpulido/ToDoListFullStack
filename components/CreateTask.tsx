"use client";

import {
  DialogContent,
  DialogHeader,
  Dialog,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const CreateTask = () => {
  return (
    <Card className="bg-black w-full max-w-md justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-2">
        <h2 className="text-white text-2xl font-semibold">
          Gerenciador de Tarefas
        </h2>
        <p className="text-slate-300 ">Organize suas tarefas</p>
      </div>
      <Separator />

      <Dialog>
        <form>
          <DialogTrigger asChild>
            <Button variant="outline">Criar nova tarefa</Button>
          </DialogTrigger>
          <DialogContent className="bg-zinc-900 text-zinc-100 border border-zinc-800">
            <DialogHeader>
              <DialogTitle>Crie sua tarefa</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <label htmlFor="taskname">Nome da Tarefa</label>
                <Input
                  id="taskname"
                  name="taskname"
                  defaultValue="Digite o nome da tarefa..."
                />
              </div>
              <div className="grid gap-3">
                <label htmlFor="taskdescription">Descrição da tarefa</label>
                <Input
                  id="taskdescription"
                  name="taskdescription"
                  defaultValue="Crie uma descrição para a tarefa..."
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant={"outline"} className="text-black">
                  Cancelar
                </Button>
              </DialogClose>
              <Button variant={"ghost"} className="text-white" type="submit">
                Criar Tarefa
              </Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </Card>
  );
};

export default CreateTask;
