class FinancialPlan {
  // Basic client info
  public clientFirstName: string;
  public clientLastName: string;
  public clientAddress: string;
  public phoneNumber: string;
  public taxAdvisor?: string;
  public financialPlanner?: string;

  // Financial details
  private snn: string;
  private bank: string;

  // New properties
  public beneficiaries: string[] = []; // List of beneficiaries
  public hasWill: boolean = false; // Flag for will
  public hasLifeInsurance: boolean = false; // Flag for life insurance

  constructor(
    clientFirstName: string,
    clientLastName: string,
    clientAddress: string,
    phoneNumber: string,
    snn: string,
    bank: string,
    hasWill: boolean,
    hasLifeInsurance: boolean,
    taxAdvisor?: string,
    financialPlanner?: string
  ) {
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
  public get clientFullName(): string {
    return `${this.clientFirstName} ${this.clientLastName}`;
  }

  // Beneficiary methods
  public addBeneficiary(beneficiary: string): void {
    if (!this.beneficiaries.includes(beneficiary)) {
      this.beneficiaries.push(beneficiary);
    }
  }

  public removeBeneficiary(beneficiary: string): void {
    this.beneficiaries = this.beneficiaries.filter((b) => b !== beneficiary);
  }

  public listBeneficiaries(): string[] {
    return this.beneficiaries;
  }

  // Assets method (a placeholder, can be expanded)
  public assets(): string {
    // In a real app, you would track the client's assets
    return "List of assets goes here.";
  }

  // Life insurance method
  public lifeInsuranceDetails(): string {
    if (this.hasLifeInsurance) {
      return "Client has life insurance.";
    } else {
      return "Client does not have life insurance.";
    }
  }

  // Budget plans method (a placeholder, can be expanded)
  public budgetPlans(): string {
    // In a real app, you'd calculate or retrieve the client's budget plans
    return "Budget plans details go here.";
  }

  // Validation methods for phone number and SSN
  private validatePhoneNumber(phoneNumber: string): string {
    const phoneRegex = /^\d{10}$/; // Simple 10-digit phone number validation
    if (!phoneRegex.test(phoneNumber)) {
      throw new Error("Invalid phone number format. Use 10-digit numbers.");
    }
    return phoneNumber;
  }

  private validateSnn(snn: string): string {
    const snnRegex = /^\d{9}$/; // Simple 9-digit SSN validation
    if (!snnRegex.test(snn)) {
      throw new Error("Invalid SSN format. Use 9-digit numbers.");
    }
    return snn;
  }
}

// Create a new financial plan
const plan = new FinancialPlan(
  "John",
  "Doe",
  "123 Canada Street",
  "6131234567",
  "123456789", // Valid SSN
  "Bank of Myplan",
  true, // Has a will
  false, // Does not have life insurance
  "Mr. Taxman",
  "Ms. Planner"
);

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
