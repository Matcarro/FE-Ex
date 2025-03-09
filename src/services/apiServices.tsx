const API_URL = 'http://localhost:3001';

export const getAutomezzi = async () => {
  const response = await fetch(`${API_URL}/automezzi`);
  if (!response.ok) {
    throw new Error('Failed to fetch automezzi');
  }
  return response.json();
};

export const getFiliali = async () => {
  const response = await fetch(`${API_URL}/filiali`);
  if (!response.ok) {
    throw new Error('Failed to fetch filiali');
  }
  return response.json();
};

export const getAutomezzoByCodice = async (codice: string | undefined) => {
  const response = await fetch(`${API_URL}/automezzi`);
  if (!response.ok) {
    throw new Error('Failed to fetch automezzi');
  }
  const automezzi = await response.json();
  const automezzo = automezzi.find((a: any) => a.codice === codice);
  if (!automezzo) {
    throw new Error(`Automezzo with codice: ${codice} not found`);
  }
  return automezzo;
};

export const getFilialeByCodice = async (codice: string | undefined) => {
  const response = await fetch(`${API_URL}/filiali`);
  if (!response.ok) {
    throw new Error('Failed to fetch filiali');
  }
  const filiali = await response.json();
  const filiale = filiali.find((f: any) => f.codice === codice);
  if (!filiale) {
    throw new Error(`Filiale with codice: ${codice} not found`);
  }
  return filiale;
};

export const deleteAutomezzoByCodice = async (codice: string) => {
  const response = await fetch(`${API_URL}/automezzi`);
  if (!response.ok) {
    throw new Error('Failed to fetch automezzi');
  }
  const automezzi = await response.json();
  const index = automezzi.findIndex((a: any) => a.codice === codice);
  if (index === -1) {
    throw new Error(`Automezzo with codice: ${codice} not found`);
  }
  automezzi.splice(index, 1);
  console.log(automezzi);
};

export const deleteFilialeByCodice = async (codice: string) => {
  const response = await fetch(`${API_URL}/filiali`);
  if (!response.ok) {
    throw new Error('Failed to fetch filiali');
  }
  const filiali = await response.json();
  const index = filiali.findIndex((a: any) => a.codice === codice);
  if (index === -1) {
    throw new Error(`Automezzo with codice: ${codice} not found`);
  }
  filiali.splice(index, 1);
  console.log(filiali);
};

export const addAutomezzo = async (codice: string) => {
  const response = await fetch(`${API_URL}/automezzi`);
  if (!response.ok) {
    throw new Error('Failed to fetch automezzi');
  }
  const automezzi = await response.json();
  const index = automezzi.findIndex((a: any) => a.codice === codice);
  if (index === -1) {
    throw new Error(`Automezzo with codice: ${codice} not found`);
  }
  automezzi.splice(index, 1);
  console.log(automezzi);
};

export const addFiliale = async (codice: string) => {
  const response = await fetch(`${API_URL}/filiali`);
  if (!response.ok) {
    throw new Error('Failed to fetch filiali');
  }
  const filiali = await response.json();
  const index = filiali.findIndex((f: any) => f.codice === codice);
  if (index === -1) {
    throw new Error(`Filiale with codice: ${codice} not found`);
  }
  filiali.splice(index, 1);
  console.log(filiali);
};