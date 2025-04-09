function updateAll() {
    let v = parseFloat(document.getElementById("volume").value) || 0;
    
    function getVal(id) { return parseFloat(document.getElementById(id).value) || 0; }

    // Chemical Calculations
    let e2 = ((getVal("c2") - getVal("b2")) * v * 10) / (1000 * getVal("d2"));
    document.getElementById("e2").textContent = e2 > 1000 ? `${(e2 / 1000).toFixed(2)} L` : `${e2.toFixed(0)} mL`;

    let e3 = ((getVal("c3") - getVal("b3")) * v * 1.5) / (1000 * getVal("d3"));
    document.getElementById("e3").textContent = e3 > 1000 ? `${(e3 / 1000).toFixed(2)} kg` : `${e3.toFixed(0)} g`;

    let e4 = ((getVal("c4") - getVal("b4")) * v * 1.8) / (1000 * getVal("d4"));
    document.getElementById("e4").textContent = e4 > 1000 ? `${(e4 / 1000).toFixed(2)} kg` : `${e4.toFixed(0)} g`;

    let e5 = ((getVal("c5") - getVal("b5")) * v * 2) / (1000 * getVal("d5"));
    document.getElementById("e5").textContent = e5 > 1000 ? `${(e5 / 1000).toFixed(2)} kg` : `${e5.toFixed(0)} g`;

    let e6 = (getVal("b6") > getVal("c6")) ? ((getVal("b6") - getVal("c6")) * v * 10) / (1000 * (getVal("d6") / 0.3145)) : "Error";
    document.getElementById("e6").textContent = e6 === "Error" ? "Error" : (e6 > 1000 ? `${(e6 / 1000).toFixed(2)} L` : `${e6.toFixed(0)} mL`);

    let e7 = (getVal("b7") > getVal("c7")) ? ((getVal("b7") - getVal("c7")) * v * 10) / (1000 * 0.93) : "Error";
    document.getElementById("e7").textContent = e7 === "Error" ? "Error" : (e7 > 1000 ? `${(e7 / 1000).toFixed(2)} kg` : `${e7.toFixed(0)} g`);

    let e8 = (getVal("b8") < getVal("c8")) ? ((getVal("c8") - getVal("b8")) * v * 10) / 1000 : "Error";
    document.getElementById("e8").textContent = e8 === "Error" ? "Error" : (e8 > 1000 ? `${(e8 / 1000).toFixed(2)} kg` : `${e8.toFixed(0)} g`);

    let e9 = ((getVal("c9") - getVal("b9")) * v * 17) / (1000 * 10);
    document.getElementById("e9").textContent = e9 > 1000 ? `${(e9 / 1000).toFixed(2)} kg` : `${e9.toFixed(0)} g`;

    let e10 = ((getVal("c10") - getVal("b10")) * v * 13) / (1000 * 10 * 0.77);
    document.getElementById("e10").textContent = e10 > 1000 ? `${(e10 / 1000).toFixed(2)} kg` : `${e10.toFixed(0)} g`;

    let e11 = ((getVal("c11") - getVal("b11")) * v * 1) / 1000;
    document.getElementById("e11").textContent = e11 > 1000 ? `${(e11 / 1000).toFixed(2)} kg` : `${e11.toFixed(0)} g`;

    let e12 = ((getVal("c12") - getVal("b12")) * v * 5) / (1000 * 0.43);
    document.getElementById("e12").textContent = e12 > 1000 ? `${(e12 / 1000).toFixed(2)} kg` : `${e12.toFixed(0)} g`;

    // Impact Calculations
    let e14 = e6 === "Error" ? "N/A" : (e6 > 1000 ? (((e6 / 1000) * 1000 * (v / 1000) * 10) / 120).toFixed(0) : ((e6 * (v / 1000) * 10) / 120).toFixed(0));
    document.getElementById("e14").textContent = `${e14} ppm drop`;

    let e15 = e7 === "Error" ? "N/A" : (e7 > 1000 ? (((e7 / 1000) * 1000 * (v / 1000) * 10) / 130).toFixed(0) : ((e7 * (v / 1000) * 10) / 130).toFixed(0));
    document.getElementById("e15").textContent = `${e15} ppm drop`;

    let e16 = e8 === "Error" ? "N/A" : (e8 > 1000 ? (((e8 / 1000) * 1000 * (v / 1000) * 6) / 10).toFixed(0) : ((e8 * (v / 1000) * 6) / 10).toFixed(0));
    document.getElementById("e16").textContent = `${e16} ppm rise`;

    let e17 = e9 > 1000 ? (((e9 / 1000) * 1000 * (v / 1000) * 10) / 17).toFixed(0) : ((e9 * (v / 1000) * 10) / 17).toFixed(0);
    document.getElementById("e17").textContent = `${e17} ppm rise`;

    let e18 = e3 > 1000 ? (((e3 / 1000) * 1000 * (v / 1000) * 0.02) / (1.5 / 0.7)).toFixed(2) : ((e3 * (v / 1000) * 0.02) / (1.5 / 0.7)).toFixed(2);
    document.getElementById("e18").textContent = `${e18} pH units`;

    let e19 = e2 > 1000 ? (((e2 / 1000) * 1000 * (v / 1000) * 0.015) / (10 / 0.1)).toFixed(2) : ((e2 * (v / 1000) * 0.015) / (10 / 0.1)).toFixed(2);
    document.getElementById("e19").textContent = `${e19} pH units`;

    let e20 = e9 > 1000 ? (((e9 / 1000) * 1000 * (v / 1000) * 0.04) / 17).toFixed(2) : ((e9 * (v / 1000) * 0.04) / 17).toFixed(2);
    document.getElementById("e20").textContent = `${e20} pH units`;
}

// Initial call to set default values
updateAll();
