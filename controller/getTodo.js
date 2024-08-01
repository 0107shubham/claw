import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTodo = async (req, res) => {
  const { userId } = req.params;

  try {
    const todos = await prisma.todo.findMany({
      where: { userId },
    });
    res.json(todos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
