const fileUpload = require("express-fileupload");

const response = {
    "medications":[{
            "aceInhibitors":[{
                "name":"lisinopril",
                "strength":"10 mg Tab",
                "dose":"1 tab",
                "route":"PO",
                "sig":"daily",
                "pillCount":"#90",
                "refills":"Refill 3"
            }],
            "antianginal":[{
                "name":"nitroglycerin",
                "strength":"0.4 mg Sublingual Tab",
                "dose":"1 tab",
                "route":"SL",
                "sig":"q15min PRN",
                "pillCount":"#30",
                "refills":"Refill 1"
            }],
            "anticoagulants":[{
                "name":"warfarin sodium",
                "strength":"3 mg Tab",
                "dose":"1 tab",
                "route":"PO",
                "sig":"daily",
                "pillCount":"#90",
                "refills":"Refill 3"
            }],
            "betaBlocker":[{
                "name":"metoprolol tartrate",
                "strength":"25 mg Tab",
                "dose":"1 tab",
                "route":"PO",
                "sig":"daily",
                "pillCount":"#90",
                "refills":"Refill 3"
            }],
            "diuretic":[{
                "name":"furosemide",
                "strength":"40 mg Tab",
                "dose":"1 tab",
                "route":"PO",
                "sig":"daily",
                "pillCount":"#90",
                "refills":"Refill 3"
            }],
            "mineral":[{
                "name":"potassium chloride ER",
                "strength":"10 mEq Tab",
                "dose":"1 tab",
                "route":"PO",
                "sig":"daily",
                "pillCount":"#90",
                "refills":"Refill 3"
            }]
        }
    ],
    "labs":[{
        "name":"Arterial Blood Gas",
        "time":"Today",
        "location":"Main Hospital Lab"      
        },
        {
        "name":"BMP",
        "time":"Today",
        "location":"Primary Care Clinic"    
        },
        {
        "name":"BNP",
        "time":"3 Weeks",
        "location":"Primary Care Clinic"    
        },
        {
        "name":"BUN",
        "time":"1 Year",
        "location":"Primary Care Clinic"    
        },
        {
        "name":"Cardiac Enzymes",
        "time":"Today",
        "location":"Primary Care Clinic"    
        },
        {
        "name":"CBC",
        "time":"1 Year",
        "location":"Primary Care Clinic"    
        },
        {
        "name":"Creatinine",
        "time":"1 Year",
        "location":"Main Hospital Lab"  
        },
        {
        "name":"Electrolyte Panel",
        "time":"1 Year",
        "location":"Primary Care Clinic"    
        },
        {
        "name":"Glucose",
        "time":"1 Year",
        "location":"Main Hospital Lab"  
        },
        {
        "name":"PT/INR",
        "time":"3 Weeks",
        "location":"Primary Care Clinic"    
        },
        {
        "name":"PTT",
        "time":"3 Weeks",
        "location":"Coumadin Clinic"    
        },
        {
        "name":"TSH",
        "time":"1 Year",
        "location":"Primary Care Clinic"    
        }
    ],
    "imaging":[{
        "name":"Chest X-Ray",
        "time":"Today",
        "location":"Main Hospital Radiology"    
        },
        {
        "name":"Chest X-Ray",
        "time":"Today",
        "location":"Main Hospital Radiology"    
        },
        {
        "name":"Chest X-Ray",
        "time":"Today",
        "location":"Main Hospital Radiology"    
        }
    ]
}

let medications = response.medications
let pushedMedications = [];




medications.forEach(medications=>{

    return pushedMedications.push(medications)
})

console.log('Acá estan las medications en una Array; ' + JSON.stringify(pushedMedications))



let filteredMedications = pushedMedications.filter(function(el){
    
    return el["aceInhibitors"]
})



console.log(filteredMedications)
//let aceInhibitors = pushedMedications[0].aceInhibitors






/*let filteredAceInhibitors = aceInhibitors.filter(function(el){

    return (el.name ==="lisinopril")
})


filteredAceInhibitors = filteredAceInhibitors[0]*/


/*let nameInhibitor= filteredAceInhibitors.name;
let strengthInhibitor= filteredAceInhibitors.strength;
let doseInhibitor= filteredAceInhibitors.dose;
let routeInhibitor = filteredAceInhibitors.route;
let sigInhibitor = filteredAceInhibitors.sig;
let pillCountInhibitor = filteredAceInhibitors.pillCount;
let refillsInhibitor = filteredAceInhibitors.refills;*/


//console.log(`${nameInhibitor}, ${strengthInhibitor}`)


//console.log(`Esto eson los ace inhibitors:    ${aceInhibitors}`)
//console.log(`Esto eson los filteredAceInhibitors:   ${JSON.stringify(filteredAceInhibitors)}`)



//let example = ['Mello','Gary','Helen','Nol']
//let searchExample = example.indexOf('Nol')




//function searchNol(searchExample){
 // searchExample ===3 ? console.log('Es Nol') : console.log('Niidea rey')
//}



//console.log(searchNol(searchExample))
//let position = pushedMedications.length;
//console.log(JSON.stringify(pushedMedications[0]));
//console.log(JSON.stringify(response.medications))