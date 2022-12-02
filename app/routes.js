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


//////////            EMPLOYER    VERSION 6
//Location

router.post('/phoenix/employer/v6/location', function (req, res) {
    const register = req.session.data['register'];
    if (register === "england") {
            res.redirect('/phoenix/employer/v6/business-size');
    } if (register === "wales") {
                  res.redirect('/phoenix/employer/v6/business-size');
    } else {
            res.redirect('/phoenix/employer/v6/not-eligible-location');
    };
})

//business-size

router.post('/phoenix/employer/v6/business-size', function (req, res) {
    const size = req.session.data['size'];
     if (size === "small") {
            res.redirect('/phoenix/employer/v6/turnover');
    } if (size === "micro") {
            res.redirect('/phoenix/employer/v6/turnover');
    } if (size === "medium") {
            res.redirect('/phoenix/employer/v6/turnover');
    } else {
            res.redirect('/phoenix/employer/v6/not-eligible-size');
    };
})


//turnover

router.post('/phoenix/employer/v6/turnover', function (req, res) {
    const turnover = req.session.data['turnover'];
     if (turnover === "no") {
            res.redirect('/phoenix/employer/v6/balance-sheet');

    } else {
            res.redirect('/phoenix/employer/v6/you-may-be-eligible');
    };
})



//balance sheet

router.post('/phoenix/employer/v6/balance-sheet', function (req, res) {
    const balance = req.session.data['balance'];
     if (balance === "no") {
            res.redirect('/phoenix/employer/v6/not-eligible-balance-sheet');
    } else {
            res.redirect('/phoenix/employer/v6/you-may-be-eligible');
    };

})


/////////            PROVIDER CODE CHECKER  VERSION 2


router.post('/phoenix/provider/code-checker/v2/code-info', function (req, res) {
    const rightcompany = req.session.data['rightcompany'];
     if (rightcompany === "yes") {
            res.redirect('/phoenix/provider/code-checker/v2/claim-code');
    } else {
            res.redirect('/phoenix/provider/code-checker/v2/code-doesnt-match');
    };

})


/////////            PROVIDER CODE CHECKER  VERSION 3


router.post('/phoenix/provider/code-checker/v3/code-info', function (req, res) {
    const rightcompany = req.session.data['rightcompany'];
     if (rightcompany === "yes") {
            res.redirect('/phoenix/provider/code-checker/v3/claim-code');
    } else {
            res.redirect('/phoenix/provider/code-checker/v3/code-doesnt-match');
    };

})



//////////            EMPLOYER    VERSION 7
//Location

router.post('/phoenix/employer/v7/location', function (req, res) {
    const register = req.session.data['register'];
    if (register === "england") {
            res.redirect('/phoenix/employer/v7/business-size');
    } if (register === "wales") {
                  res.redirect('/phoenix/employer/v7/business-size');
    } else {
            res.redirect('/phoenix/employer/v7/not-eligible-location');
    };
})

//business-size

router.post('/phoenix/employer/v7/business-size', function (req, res) {
    const size = req.session.data['size'];
     if (size === "small") {
            res.redirect('/phoenix/employer/v7/turnover');
    } if (size === "micro") {
            res.redirect('/phoenix/employer/v7/turnover');
    } if (size === "medium") {
            res.redirect('/phoenix/employer/v7/turnover');
    } else {
            res.redirect('/phoenix/employer/v7/not-eligible-size');
    };
})


//turnover

router.post('/phoenix/employer/v7/turnover', function (req, res) {
    const turnover = req.session.data['turnover'];
     if (turnover === "no") {
            res.redirect('/phoenix/employer/v7/balance-sheet');

    } else {
            res.redirect('/phoenix/employer/v7/you-may-be-eligible');
    };
})



//balance sheet

router.post('/phoenix/employer/v7/balance-sheet', function (req, res) {
    const balance = req.session.data['balance'];
     if (balance === "no") {
            res.redirect('/phoenix/employer/v7/not-eligible-balance-sheet');
    } else {
            res.redirect('/phoenix/employer/v7/you-may-be-eligible');
    };

})


//////////            EMPLOYER    VERSION 8
//Location

router.post('/phoenix/employer/v8/location', function (req, res) {
    const register = req.session.data['register'];
    if (register === "england") {
            res.redirect('/phoenix/employer/v8/business-size');
    } if (register === "wales") {
                  res.redirect('/phoenix/employer/v8/business-size');
    } else {
            res.redirect('/phoenix/employer/v8/not-eligible-location');
    };
})

//business-size

router.post('/phoenix/employer/v8/business-size', function (req, res) {
    const size = req.session.data['size'];
     if (size === "small") {
            res.redirect('/phoenix/employer/v8/turnover');
    } if (size === "micro") {
            res.redirect('/phoenix/employer/v8/turnover');
    } if (size === "medium") {
            res.redirect('/phoenix/employer/v8/turnover');
    } else {
            res.redirect('/phoenix/employer/v8/not-eligible-size');
    };
})


//turnover

router.post('/phoenix/employer/v8/turnover', function (req, res) {
    const turnover = req.session.data['turnover'];
     if (turnover === "no") {
            res.redirect('/phoenix/employer/v8/balance-sheet');

    } else {
            res.redirect('/phoenix/employer/v8/you-may-be-eligible');
    };
})



//balance sheet

router.post('/phoenix/employer/v8/balance-sheet', function (req, res) {
    const balance = req.session.data['balance'];
     if (balance === "no") {
            res.redirect('/phoenix/employer/v8/not-eligible-balance-sheet');
    } else {
            res.redirect('/phoenix/employer/v8/you-may-be-eligible');
    };

})



