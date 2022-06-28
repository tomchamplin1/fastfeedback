import { getAllFeedback } from "@/lib/db-admin";
import { db } from "@/lib/firebase-admin";

const func = async (req, res) => {
  const siteId = req.query.siteId;
  const { feedback, error } = await getAllFeedback(siteId);

  if (error) {
    res.status(500).json({ error });
  }

  res.status(200).json({ feedback });
};

export default func;
