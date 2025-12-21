"use server";

import { revalidatePath } from "next/cache";

export async function createTask(formData: FormData) {
  const title = formData.get("taskname") as string;
  const description = formData.get("taskdescription") as string;

  if (!title) return;

  await fetch("http://localhost:3000/api/tasks", {
    method: "POST",
    headers: { Content_Type: "application/json" },
    body: JSON.stringify({
      title,
      description,
    }),
  });

  revalidatePath("/");
}
