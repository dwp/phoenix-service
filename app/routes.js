const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

//////////            EMPLOYER    VERSION 1
//Location

router.post('/phoenix/employer/v1/location', function (req, res) {
    const register = req.session.data['register'];
    if (register === "yes") {
            res.redirect('/phoenix/employer/v1/business-size');
    } else {
            res.redirect('/phoenix/employer/v1/not-eligible');
    };
})

//business-size

router.post('/phoenix/employer/v1/business-size', function (req, res) {
    const size = req.session.data['size'];
     if (size === "small") {
                    res.redirect('/phoenix/employer/v1/turnover');
    } if (size === "medium") {
            res.redirect('/phoenix/employer/v1/turnover');
    } else {
            res.redirect('/phoenix/employer/v1/not-eligible');
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
                    res.redirect('/phoenix/provider/v1/gdpr-upload');
    }if (gdpr === "no") {
                    res.redirect('/phoenix/provider/v1/not-eligible');


    };
})

//CLINICAL

router.post('/phoenix/provider/v1/clinical-gov', function (req, res) {
    const clinical = req.session.data['clinical'];
     if (clinical === "yes") {
                    res.redirect('/phoenix/provider/v1/clinical-upload');
    }if (clinical === "no") {
                    res.redirect('/phoenix/provider/v1/not-eligible');


    };
})


//FEEDBACK

router.post('/phoenix/provider/v1/feedback', function (req, res) {
    const feedback = req.session.data['feedback'];
     if (feedback === "yes") {
                    res.redirect('/phoenix/provider/v1/feedback-upload');
    }if (feedback === "no") {
                    res.redirect('/phoenix/provider/v1/not-eligible');


    };
})


//REFERRAL

router.post('/phoenix/provider/v1/referral', function (req, res) {
    const referral = req.session.data['referral'];
     if (referral === "yes") {
                    res.redirect('/phoenix/provider/v1/referral-upload');
    }if (referral === "no") {
                    res.redirect('/phoenix/provider/v1/not-eligible');


    };
})


//ASSESSMENT

router.post('/phoenix/provider/v1/assessment', function (req, res) {
    const assessment = req.session.data['assessment'];
     if (assessment === "yes") {
                    res.redirect('/phoenix/provider/v1/assessment-upload');
    }if (assessment === "no") {
                    res.redirect('/phoenix/provider/v1/not-eligible');


    };
})


//OH REPORT

router.post('/phoenix/provider/v1/oh-report', function (req, res) {
    const ohreport = req.session.data['oh-report'];
     if (ohreport === "yes") {
                    res.redirect('/phoenix/provider/v1/oh-report-upload');
    }if (ohreport === "no") {
                    res.redirect('/phoenix/provider/v1/not-eligible');


    };
})


//INPUT

router.post('/phoenix/provider/v1/input', function (req, res) {
    const input = req.session.data['input'];
     if (input === "yes") {
                    res.redirect('/phoenix/provider/v1/name');
    }if (input === "no") {
                    res.redirect('/phoenix/provider/v1/not-eligible');


    };
})


//////////            EMPLOYER    VERSION 2
//Location

router.post('/phoenix/employer/v2/location', function (req, res) {
    const register = req.session.data['register'];
    if (register === "england") {
            res.redirect('/phoenix/employer/v2/business-size');
    } if (register === "wales") {
                  res.redirect('/phoenix/employer/v2/business-size');
    } else {
            res.redirect('/phoenix/employer/v2/not-eligible');
    };
})

//business-size

router.post('/phoenix/employer/v2/business-size', function (req, res) {
    const size = req.session.data['size'];
     if (size === "small") {
            res.redirect('/phoenix/employer/v2/turnover');
    } if (size === "micro") {
            res.redirect('/phoenix/employer/v2/turnover');
    } if (size === "medium") {
            res.redirect('/phoenix/employer/v2/turnover');
    } else {
            res.redirect('/phoenix/employer/v2/not-eligible');
    };
})


