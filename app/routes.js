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

router.post('/phoenix/provider/v1/seqohs', function (req, res) {
    const seqohs = req.session.data['seqohs'];
     if (seqohs === "yes") {
                    res.redirect('/phoenix/provider/v1/seqohs-number');
    }if (seqohs === "no") {
                    res.redirect('/phoenix/provider/v1/no-seqohs-content');

    } else {
            res.redirect('/phoenix/provider/v1/no-seqohs-content');
    };
})



//GDPR

router.post('/phoenix/provider/v1/gdpr', function (req, res) {
    const gdpr = req.session.data['gdpr'];
     if (gdpr === "yes") {
                    res.redirect('/phoenix/provider/v1/upload');
    }if (gdpr === "no") {
                    res.redirect('/phoenix/provider/v1/not-eligible');


    };
})

//CLINICAL

router.post('/phoenix/provider/v1/clinical-gov', function (req, res) {
    const clinical = req.session.data['clinical'];
     if (clinical === "yes") {
                    res.redirect('/phoenix/provider/v1/upload');
    }if (clinical === "no") {
                    res.redirect('/phoenix/provider/v1/not-eligible');


    };
})



module.exports = router
