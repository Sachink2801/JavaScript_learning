var TcsEligibilityCriteria = function(grad_score,hsc_score,ssc_score,candidate_name){

    var result= grad_score>=70 ||hsc_score>=80 || ssc_score >=90
                ?`congrats ${candidate_name} you are eligible for TCS interview.` 
                : `sorry ${candidate_name} unfortunately you are not eligible for interview.`;
            console.log(result);


}
TcsEligibilityCriteria(80,86,90,"Sachin Kadam");
TcsEligibilityCriteria(70,65,55,"Sonali Sharma");
TcsEligibilityCriteria(60,79,88,"Atharv Mahatre")