//turnover

router.post('/phoenix/employer/v2/turnover', function (req, res) {
    const turnover = req.session.data['turnover'];
     if (turnover === "yes") {
            res.redirect('/phoenix/employer/v2/you-may-be-eligible');

    } else {
            res.redirect('/phoenix/employer/v2/balance-sheet');
    };
})



//balance sheet

router.post('/phoenix/employer/v2/balance-sheet', function (req, res) {
    const balance = req.session.data['balance'];
     if (balance === "yes") {
            res.redirect('/phoenix/employer/v2/you-may-be-eligible');

    } else {
            res.redirect('/phoenix/employer/v2/not-eligible');
    };
})




//////////            EMPLOYER    VERSION 3
//Location

router.post('/phoenix/employer/v3/location', function (req, res) {
    const register = req.session.data['register'];
    if (register === "england") {
            res.redirect('/phoenix/employer/v3/business-size');
    } if (register === "wales") {
                  res.redirect('/phoenix/employer/v3/business-size');
    } else {
            res.redirect('/phoenix/employer/v3/not-eligible');
    };
})

//business-size

router.post('/phoenix/employer/v3/business-size', function (req, res) {
    const size = req.session.data['size'];
     if (size === "small") {
            res.redirect('/phoenix/employer/v3/turnover');
    } if (size === "micro") {
            res.redirect('/phoenix/employer/v3/turnover');
    } if (size === "medium") {
            res.redirect('/phoenix/employer/v3/turnover');
    } else {
            res.redirect('/phoenix/employer/v3/not-eligible');
    };
})


//turnover

router.post('/phoenix/employer/v3/turnover', function (req, res) {
    const turnover = req.session.data['turnover'];
     if (turnover === "yes") {
            res.redirect('/phoenix/employer/v3/you-may-be-eligible');

    } else {
            res.redirect('/phoenix/employer/v3/balance-sheet');
    };
})



//balance sheet

router.post('/phoenix/employer/v3/balance-sheet', function (req, res) {
    const balance = req.session.data['balance'];
     if (balance === "yes") {
            res.redirect('/phoenix/employer/v3/you-may-be-eligible');

    } else {
            res.redirect('/phoenix/employer/v3/not-eligible');
    };
})


/////////            EMPLOYER    VERSION 3

//it didnt require any routing, as we only redesigned the start page and OH page



//////////            EMPLOYER    VERSION 5
//Location

router.post('/phoenix/employer/v5/location', function (req, res) {
    const register = req.session.data['register'];
    if (register === "england") {
            res.redirect('/phoenix/employer/v5/business-size');
    } if (register === "wales") {
                  res.redirect('/phoenix/employer/v5/business-size');
    } else {
            res.redirect('/phoenix/employer/v5/not-eligible-location');
    };
})

//business-size

router.post('/phoenix/employer/v5/business-size', function (req, res) {
    const size = req.session.data['size'];
     if (size === "small") {
            res.redirect('/phoenix/employer/v5/turnover');
    } if (size === "micro") {
            res.redirect('/phoenix/employer/v5/turnover');
    } if (size === "medium") {
            res.redirect('/phoenix/employer/v5/turnover');
    } else {
            res.redirect('/phoenix/employer/v5/not-eligible-size');
    };
})


//turnover

router.post('/phoenix/employer/v5/turnover', function (req, res) {
    const turnover = req.session.data['turnover'];
     if (turnover === "no") {
            res.redirect('/phoenix/employer/v5/balance-sheet');

    } else {
            res.redirect('/phoenix/employer/v5/you-may-be-eligible');
    };
})



//balance sheet

router.post('/phoenix/employer/v5/balance-sheet', function (req, res) {
    const balance = req.session.data['balance'];
     if (balance === "no") {
            res.redirect('/phoenix/employer/v5/not-eligible-balance-sheet');
    } else {
            res.redirect('/phoenix/employer/v5/you-may-be-eligible');
    };

})



module.exports = router
