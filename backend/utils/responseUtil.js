
module.exports = {
  responseUtil: async (req, res, err, msg, data, resCode, total) => {
      try {
          return res.status(resCode).json({ error: err, msg: msg, data: data,total:total });

      } catch (e) {
          return res.status(500).json({ error: true, msg:'Failed', data: data });
      }
  },
  responseUtilMessage: async (req, res, err, msg, resCode) => {
      try {
          return res.status(resCode).json({ error: err, msg: msg});

      } catch (e) {
          return res.status(500).json({ error: true, msg:'Failed'});
      }
  },
}
