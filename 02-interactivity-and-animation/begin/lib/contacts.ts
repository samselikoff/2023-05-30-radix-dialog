"use client";

import { createGlobalState } from "react-hooks-global-state";

let seeds = [
  {
    id: "1",
    name: "John Doe",
    role: "Software Engineer",
    email: "john.doe@example.com",
  },
  {
    id: "2",
    name: "Jane Smith",
    role: "Product Manager",
    email: "jane.smith@example.com",
  },
  {
    id: "3",
    name: "David Johnson",
    role: "Data Analyst",
    email: "david.johnson@example.com",
  },
  {
    id: "4",
    name: "Emily Williams",
    role: "Graphic Designer",
    email: "emily.williams@example.com",
  },
  {
    id: "5",
    name: "Michael Brown",
    role: "Marketing Specialist",
    email: "michael.brown@example.com",
  },
  {
    id: "6",
    name: "Olivia Davis",
    role: "HR Manager",
    email: "olivia.davis@example.com",
  },
  {
    id: "7",
    name: "Daniel Martinez",
    role: "Sales Representative",
    email: "daniel.martinez@example.com",
  },
  {
    id: "8",
    name: "Sophia Thompson",
    role: "Financial Analyst",
    email: "sophia.thompson@example.com",
  },
  {
    id: "9",
    name: "James Garcia",
    role: "Operations Manager",
    email: "james.garcia@example.com",
  },
  {
    id: "10",
    name: "Isabella Robinson",
    role: "Content Writer",
    email: "isabella.robinson@example.com",
  },
  {
    id: "11",
    name: "Matthew Hernandez",
    role: "Software Developer",
    email: "matthew.hernandez@example.com",
  },
  {
    id: "12",
    name: "Ava Martinez",
    role: "UX Designer",
    email: "ava.martinez@example.com",
  },
  {
    id: "13",
    name: "Ethan Brown",
    role: "IT Administrator",
    email: "ethan.brown@example.com",
  },
  {
    id: "14",
    name: "Emma Davis",
    role: "Project Manager",
    email: "emma.davis@example.com",
  },
  {
    id: "15",
    name: "Alexander Johnson",
    role: "Business Analyst",
    email: "alexander.johnson@example.com",
  },
  {
    id: "16",
    name: "Mia Wilson",
    role: "Customer Support",
    email: "mia.wilson@example.com",
  },
  {
    id: "17",
    name: "Noah Thomas",
    role: "Data Scientist",
    email: "noah.thomas@example.com",
  },
  {
    id: "18",
    name: "Charlotte Taylor",
    role: "Marketing Manager",
    email: "charlotte.taylor@example.com",
  },
  {
    id: "19",
    name: "Liam Anderson",
    role: "Sales Manager",
    email: "liam.anderson@example.com",
  },
  {
    id: "20",
    name: "Chloe Clark",
    role: "Social Media Manager",
    email: "chloe.clark@example.com",
  },
];

const initialState = { contacts: seeds };
const { useGlobalState } = createGlobalState(initialState);

let sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export function useContacts() {
  let [contacts, setContacts] = useGlobalState("contacts");

  async function updateContact(
    id: string,
    attrs: { [k: string]: FormDataEntryValue }
  ) {
    let newContacts = contacts.map((c) => {
      if (c.id === id) {
        return { id, ...attrs };
      } else {
        return c;
      }
    });

    await sleep(1000);

    setContacts(newContacts);
  }

  return {
    contacts,
    updateContact,
  };
}

export type Contact = (typeof seeds)[number];
