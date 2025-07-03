function allowedRoles(allowedRoles) {
  return (req, res, next) => {
    if (!req.userId || !allowedRoles.includes(req.userType)) {
      return res.json({ error: "Access denied" });
    }
    next();
  };
}

module.exports = allowedRoles;
