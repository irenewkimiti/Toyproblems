// netSalaryCalculator.js
// Kenya Net Salary Calculator (based on AREN & KRA)

function calculateNetSalary(basic, benefits) {
  const gross = basic + benefits;

  // --- NSSF ---
  const tier1Limit = 8000;
  const tier2Limit = 72000;
  const nssfRate = 0.06;
  let nssfEmployee = 0;

  if (gross <= tier1Limit) {
    nssfEmployee = gross * nssfRate;
  } else if (gross <= tier2Limit) {
    nssfEmployee = (tier1Limit * nssfRate) + (gross - tier1Limit) * nssfRate;
  } else {
    nssfEmployee = (tier1Limit * nssfRate) + (tier2Limit - tier1Limit) * nssfRate;
  }

  // --- SHIF (new NHIF) ---
  const shif = Math.max(gross * 0.0275, 300);

  // --- PAYE brackets ---
  const personalRelief = 2400;
  const taxableIncome = gross - nssfEmployee; // SHIF is not deducted before PAYE
  let paye = 0;

  if (taxableIncome <= 24000) {
    paye = taxableIncome * 0.10;
  } else if (taxableIncome <= 32333) {
    paye = (24000 * 0.10) + (taxableIncome - 24000) * 0.25;
  } else if (taxableIncome <= 500000) {
    paye = (24000 * 0.10)
         + (8333 * 0.25)
         + (taxableIncome - 32333) * 0.30;
  } else if (taxableIncome <= 800000) {
    paye = (24000 * 0.10)
         + (8333 * 0.25)
         + (467667 * 0.30)
         + (taxableIncome - 500000) * 0.325;
  } else {
    paye = (24000 * 0.10)
         + (8333 * 0.25)
         + (467667 * 0.30)
         + (300000 * 0.325)
         + (taxableIncome - 800000) * 0.35;
  }

  // apply personal relief
  paye = Math.max(0, paye - personalRelief);

  // --- Net Salary ---
  const net = gross - (nssfEmployee + shif + paye);

  return {
    grossSalary: Math.round(gross),
    nssf: Math.round(nssfEmployee),
    shif: Math.round(shif),
    paye: Math.round(paye),
    netSalary: Math.round(net)
  };
}

// Example test
console.log(calculateNetSalary(40000, 5000));