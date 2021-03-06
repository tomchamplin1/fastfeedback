import { getAllFeedback, getSite } from "@/lib/db-admin";
import { formatObjectKeys, logger } from "@/utils/logger";

const func = async (req, res) => {
  try {
    const siteId = req.query.siteId;
    const { feedback } = await getAllFeedback(siteId);
    const { site } = await getSite(siteId);

    console.log(site);

    res.status(200).json({ feedback, site });
  } catch (error) {
    logger.error(
      {
        request: {
          headers: formatObjectKeys(req.headers),
          url: req.url,
          method: req.method,
        },
        response: {
          statusCode: res.statusCode,
        },
      },
      error.message
    );

    res.status(500).json({ error });
  }
};

export default func;
