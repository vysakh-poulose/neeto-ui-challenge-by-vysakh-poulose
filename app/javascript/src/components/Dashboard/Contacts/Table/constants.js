const CONTACTS_RANGE = Array.from({ length: 11 }, (_, index) => index + 1);

export const CONTACTS = CONTACTS_RANGE.map(contact => ({
  id: contact,
  name: contact % 2 === 0 ? "Ronald Richards" : "Jacob Jones",
  email: "albert@borer.com",
  createdAt: "Feb, 5, 2021",
}));
