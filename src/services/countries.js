import { checkError, client } from './client.js';

export async function getCountries() {
  const resp = await client.from('countries').select('*');
  return checkError(resp);
}
