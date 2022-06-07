const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


//LOGIN Q

router.post('/login1', function (req, res) {
    var login = req.session.data['login1'];
    switch (login) {
        case undefined:
            res.redirect('/login');
            break;
            case "teamleader":
            res.redirect('/teamleader/main-menu');
            break;
            case "agent":
            res.redirect('/agent/main-menu');
            break;
            case "manager":
            res.redirect('/manager/main-menu');
    };
});
module.exports = router
