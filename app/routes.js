const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

//////////                VERSION 1
//Location

router.post('/phoenix/v1/location', function (req, res) {
    const register = req.session.data['register'];
    if (register === "yes") {
            res.redirect('/phoenix/v1/business-size');
    } else {
            res.redirect('/phoenix/v1/not-eligible');
    };
})

//business-size

router.post('/phoenix/v1/business-size', function (req, res) {
    const size = req.session.data['size'];
     if (size === "small") {
                    res.redirect('/phoenix/v1/turnover');
    } if (size === "medium") {
            res.redirect('/phoenix/v1/turnover');
    } else {
            res.redirect('/phoenix/v1/not-eligible');
    };
})


//////////           PROVIDER VERSION 1
//seqosh

router.post('/phoenix/provider/v1/seqosh', function (req, res) {
    const seqosh = req.session.data['seqosh'];
     if (seqosh === "yes") {
                    res.redirect('/phoenix/provider/v1/seqosh-number');
    }if (seqosh === "no") {
                    res.redirect('/phoenix/provider/v1/gdpr');

    } else {
            res.redirect('/phoenix/provider/v1/gdpr');
    };
})






module.exports = router
