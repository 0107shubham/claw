import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;

  try {
    const todo = await prisma.todo.update({
      where: { id },
      data: {
        title,
        description,
        completed,
      },
    });
    res.json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
