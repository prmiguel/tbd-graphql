export const TypeDefs = `#graphql
  type Customers {
    customerNumber: Int
    customerName: String
    contactLastName: String,
    contactFirstName: String,
    phone: String,
    addressLine1: String,
    addressLine2: String,
    city: String,
    state: String,
    postalCode: String,
    country: String,
    salesRepEmployeeNumber: Int,
    creditLimit: Int
  }

  type Query {
    customers: [Customers]
  }

  type Query {
    customer(customerNumber: Int!): Customers
  }
`;
