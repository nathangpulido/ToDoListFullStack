import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET - Obter uma tarefa por ID
export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const taskId = Number(id);

  if (isNaN(taskId)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const task = await prisma.task.findUnique({
    where: { id: taskId },
  });

  if (!task) {
    return NextResponse.json({ error: "Task not found" }, { status: 404 });
  }

  return NextResponse.json(task);
}

// PUT - Atualizar tarefa inteira
export async function PUT(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const taskId = Number(id);
  const { title, description, isCompleted } = await request.json();

  try {
    const task = await prisma.task.update({
      where: { id: taskId },
      data: { title, description, isCompleted },
    });

    return NextResponse.json(task);
  } catch {
    return NextResponse.json({ error: "Task not found" }, { status: 404 });
  }
}

// PATCH - Atualização parcialmente a tarefa
export async function PATCH(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const taskId = Number(id);
  const data = await request.json();

  try {
    const task = await prisma.task.update({
      where: { id: taskId },
      data,
    });

    return NextResponse.json(task);
  } catch {
    return NextResponse.json({ error: "Task not found" }, { status: 404 });
  }
}

// DELETE - Remover tarefa
export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const taskId = Number(id);

  try {
    await prisma.task.delete({
      where: { id: taskId },
    });

    return NextResponse.json(
      { message: "Task deleted successfully" },
      { status: 204 }
    );
  } catch {
    return NextResponse.json({ error: "Task not found" }, { status: 404 });
  }
}
