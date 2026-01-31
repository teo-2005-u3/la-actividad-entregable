# Definición de Niveles de Servicio (SLO)

1. **SLI (Indicador):** Latencia de respuesta en `GET /documentos`.
   - **SLO:** 95% de las peticiones en < 200ms.
2. **SLI (Disponibilidad):** Éxito del endpoint `/health`.
   - **SLO:** 99.9% de uptime mensual.
3. **Error Budget:** Si la disponibilidad baja del 99.9%, el equipo detendrá el desarrollo de nuevas features (Escenario A) para mejorar la infraestructura.
