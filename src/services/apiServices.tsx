const API_URL = 'http://localhost:3001';

export interface LoginResponse {
  token: string;
  refreshToken: string;
}

export const login = async (email: string, password: string): Promise<LoginResponse> => {
  const response = await fetch('https://run.mocky.io/v3/35ebab01-1cd0-4bf3-a1cd-f0ed4f405509', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
      throw new Error('Invalid credentials');
  }

  return response.json();
};

export const getUser = async (): Promise<any> => {
  const response = await fetch('https://run.mocky.io/v3/a806af49-2323-4cbe-95b9-60f7e3760ff8');
  if (!response.ok) {
      throw new Error('Invalid credentials');
  }
  return response.json();
};

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
  const retrieve = await fetch(`${API_URL}/automezzi`);
  const automezzi = await retrieve.json();
  const automezzo = automezzi.find((a: any) => a.codice === codice);
  if (!automezzo) {
    throw new Error(`Automezzo with codice: ${codice} not found`);
  }
  const response = await fetch(`http://localhost:3001/automezzi/${automezzo.id}`, {
    method: 'DELETE',
  });
  await getAutomezzi();
  return response.json();
};

export const deleteFilialeByCodice = async (codice: string) => {
  const retrieve = await fetch(`${API_URL}/filiali`);
  const filiali = await retrieve.json();
  const filiale = filiali.find((f: any) => f.codice === codice);
  if (!filiale) {
    throw new Error(`Filiale with codice: ${codice} not found`);
  }
  const response = await fetch(`http://localhost:3001/filiali/${filiale.id}`, {
    method: 'DELETE',
  });
  await getFiliali();
  return response.json();
};

export const addAutomezzo = async (automezzo: any) => {
  const response = await fetch('http://localhost:3001/automezzi', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(automezzo),
  });
  if (!response.ok) {
    throw new Error('Failed to add automezzo');
  }
  return response.json();
};

export const addFiliale = async (filiale: any) => {
  const response = await fetch('http://localhost:3001/filiali', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(filiale),
  });
  if (!response.ok) {
    throw new Error('Failed to add filiale');
  }
  return response.json();
};

export const updateAutomezzo = async (automezzo: any) => {
  console.log("fanculo");
}