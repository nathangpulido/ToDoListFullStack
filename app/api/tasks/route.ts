import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET - Listar todas as tarefas
export async function GET() {
  const tasks = await prisma.task.findMany({});

  return NextResponse.json(tasks);
}

// POST - Criar uma nova tarefa
export async function POST(request: Request) {
  const { title, description } = await request.json();

  if (!title) {
    return NextResponse.json({ error: "Title is required" }, { status: 400 });
  }

  const task = await prisma.task.create({
    data: {
      title,
      description,
    },
  });

  return NextResponse.json(task, { status: 201 });
}
