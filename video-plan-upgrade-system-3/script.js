function upgradePlan(plan, time) {

    if(plan !== "Free"){

        alert("Redirecting to Payment Gateway");

        alert("Payment Successful");
    }

    let result = document.getElementById("result");

    result.innerHTML = `
        Plan Activated: ${plan}<br>
        Watch Time: ${time}<br><br>

        Invoice Sent to Registered Email
    `;
}