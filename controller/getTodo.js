import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTodo = async (req, res) => {
  const { id } = req.params;

  try {
    const todos = await prisma.todo.findMany({
      where: { userId: id },
    });
    console.log(todos);

    res.json(todos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
