function analyzeDeal() {

    let purchasePrice = parseFloat(document.getElementById("purchasePrice").value);
    let repairs = parseFloat(document.getElementById("repairs").value);
    let arv = parseFloat(document.getElementById("arv").value);
    let closingCosts = parseFloat(document.getElementById("closingCosts").value);
    let holdingCosts = parseFloat(document.getElementById("holdingCosts").value);
    let assignmentFee = parseFloat(document.getElementById("assignmentFee").value);

    if (isNaN(purchasePrice) || isNaN(repairs) || isNaN(arv) ||
        isNaN(closingCosts) || isNaN(holdingCosts) || isNaN(assignmentFee)) {

        alert("Please enter a value in every field.");
        return;
    }

    let totalCosts = purchasePrice + repairs + closingCosts + holdingCosts + assignmentFee;

    let profit = arv - totalCosts;

    let mao = (arv * 0.70) - repairs - closingCosts - holdingCosts - assignmentFee;

    let roi = (profit / purchasePrice) * 100;

    let risk;

    if (profit < 0) {
        risk = "High";
    } else if (profit < 25000) {
        risk = "Moderate";
    } else {
        risk = "Lower";
    }

    document.getElementById("mao").textContent = "$" + mao.toFixed(2);

    document.getElementById("totalCosts").textContent = "$" + totalCosts.toFixed(2);

    document.getElementById("profit").textContent = "$" + profit.toFixed(2);

    document.getElementById("roi").textContent = roi.toFixed(2) + "%";

    document.getElementById("risk").textContent = risk;
}
