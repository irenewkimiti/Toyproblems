// netSalaryCalculator.js

function calculateNetSalary(basicSalary, benefits) {
    let grossSalary = basicSalary + benefits;

    // NSSF deduction (fixed example)
    let nssf = 200;

    // NHIF deduction (fixed example for simplicity)
    let nhif = 500;

    // Taxable income
    let taxableIncome = grossSalary - nssf;

    // PAYE tax calculation (simplified brackets)
    let paye = 0;
    if (taxableIncome <= 24000) {
        paye = taxableIncome * 0.1; // 10%
    } else if (taxableIncome <= 32333) {
        paye = taxableIncome * 0.25; // 25%
    } else {
        paye = taxableIncome * 0.30; // 30%
    }

    let netSalary = grossSalary - (paye + nhif + nssf);

    return {
        grossSalary: grossSalary,
        paye: paye,
        nhif: nhif,
        nssf: nssf,
        netSalary: netSalary
    };
}

// Example test
console.log(calculateNetSalary(40000, 5000));