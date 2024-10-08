"use strict";
class FinancialPlan {
    constructor(clientFirstName, clientLastName, clientAddress, phoneNumber, snn, bank, hasWill, hasLifeInsurance, taxAdvisor, financialPlanner) {
        // New properties
        this.beneficiaries = []; // List of beneficiaries
        this.hasWill = false; // Flag for will
        this.hasLifeInsurance = false; // Flag for life insurance
        this.clientFirstName = clientFirstName;
        this.clientLastName = clientLastName;
        this.clientAddress = clientAddress;
        this.phoneNumber = this.validatePhoneNumber(phoneNumber);
        this.snn = this.validateSnn(snn);
        this.bank = bank;
        this.hasWill = hasWill;
        this.hasLifeInsurance = hasLifeInsurance;
        this.taxAdvisor = taxAdvisor;
        this.financialPlanner = financialPlanner;
    }
    // Getter for full name
    get clientFullName() {
        return `${this.clientFirstName} ${this.clientLastName}`;
    }
    // Beneficiary methods
    addBeneficiary(beneficiary) {
        if (!this.beneficiaries.includes(beneficiary)) {
            this.beneficiaries.push(beneficiary);
        }
    }
    removeBeneficiary(beneficiary) {
        this.beneficiaries = this.beneficiaries.filter((b) => b !== beneficiary);
    }
    listBeneficiaries() {
        return this.beneficiaries;
    }
    // Assets method (a placeholder, can be expanded)
    assets() {
        // In a real app, you would track the client's assets
        return "List of assets goes here.";
    }
    // Life insurance method
    lifeInsuranceDetails() {
        if (this.hasLifeInsurance) {
            return "Client has life insurance.";
        }
        else {
            return "Client does not have life insurance.";
        }
    }
    // Budget plans method (a placeholder, can be expanded)
    budgetPlans() {
        // In a real app, you'd calculate or retrieve the client's budget plans
        return "Budget plans details go here.";
    }
    // Validation methods for phone number and SSN
    validatePhoneNumber(phoneNumber) {
        const phoneRegex = /^\d{10}$/; // Simple 10-digit phone number validation
        if (!phoneRegex.test(phoneNumber)) {
            throw new Error("Invalid phone number format. Use 10-digit numbers.");
        }
        return phoneNumber;
    }
    validateSnn(snn) {
        const snnRegex = /^\d{9}$/; // Simple 9-digit SSN validation
        if (!snnRegex.test(snn)) {
            throw new Error("Invalid SSN format. Use 9-digit numbers.");
        }
        return snn;
    }
}
// Create a new financial plan
const plan = new FinancialPlan("John", "Doe", "123 Canada Street", "6131234567", "123456789", // Valid SSN
"Bank of Myplan", true, // Has a will
false, // Does not have life insurance
"Mr. Taxman", "Ms. Planner");
// Add beneficiaries
plan.addBeneficiary("Alice Doe");
plan.addBeneficiary("Bob Doe");
// Remove a beneficiary
plan.removeBeneficiary("Alice Doe");
// List all beneficiaries
console.log(plan.listBeneficiaries()); // Output: ['Bob Doe']
// Get life insurance status
console.log(plan.lifeInsuranceDetails()); // Output: "Client does not have life insurance."
// View client full name
console.log(plan.clientFullName); // Output: "John Doe"
// Get assets (placeholder)
console.log(plan.assets()); // Output: "List of assets goes here."
// Get budget plans (placeholder)
console.log(plan.budgetPlans()); // Output: "Budget plans details go here."
