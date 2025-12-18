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
import { SetStateAction, useState } from "react";

const CreateTask = () => {
  const [taskName, setTaskName] = useState("");
  const [descriptionTaskName, setdescriptionTaskName] = useState("");

  function onTaskNameChangeHandler(e: {
    target: { value: SetStateAction<string> };
  }) {
    setTaskName(e.target.value);
  }

  function onDescriptionTaskNameChangeHandler(e: {
    target: { value: SetStateAction<string> };
  }) {
    setdescriptionTaskName(e.target.value);
  }

  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    console.log("Tarefa criada", taskName, descriptionTaskName);
  }

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
          <form onSubmit={handleSubmit} className="space-y-4">
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
                  value={taskName}
                  onChange={onTaskNameChangeHandler}
                  placeholder="Digite o nome da tarefa..."
                />
              </div>
              <div className="grid gap-3">
                <label htmlFor="taskdescription">Descrição da tarefa</label>
                <Input
                  id="taskdescription"
                  name="taskdescription"
                  value={descriptionTaskName}
                  onChange={onDescriptionTaskNameChangeHandler}
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
