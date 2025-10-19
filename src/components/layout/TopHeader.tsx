'use client';

import React, { useEffect, useRef, useState } from 'react';
import { MapPin, ShoppingCart, ChevronDown, X } from 'lucide-react';
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';
import LocationSelector from './LocationSelector';

interface TopHeaderProps {
  cartItems?: number;
  cartTotal?: number;
  location?: string;
  onCartClick?: () => void;
}

export default function TopHeader({
  cartItems = 13,
  cartTotal = 70000,
  location = 'Tunja - Boyacá',
  onCartClick,
}: TopHeaderProps) {
  const [showLocationSelector, setShowLocationSelector] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(location);
  const [isMobile, setIsMobile] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);

  const grayDivider = { borderRight: '1px solid rgb(78, 170, 123)' };

  // Detectar si es mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Cerrar al hacer click afuera (solo en desktop)
  useEffect(() => {
    if (isMobile) return;

    function onDocClick(e: MouseEvent) {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target as Node)) {
        setShowLocationSelector(false);
      }
    }
    if (showLocationSelector) document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, [showLocationSelector, isMobile]);

  return (
    <>
      <div className="bg-white px-[5%] font-inter">
        <div
          className="w-full relative border border-gray-200"
          style={{
            backgroundColor: '#FAFAFA',
            borderBottomLeftRadius: '16px',
            borderBottomRightRadius: '16px',
          }}
        >
          {/* Contenido principal */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-1 lg:gap-4 h-auto lg:h-16 px-3 md:px-4 py-2 lg:py-0">
            {/* Descuento - más corto en mobile */}
            <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm lg:text-base flex-shrink-0">
              <span className="text-lg">⭐</span>
              <span className="text-gray-700 font-medium hidden md:inline">
                Obtén 5% desc. primer pedido
              </span>
              <span className="text-gray-700 font-medium md:hidden">
                5% desc. primer pedido
              </span>
            </div>

            {/* Ubicación Mobile - fila separada */}
            <div className="lg:hidden flex items-center gap-1 flex-shrink-0">
              <MapPin size={14} className="text-gray-600 flex-shrink-0" />
              <span className="text-xs text-gray-700 truncate max-w-[90px]">
                {currentLocation}
              </span>
              <button
                onClick={() => setShowLocationSelector(true)}
                className="text-orange-500 text-xs font-medium hover:text-orange-600 transition flex-shrink-0 underline whitespace-nowrap ml-1"
              >
                Cambiar
              </button>
            </div>
          </div>

          {/* Lado derecho */}
          <div className="absolute right-0 top-0 h-full flex items-center gap-1 md:gap-2 lg:gap-4 pr-0">
            {/* Bloque ubicación - Solo en desktop */}
            {!isMobile && (
              <div
                ref={wrapperRef}
                className="hidden lg:flex flex-col items-start gap-1 flex-shrink-0 relative px-3"
              >
                <div className="flex items-center gap-1 md:gap-2 whitespace-nowrap">
                  <MapPin size={16} className="text-gray-600 flex-shrink-0" />
                  <span className="text-xs lg:text-sm text-gray-700 truncate">
                    {currentLocation}
                  </span>

                  <button
                    onClick={() => setShowLocationSelector((s) => !s)}
                    className="text-orange-500 underline text-xs lg:text-sm font-medium hover:text-orange-600 transition flex-shrink-0 whitespace-nowrap"
                  >
                    Cambiar Ubicación
                  </button>
                </div>

                {/* Panel desktop */}
                {showLocationSelector && (
                  <div className="absolute top-full left-0 mt-2 z-50">
                    <LocationSelector
                      width={320}
                      onSelectLocation={(dept, city) => {
                        setCurrentLocation(`${city} - ${dept}`);
                        setShowLocationSelector(false);
                      }}
                      onClose={() => setShowLocationSelector(false)}
                    />
                  </div>
                )}
              </div>
            )}

            {/* Botones verdes */}
            <div className="flex items-stretch gap-0 flex-shrink-0 h-full">
              {/* Carrito */}
              <button
                onClick={onCartClick}
                className="bg-green-700 hover:bg-green-800 text-white px-3 md:px-4 transition flex items-center justify-center w-12 md:w-14 lg:w-16 h-full"
                title="Carrito"
                style={{ ...grayDivider, borderBottomLeftRadius: '16px' }}
              >
                <ShoppingCart size={18} />
              </button>

              {/* Productos */}
              <button
                onClick={onCartClick}
                className="bg-green-700 hover:bg-green-800 text-white px-3 md:px-4 transition text-xs md:text-sm lg:text-base font-medium hidden sm:flex items-center justify-center h-full whitespace-nowrap"
                style={grayDivider}
              >
                <span>{cartItems} Prod.</span>
              </button>

              {/* Total */}
              <button
                onClick={onCartClick}
                className="bg-green-700 hover:bg-green-800 text-white px-3 md:px-4 transition text-xs md:text-sm lg:text-base font-bold hidden md:flex items-center justify-center h-full whitespace-nowrap"
                style={grayDivider}
              >
                <span>{formatPrice(cartTotal)}</span>
              </button>

              {/* Chevron - Dropdown menu */}
              <div className="relative h-full">
                <button
                  onClick={() => setShowDropdown((s) => !s)}
                  className="bg-green-700 hover:bg-green-800 text-white px-3 md:px-4 transition flex items-center justify-center w-12 md:w-14 lg:w-16 h-full"
                  style={{ borderBottomRightRadius: '16px' }}
                  title="Menú"
                >
                  <ChevronDown size={18} />
                </button>

                {/* Dropdown Panel */}
                {showDropdown && (
                  <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-48">
                    <div className="p-3 space-y-2">
                      <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded transition text-sm font-medium text-gray-700">
                        Mi Cuenta
                      </button>
                      <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded transition text-sm font-medium text-gray-700">
                        Mis Pedidos
                      </button>
                      <div className="border-t my-1"></div>
                      <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded transition text-sm font-medium text-gray-700">
                        Salir
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal mobile - Selector de ubicación */}
      {isMobile && showLocationSelector && (
        <div className="fixed inset-0 bg-black/50 z-[9998] flex items-end sm:items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl w-full sm:w-96 max-h-[80vh] overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-semibold text-gray-800">Cambiar ubicación</h2>
              <button
                onClick={() => setShowLocationSelector(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>

            <div className="overflow-y-auto max-h-[calc(80vh-120px)]">
              <LocationSelector
                width="100%"
                onSelectLocation={(dept, city) => {
                  setCurrentLocation(`${city} - ${dept}`);
                  setShowLocationSelector(false);
                }}
                onClose={() => setShowLocationSelector(false)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}