//////////            EMPLOYER    VERSION 9
//Location

router.post('/phoenix/employer/v9/location', function (req, res) {
    const register = req.session.data['register'];
    if (register === "england") {
            res.redirect('/phoenix/employer/v9/business-size');
    } if (register === "wales") {
                  res.redirect('/phoenix/employer/v9/business-size');
    } else {
            res.redirect('/phoenix/employer/v9/not-eligible-location');
    };
})

//business-size

router.post('/phoenix/employer/v9/business-size', function (req, res) {
    const size = req.session.data['size'];
     if (size === "small") {
            res.redirect('/phoenix/employer/v9/turnover');
    } if (size === "micro") {
            res.redirect('/phoenix/employer/v9/turnover');
    } if (size === "medium") {
            res.redirect('/phoenix/employer/v9/turnover');
    } else {
            res.redirect('/phoenix/employer/v9/not-eligible-size');
    };
})


//turnover

router.post('/phoenix/employer/v9/turnover', function (req, res) {
    const turnover = req.session.data['turnover'];
     if (turnover === "no") {
            res.redirect('/phoenix/employer/v9/balance-sheet');

    } else {
            res.redirect('/phoenix/employer/v9/you-may-be-eligible');
    };
})



//balance sheet

router.post('/phoenix/employer/v9/balance-sheet', function (req, res) {
    const balance = req.session.data['balance'];
     if (balance === "no") {
            res.redirect('/phoenix/employer/v9/not-eligible-balance-sheet');
    } else {
            res.redirect('/phoenix/employer/v9/you-may-be-eligible');
    };

})


//////////            EMPLOYER    VERSION 10
//Location

router.post('/phoenix/employer/v10/location', function (req, res) {
    const register = req.session.data['register'];
    if (register === "england") {
            res.redirect('/phoenix/employer/v10/business-size');
    } if (register === "wales") {
                  res.redirect('/phoenix/employer/v10/business-size');
    } else {
            res.redirect('/phoenix/employer/v10/not-eligible-location');
    };
})

//business-size

router.post('/phoenix/employer/v10/business-size', function (req, res) {
    const size = req.session.data['size'];
     if (size === "small") {
            res.redirect('/phoenix/employer/v10/turnover');
    } if (size === "micro") {
            res.redirect('/phoenix/employer/v10/turnover');
    } if (size === "medium") {
            res.redirect('/phoenix/employer/v10/turnover');
    } else {
            res.redirect('/phoenix/employer/v10/not-eligible-size');
    };
})


//turnover

router.post('/phoenix/employer/v10/turnover', function (req, res) {
    const turnover = req.session.data['turnover'];
     if (turnover === "no") {
            res.redirect('/phoenix/employer/v10/balance-sheet');

    } else {
            res.redirect('/phoenix/employer/v10/you-may-be-eligible');
    };
})



//balance sheet

router.post('/phoenix/employer/v10/balance-sheet', function (req, res) {
    const balance = req.session.data['balance'];
     if (balance === "no") {
            res.redirect('/phoenix/employer/v10/not-eligible-balance-sheet');
    } else {
            res.redirect('/phoenix/employer/v10/you-may-be-eligible');
    };

})

//email address

router.post('/phoenix/employer/v10/email', function (req, res) {
    const email = req.session.data['email'];
     if (email === "yes") {
            res.redirect('/phoenix/employer/v10/email-address');
    } else {
            res.redirect('/phoenix/employer/v10/phone-number');
    };

})

//////////            EMPLOYER    VERSION 11
//Location

router.post('/phoenix/employer/v11/location', function (req, res) {
    const register = req.session.data['register'];
    if (register === "england") {
            res.redirect('/phoenix/employer/v11/business-size');
    } if (register === "wales") {
                  res.redirect('/phoenix/employer/v11/business-size');
    } else {
            res.redirect('/phoenix/employer/v11/not-eligible-location');
    };
})

//business-size

router.post('/phoenix/employer/v11/business-size', function (req, res) {
    const size = req.session.data['size'];
     if (size === "small") {
            res.redirect('/phoenix/employer/v11/turnover');
    } if (size === "micro") {
            res.redirect('/phoenix/employer/v11/turnover');
    } if (size === "medium") {
            res.redirect('/phoenix/employer/v11/turnover');
    } else {
            res.redirect('/phoenix/employer/v11/not-eligible-size');
    };
})


//turnover

router.post('/phoenix/employer/v11/turnover', function (req, res) {
    const turnover = req.session.data['turnover'];
     if (turnover === "no") {
            res.redirect('/phoenix/employer/v11/balance-sheet');

    } else {
            res.redirect('/phoenix/employer/v11/you-may-be-eligible');
    };
})



//balance sheet

router.post('/phoenix/employer/v11/balance-sheet', function (req, res) {
    const balance = req.session.data['balance'];
     if (balance === "no") {
            res.redirect('/phoenix/employer/v11/not-eligible-balance-sheet');
    } else {
            res.redirect('/phoenix/employer/v11/you-may-be-eligible');
    };

})

//email address

router.post('/phoenix/employer/v11/email', function (req, res) {
    const email = req.session.data['email'];
     if (email === "yes") {
            res.redirect('/phoenix/employer/v11/email-address');
    } else {
            res.redirect('/phoenix/employer/v11/phone-number');
    };

})


//////////            AGENT    VERSION 3
//Add branch

router.post('/phoenix/agent/v4/want-add-branch', function (req, res) {
    const branch = req.session.data['branch'];
    if (branch === "yes") {
            res.redirect('/phoenix/agent/v4/add-new-2');

    } else {
            res.redirect('/phoenix/agent/v4/added-branch');
    };
})


module.exports = router
