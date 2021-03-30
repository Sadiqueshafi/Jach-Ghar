// // var roleCheck = require('./userRolesTable')
// var logger = require('../logger/log')
// let rbac = (req, res, next) => {
//     var allow = false;
//     const role = req.session.role
//     logger.info(role)
//     // var roleData = roleCheck.roleBasedControl(role)
//     var selectAll = ['*']
//     logger.info(req.method)
//     if (roleData == undefined) {
//         return res.status(403).send({ message: "access denied" })
//     }
//     value = roleData['permissions']
//     logger.info(value)
//     grantingAccess = value[req.headers.tableid]
//     logger.info(grantingAccess)
//     if (Object.keys(grantingAccess).indexOf(selectAll) != -1) {
//         logger.info('key present')
//         allow = true;
//     }
//     else if (req.method == "GET" && grantingAccess.read) {
//         logger.info('only get method can be accessable')
//         allow = true;
//     }
//     else if (req.method == "POST" && (grantingAccess.write || grantingAccess.update)) {
//         logger.info('only post method can be accessible')
//         allow = true;
//     }
//     else if (req.method == "DELETE" && grantingAccess.delete) {
//         allow = true;
//     }
//     else {
//         return res.status(403).send({ message: "access denied" })
//     }
//     if (allow) {
//         next();
//     }

// }
// module.exports = {
//     rbacMiddleWare: rbac
// }
