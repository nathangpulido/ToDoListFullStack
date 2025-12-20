import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

type Params = {
  params: { id: string };
};

// GET - Obter uma tarefa por ID
export async function GET(_: Request, { params }: Params) {
  console.log(params.id);
  const id = Number(params.id);

  if (isNaN(id)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const task = await prisma.task.findUnique({
    where: { id },
  });

  if (!task) {
    return NextResponse.json({ error: "Task not found" }, { status: 404 });
  }

  return NextResponse.json(task);
}

// PUT - Atualizar tarefa inteira
export async function PUT(request: Request, { params }: Params) {
  const id = Number(params.id);
  const { title, description, isCompleted } = await request.json();

  try {
    const task = await prisma.task.update({
      where: { id },
      data: { title, description, isCompleted },
    });

    return NextResponse.json(task);
  } catch {
    return NextResponse.json({ error: "Task not found" }, { status: 404 });
  }
}

// PATCH - Atualização parcialmente a tarefa
export async function PATCH(request: Request, { params }: Params) {
  const id = Number(params.id);
  const data = await request.json();

  try {
    const task = await prisma.task.update({
      where: { id },
      data,
    });

    return NextResponse.json(task);
  } catch {
    return NextResponse.json({ error: "Task not found" }, { status: 404 });
  }
}

// DELETE - Remover tarefa
export async function DELETE(_: Request, { params }: Params) {
  const id = Number(params.id);

  try {
    await prisma.task.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "Task deleted successfully" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json({ error: "Task not found" }, { status: 404 });
  }
}
