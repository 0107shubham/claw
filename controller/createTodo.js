import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createTodo = async (req, res) => {
  const { title, description, completed, userId } = req.body;

  try {
    const todo = await prisma.todo.create({
      data: {
        title,
        description,
        completed,
        user: { connect: { id: userId } }, // Connect todo to a user
      },
    });
    res.status(201).json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
