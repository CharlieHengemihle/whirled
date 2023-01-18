import { checkError, client } from './client.js';

export async function getCountries() {
  const resp = await client.from('countries').select('*');
  return checkError(resp);
}

// export async function getCountryByName(name) {
//   const resp = await client.from('countries').select('*').eq('name', name);
//   return checkError(resp);
// }
