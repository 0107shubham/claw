import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const deleteTodo = async (req, res) => {
  const { id } = req.params; // Get the id of the TODO to delete from the request parameters
  console.log("delete", id);

  try {
    // Delete the TODO by its id
    const deletedTodo = await prisma.todo.delete({
      where: { id: id },
    });

    // If the TODO was deleted successfully, return a 200 status with the deleted TODO
    res.status(200).json(deletedTodo);
  } catch (error) {
    // If an error occurs, return a 400 status with the error message
    res.status(400).json({ error: error.message });
  }
};
