import { NextResponse } from "next/server";

type Task = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

// Banco de dados simulado
const tasks: Task[] = [
  {
    id: 1,
    title: "Task 1",
    description: "Description for Task 1",
    completed: false,
  },
  {
    id: 2,
    title: "Task 2",
    description: "Description for Task 2",
    completed: true,
  },
];

// GET - Listar todas as tarefas
export async function GET() {
  return NextResponse.json(tasks);
}

// GET - Obter uma tarefa específica por ID
export async function GET_BY_ID(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id, 10);
  const task = tasks.find((task) => task.id === id);
  if (!task) {
    return NextResponse.json({ error: "Task not found" }, { status: 404 });
  }
  return NextResponse.json(task);
}

// POST - Criar uma nova tarefa
export async function POST(request: Request) {
  const { title, description } = await request.json();
  const newTask: Task = {
    id: tasks.length + 1,
    title,
    description,
    completed: false,
  };
  tasks.push(newTask);
  return NextResponse.json(
    { message: "Task created successfully" },
    { status: 201 }
  );
}

// PUT - Atualizar uma tarefa existente
export async function PUT(request: Request) {
  const { id, title, description, completed } = await request.json();
  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex === -1) {
    return NextResponse.json({ error: "Task not found" }, { status: 404 });
  }
  tasks[taskIndex] = { ...tasks[taskIndex], title, description, completed };
  return NextResponse.json(
    { message: "Task updated successfully" },
    { status: 200 }
  );
}

// PATCH - Atualizar parcialmente uma tarefa existente
export async function PATCH(request: Request) {
  const { id, ...updates } = await request.json();
  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex === -1) {
    return NextResponse.json({ error: "Task not found" }, { status: 404 });
  }
  tasks[taskIndex] = { ...tasks[taskIndex], ...updates };
  return NextResponse.json(
    { message: "Task updated successfully" },
    { status: 200 }
  );
}

// DELETE - Remover uma tarefa
export async function DELETE(request: Request) {
  const { id } = await request.json();
  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex === -1) {
    return NextResponse.json({ error: "Task not found" }, { status: 404 });
  }
  tasks.splice(taskIndex, 1);
  return NextResponse.json(
    { message: "Task deleted successfully" },
    { status: 200 }
  );
}
