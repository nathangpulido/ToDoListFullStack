"use client";

import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { deleteTask } from "@/app/actions/delete-task";

const DeleteTask = ({ taskId }: { taskId: number }) => {
  return (
    <Button
      variant={"outline"}
      size={"sm"}
      onClick={() => deleteTask(taskId)}
      className="cursor-pointer"
    >
      <Trash2 />
    </Button>
  );
};

export default DeleteTask;
