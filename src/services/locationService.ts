// src/services/locationService.ts

export interface Departamento {
  id: number;
  nombre: string;
}

export interface Municipio {
  id: number;
  nombre: string;
}

interface ApiDepartamento {
  id?: number;
  ID?: number;
  idDepartment?: number;
  nombre?: string;
  name?: string;
  department?: string;
}

interface GithubDepartamento {
  departamento?: string;
  name?: string;
  nombre?: string;
  ciudades?: string[];
  cities?: string[];
}

interface ApiMunicipio {
  id?: number;
  nombre?: string;
  name?: string;
  city?: string;
}

const GITHUB_FALLBACK =
  'https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.json';

/**
 * Intenta obtener departamentos desde la API primaria.
 * Si falla, hace fallback al JSON de GitHub y adapta el formato.
 */
export async function fetchDepartamentos(): Promise<Departamento[]> {
  const apiUrl = 'https://api-colombia.com/api/v1/Department';

  try {
    const res = await fetch(apiUrl);
    if (!res.ok) throw new Error(`API Dept error ${res.status}`);
    const data: ApiDepartamento[] = await res.json();

    return data.map((d) => ({
      id: d.id ?? d.ID ?? d.idDepartment ?? 0,
      nombre: (d.nombre || d.name || d.department || '').toString(),
    }));
  } catch {
    // fallback GitHub
    try {
      const res2 = await fetch(GITHUB_FALLBACK);
      if (!res2.ok) throw new Error(`Fallback error ${res2.status}`);
      const data2: GithubDepartamento[] = await res2.json();

      return data2.map((d, idx) => ({
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
export async function fetchMunicipios(
  departmentIdOrName: number | string
): Promise<Municipio[]> {
  const apiUrlById = (id: number) =>
    `https://api-colombia.com/api/v1/Department/${id}/cities`;

  try {
    if (typeof departmentIdOrName === 'number') {
      const res = await fetch(apiUrlById(departmentIdOrName));
      if (!res.ok) throw new Error(`API cities error ${res.status}`);
      const data: ApiMunicipio[] = await res.json();

      return data.map((m) => ({
        id: m.id ?? 0,
        nombre: (m.nombre || m.name || m.city || '').toString(),
      }));
    }

    // Si no se pasó id numérico, forzamos el fallback
    throw new Error('No numeric id provided for primary API');
  } catch {
    try {
      const res2 = await fetch(GITHUB_FALLBACK);
      if (!res2.ok) throw new Error(`Fallback cities error ${res2.status}`);
      const data2: GithubDepartamento[] = await res2.json();

      const name = departmentIdOrName.toString().toLowerCase();
      const found = data2.find(
        (d) => (d.departamento || '').toLowerCase() === name
      );

      const cities = found?.ciudades ?? found?.cities ?? [];

      return cities.map((c, idx) => ({
        id: idx + 1,
        nombre: c,
      }));
    } catch (err2) {
      console.error('fetchMunicipios fallback failed', err2);
      return [];
    }
  }
}
