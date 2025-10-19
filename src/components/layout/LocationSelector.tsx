    'use client';

    import React, { useEffect, useState } from 'react';
    import { fetchDepartamentos, fetchMunicipios } from '@/services/locationService';

    interface LocationSelectorProps {
    onSelectLocation: (department: string, city: string) => void;
    onClose?: () => void;
    // opcional: tamaño del panel
    width?: number | string;
    }

    export default function LocationSelector({ onSelectLocation, onClose, width = 300 }: LocationSelectorProps) {
    const [departments, setDepartments] = useState<{ id: number; nombre: string }[]>([]);
    const [cities, setCities] = useState<string[]>([]);
    const [selectedDeptId, setSelectedDeptId] = useState<number | null>(null);
    const [selectedDeptName, setSelectedDeptName] = useState<string>('');
    const [loadingDeps, setLoadingDeps] = useState(false);
    const [loadingCities, setLoadingCities] = useState(false);

    useEffect(() => {
        let mounted = true;
        setLoadingDeps(true);
        fetchDepartamentos()
        .then((deps) => {
            if (!mounted) return;
            setDepartments(deps);
        })
        .catch((e) => {
            console.error('Error fetching deps', e);
            setDepartments([]);
        })
        .finally(() => mounted && setLoadingDeps(false));
        return () => {
        mounted = false;
        };
    }, []);

    useEffect(() => {
        if (!selectedDeptId && selectedDeptId !== 0) {
        setCities([]);
        return;
        }
        let mounted = true;
        setLoadingCities(true);
        // intentamos por id; si no hay id numérico, pasamos nombre en fallback interno del service
        fetchMunicipios(selectedDeptId as number)
        .then((ms) => {
            if (!mounted) return;
            setCities(ms.map((m) => m.nombre));
        })
        .catch((e) => {
            console.error('Error fetching cities', e);
            setCities([]);
        })
        .finally(() => mounted && setLoadingCities(false));
        return () => {
        mounted = false;
        };
    }, [selectedDeptId]);

    const handleDeptClick = (dept: { id: number; nombre: string }) => {
        setSelectedDeptId(dept.id);
        setSelectedDeptName(dept.nombre);
        // cities will load via useEffect
    };

    const handleCityClick = (city: string) => {
        onSelectLocation(selectedDeptName, city);
        if (onClose) onClose();
    };

    return (
        <div
        className="bg-white border border-gray-200 rounded-lg shadow-md p-2"
        style={{ width }}
        role="dialog"
        aria-label="Selector de ubicación"
        >
        <div className="flex gap-3">
            {/* Departamentos: lista con scroll (muestra ~5 items) */}
            <div className="w-1/2">
            <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-medium">Departamentos</h4>
            </div>

            <div className="max-h-[200px] overflow-y-auto space-y-1 pr-1">
                {loadingDeps && <div className="text-xs text-gray-500">Cargando departamentos...</div>}
                {!loadingDeps && departments.length === 0 && <div className="text-xs text-gray-500">No hay departamentos</div>}
                {departments.map((d) => (
                <button
                    key={d.id}
                    onClick={() => handleDeptClick(d)}
                    className={`w-full text-left px-2 py-2 rounded text-sm hover:bg-gray-100 ${
                    selectedDeptId === d.id ? 'bg-gray-100 font-semibold' : ''
                    }`}
                >
                    {d.nombre}
                </button>
                ))}
            </div>
            </div>

            {/* Municipios: lista con scroll */}
            <div className="w-1/2 border-l pl-2">
            <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-medium">Municipios</h4>
            </div>

            <div className="max-h-[200px] overflow-y-auto space-y-1 pr-1">
                {selectedDeptId == null && <div className="text-xs text-gray-500">Selecciona un departamento</div>}
                {loadingCities && <div className="text-xs text-gray-500">Cargando municipios...</div>}
                {!loadingCities && selectedDeptId != null && cities.length === 0 && (
                <div className="text-xs text-gray-500">No hay municipios</div>
                )}
                {cities.map((c) => (
                <button
                    key={c}
                    onClick={() => handleCityClick(c)}
                    className="w-full text-left px-2 py-2 rounded text-sm hover:bg-gray-100"
                >
                    {c}
                </button>
                ))}
            </div>
            </div>
        </div>
        </div>
    );
    }
