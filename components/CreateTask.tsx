"use client";

import {
  DialogContent,
  DialogHeader,
  Dialog,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { createTask } from "@/app/actions/create-task";

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
        <DialogTrigger asChild>
          <Button variant="outline">Adicionar nova tarefa</Button>
        </DialogTrigger>
        <DialogContent className="bg-zinc-900 text-zinc-100 border border-zinc-800">
          <form action={createTask} className="space-y-4">
            <DialogHeader>
              <DialogTitle>Crie sua tarefa</DialogTitle>
              <DialogDescription>
                Preencha os dados abaixo para criar uma nova tarefa.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <label htmlFor="taskname">Nome da Tarefa</label>
                <Input
                  id="taskname"
                  name="taskname"
                  placeholder="Digite o nome da tarefa..."
                  required
                />
              </div>
              <div className="grid gap-3">
                <label htmlFor="taskdescription">Descrição da tarefa</label>
                <Input
                  id="taskdescription"
                  name="taskdescription"
                  placeholder="Digite a descrição da tarefa..."
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
          </form>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default CreateTask;
