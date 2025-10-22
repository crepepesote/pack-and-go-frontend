import { useEffect, useRef, useState } from 'react';

export default function CounterStats() {
  const [counts, setCounts] = useState({
    conductores: 0,
    pedidos: 0,
    tiendas: 0,
    elementos: 0
  });
  const [hasStarted, setHasStarted] = useState(false);
  const containerRef = useRef(null);

  const finalNumbers = {
    conductores: 546,
    pedidos: 789900,
    tiendas: 690,
    elementos: 17457
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const duration = 2000; // 2 segundos
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function para que se vea más natural
      const easeOutQuad = 1 - Math.pow(1 - progress, 2);

      setCounts({
        conductores: Math.floor(finalNumbers.conductores * easeOutQuad),
        pedidos: Math.floor(finalNumbers.pedidos * easeOutQuad),
        tiendas: Math.floor(finalNumbers.tiendas * easeOutQuad),
        elementos: Math.floor(finalNumbers.elementos * easeOutQuad)
      });

      if (progress === 1) {
        clearInterval(interval);
        setCounts(finalNumbers);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [hasStarted]);

  const formatNumber = (num) => {
    return num.toLocaleString('es-CO');
  };

  const stats = [
    { value: counts.conductores, label: 'Conductores Registrados', final: finalNumbers.conductores },
    { value: counts.pedidos, label: 'Pedidos Entregados', final: finalNumbers.pedidos },
    { value: counts.tiendas, label: 'Tiendas Aliadas', final: finalNumbers.tiendas },
    { value: counts.elementos, label: 'Elementos de Comida', final: finalNumbers.elementos }
  ];

  return (
    <div className="bg-gray-100 py-12 px-4">
      <div className="max-w-[90%] mx-auto">
        <div
          ref={containerRef}
          className="bg-orange-500 rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center border-r border-orange-400 last:border-r-0"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {formatNumber(stat.value)}
                  <span className="text-3xl md:text-4xl">+</span>
                </div>
                <p className="text-white font-semibold text-sm md:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}