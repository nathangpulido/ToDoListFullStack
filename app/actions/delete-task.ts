"use server";

import { revalidatePath } from "next/cache";

export async function deleteTask(taskId: number) {
  await fetch(`http://localhost:3000/api/tasks/${taskId}`, {
    method: "DELETE",
  });

  revalidatePath("/");
}
