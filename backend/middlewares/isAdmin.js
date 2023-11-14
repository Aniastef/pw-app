
import User from "../models/userModel.js";

const isAdmin = (req, res, next) => {
	if (req.user && req.user.isAdmin) {
	  next();
	} else {
	  res.status(403).json({ error: 'Unauthorized: Admin access required' });
	}
  };
  export default isAdmin