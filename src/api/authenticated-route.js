const { ROLES } = require("../shared/roles");

function authenticatedRoute(req, res, next) {
    if (req.session && req.session.isPopulated) {
        next();
    } else {
        res.sendStatus("401");
    }
}

function adminRoute(req, res, next) {
    if (req.session && req.session.role === ROLES.admin) {
        next();
    } else {
        res.sendStatus("401");
    }
}

module.exports = {
    authenticatedRoute,
    adminRoute
};
