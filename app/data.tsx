"use client";

import cattleCard from "@/public/myfarmersbank-cattle.jpg";
import deerCard from "@/public/myfarmersbank-deer.png";
import generalCard from "@/public/myfarmersbank-general.png";
import grainCard from "@/public/myfarmersbank-grain.png";
import horsesCard from "@/public/myfarmersbank-horses.png";
import { Bank } from "./page";

export const banks: Bank[] = [
  {
    id: "1",
    googlePlusCode: "GJM1+X23",
    name: "Tamale State Bank (TSB)",
    description:
      " TSB's internet banking portal provides personal banking services that gives you complete control over all your banking demands online.",
    interestRate: "12.5",
    contact: "0200000000",
    processingFee: "1",
    imagePath: cattleCard,
    facilities: [
      "Crop Loan",
      "Kisan Credit Card",
      "Multipurpose Gold Loan",
      "Tractor Loan",
      "Combine Harvestor Loan",
      "Drip Irrigation Loan",
      "Dairy Loan",
      "Poultry Loan",
      "Fisheries Loan",
      "Produce Marketing Loan",
      "Setting up of Agri Clinic and Agri Business Centres",
      "Land Purchase Scheme",
      "SBI Krishak Uthan Yojana",
      "Scheme for Debt Swapping of Borrowers",
    ],
  },
  {
    id: "2",
    googlePlusCode: "GJM1+X23",
    name: "Union Bank",
    description:
      " SBI's internet banking portal provides personal banking services that gives you complete control over all your banking demands online.",
    interestRate: "12.5",
    contact: "0200000000",
    processingFee: "1",
    imagePath: deerCard,
    facilities: [
      "Capital Investment Subsidy Scheme for Commercial Production Units for organic/ biological Inputs",
      "Agriclinic and Agribusiness Centres Scheme",
      "National Livestock Mission",
    ],
  },
  {
    id: "3",
    googlePlusCode: "GJM1+X23",
    name: "Axis Bank",
    description:
      " SBI's internet banking portal provides personal banking services that gives you complete control over all your banking demands online.",
    interestRate: "1.5",
    contact: "0200000000",
    processingFee: "1",
    imagePath: generalCard,
    facilities: [
      "Crop Loan",
      "Kisan Credit Card",
      "Multipurpose Gold Loan",
      "Tractor Loan",
      "Combine Harvestor Loan",
      "Drip Irrigation Loan",
      "Dairy Loan",
      "Poultry Loan",
      "Fisheries Loan",
      "Produce Marketing Loan",
      "Setting up of Agri Clinic and Agri Business Centres",
      "Land Purchase Scheme",
      "SBI Krishak Uthan Yojana",
      "Scheme for Debt Swapping of Borrowers",
    ],
  },
  {
    id: "4",
    googlePlusCode: "GJM1+X23",
    name: "Peswa Bank",
    description:
      " SBI's internet banking portal provides personal banking services that gives you complete control over all your banking demands online.",
    interestRate: "12.5",
    contact: "0200000000",
    processingFee: "1",
    imagePath: grainCard,
    facilities: [
      "Cent Kisan Tatkal Scheme",
      "Cent Vermicompost Scheme",
      "Cent Solar Water Heater Scheme",
      "Kisan Credit Card",
    ],
  },
  {
    id: "5",
    googlePlusCode: "GJM1+X23",
    name: "Agricultural Development Bank PLC (ADB)",
    description:
      " Agricultural Development Bank PLC (ADB) is a universal bank offering a full range of banking products and services in Consumer, Corporate, Parastatals/Public Sector, SME, Agribusiness, Trade and E-Banking services. Its business focus is universal banking with a developmental focus on Agriculture and more",
    interestRate: "12.5",
    contact: "0200000000",
    processingFee: "1",
    imagePath: horsesCard,
    facilities: [
      "Crop Loan",
      "Kisan Credit Card",
      "Multipurpose Gold Loan",
      "Tractor Loan",
      "Combine Harvestor Loan",
      "Drip Irrigation Loan",
      "Dairy Loan",
      "Poultry Loan",
      "Fisheries Loan",
      "Produce Marketing Loan",
      "Setting up of Agri Clinic and Agri Business Centres",
      "Land Purchase Scheme",
      "SBI Krishak Uthan Yojana",
      "Scheme for Debt Swapping of Borrowers",
    ],
  },
];
