function calculate() {
    const cost = parseFloat(document.getElementById("cost").value) || 0;
    const ads = parseFloat(document.getElementById("ads").value) || 0;
    const shipping = parseFloat(document.getElementById("shipping").value) || 0;
    const sell = parseFloat(document.getElementById("sell").value);

    if (sell <= 0) {
        alert("Please enter a valid selling price");
        return;
    }

    const totalCost = cost + ads + shipping;
    const profit = sell - totalCost;
    const margin = (profit / sell) * 100;
    const markup = (profit / totalCost) * 100;

    document.getElementById("totalCost").innerText = `$${totalCost.toFixed(2)}`;

    const profitEl = document.getElementById("profit");
    profitEl.innerText = profit >= 0
        ? `+$${profit.toFixed(2)}`
        : `-$${Math.abs(profit).toFixed(2)}`;

    profitEl.className = profit >= 0 ? "profit" : "loss";

    document.getElementById("margin").innerText = `${margin.toFixed(2)}%`;
    document.getElementById("markup").innerText = `${markup.toFixed(2)}%`;

    document.getElementById("result").style.display = "block";
}
