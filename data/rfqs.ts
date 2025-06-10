export type RFQ = {
  rfq: string;
  fsc: string;
  agency: string;
  qty: number;
  close: string;
  naics: string;
};

export const rfqs: RFQ[] = [
  { rfq: 'RFQ-001', fsc: '5930', agency: 'Navy', qty: 10, close: '2024-06-10', naics: '334419' },
  { rfq: 'RFQ-002', fsc: '5999', agency: 'Army', qty: 5, close: '2024-06-12', naics: '335999' },
  { rfq: 'RFQ-003', fsc: '6515', agency: 'Air Force', qty: 20, close: '2024-06-14', naics: '339113' },
  { rfq: 'RFQ-004', fsc: '7045', agency: 'DLA', qty: 2, close: '2024-06-16', naics: '541519' },
  { rfq: 'RFQ-005', fsc: '1560', agency: 'NASA', qty: 1, close: '2024-06-20', naics: '336413' },
  { rfq: 'RFQ-006', fsc: '5930', agency: 'Navy', qty: 4, close: '2024-06-22', naics: '334419' },
  { rfq: 'RFQ-007', fsc: '5999', agency: 'Army', qty: 8, close: '2024-06-25', naics: '335999' },
];
