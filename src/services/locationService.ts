// src/services/locationService.ts
export interface Departamento {
  id: number;
  nombre: string;
}

export interface Municipio {
  id: number;
  nombre: string;
}

const GITHUB_FALLBACK =
  'https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.json';

/**
 * Intenta obtener departamentos desde la API primaria.
 * Si falla, hace fallback al JSON de GitHub y adapta el formato.
 */
export async function fetchDepartamentos(): Promise<Departamento[]> {
  // Endpoint que propusiste (ejemplo)
  const apiUrl = 'https://api-colombia.com/api/v1/Department';

  try {
    const res = await fetch(apiUrl);
    if (!res.ok) throw new Error(`API Dept error ${res.status}`);
    const data = await res.json();
    // esperar: data = [{ id, nombre | name, ... }]
    return data.map((d: any) => ({
      id: d.id ?? d.ID ?? d.idDepartment ?? 0,
      nombre: (d.nombre || d.name || d.department || '').toString(),
    }));
  } catch (err) {
    // fallback GitHub: formato: [{ "departamento": "Amazonas", "ciudades": [...] }, ...]
    try {
      const res2 = await fetch(GITHUB_FALLBACK);
      if (!res2.ok) throw new Error(`Fallback error ${res2.status}`);
      const data2 = await res2.json();
      return data2.map((d: any, idx: number) => ({
        id: idx + 1,
        nombre: d.departamento || d.name || d.nombre || '',
      }));
    } catch (err2) {
      console.error('fetchDepartamentos fallback failed', err2);
      return [];
    }
  }
}

/**
 * Obtiene municipios para un departamento dado.
 * Intenta la API primaria (por id); si falla, busca en fallback por nombre.
 */
export async function fetchMunicipios(departmentIdOrName: number | string): Promise<Municipio[]> {
  const apiUrlById = (id: number) => `https://api-colombia.com/api/v1/Department/${id}/cities`;

  try {
    if (typeof departmentIdOrName === 'number') {
      const res = await fetch(apiUrlById(departmentIdOrName));
      if (!res.ok) throw new Error(`API cities error ${res.status}`);
      const data = await res.json();
      return data.map((m: any) => ({ nombre: (m.nombre || m.name || m.city || '').toString() }));
    }
    // if name was passed, try an endpoint that searches by name (if available)
    // fallback will handle otherwise
    throw new Error('No numeric id provided for primary API');
  } catch (err) {
    // fallback: buscar en github JSON
    try {
      const res2 = await fetch(GITHUB_FALLBACK);
      if (!res2.ok) throw new Error(`Fallback cities error ${res2.status}`);
      const data2 = await res2.json();
      const name = departmentIdOrName.toString();
      const found = data2.find((d: any) => (d.departamento || '').toLowerCase() === name.toLowerCase());
      const cities = found ? (found.ciudades || found.cities || []) : [];
      return cities.map((c: any) => ({ nombre: c }));
    } catch (err2) {
      console.error('fetchMunicipios fallback failed', err2);
      return [];
    }
  }
}
