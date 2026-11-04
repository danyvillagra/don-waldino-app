# 🌶️ Don Waldino - Sistema de Gestión de Stock y Ventas

Aplicación web responsiva (Mobile-First / PWA-ready) diseñada para **Jazmín Rodríguez**, Encargada de Ventas de **Don Waldino**.

---

## 📱 Características Principales

1. **Catálogo de Productos y Packs con Descuento Automático de Stock:**
   - **001 Salsa Picante tipo Sriracha** (Gs 20.000)
   - **002 Mermelada de Frutilla y Ají Picante** (Gs 40.000)
   - **003 Pasta de Ají Picante** (Gs 40.000)
   - **007 Pasta de Ají y Morrones** (Gs 40.000)
   - **004 Aceite Picante Estilo Oriental** (Gs 40.000)
   - **005 Pickles Picantes chico 360 ml** (Gs 40.000)
   - **006 Pickles Picantes grande 800 ml** (Gs 60.000)

   **Packs Promocionales:**
   - **Promo 2x Sriracha (Gs 30.000 / Ahorro Gs 10.000):** 2 unidades de Salsa Sriracha (001). (Regular: Gs 40.000).
   - **Pack Completo (Gs 120.000 / Ahorro Gs 20.000):** Sriracha + Mermelada + Pasta Ají y Morrones + Pickles chico.
   - **Pack Clásico (Gs 90.000 / Ahorro Gs 10.000):** Sriracha + Mermelada + Pasta Ají y Morrones.
   - **Pack Don Waldino (Gs 90.000 / Ahorro Gs 10.000):** Sriracha + Pickles chico + Pasta Ají y Morrones.
   > **Nota clave:** Al vender un pack o combo, el sistema descuenta automáticamente los productos individuales del stock (por ejemplo, 2 unidades de Sriracha en la promo) y etiqueta la transacción con una insignia destacada de Pack.

2. **3 Puntos de Venta Diferenciados con Comisiones:**
   - 🎪 **Ferias (Plaza Italia - Sábados):**
     - Comisión para Jazmín: **15%** sobre ventas brutas.
     - Costo de mesa: **Gs 35.000 por sábado** (se transfiere desde la cuenta de Don Waldino, no sale de la caja de Jazmín; se utiliza para el análisis de rentabilidad final).
     - Botón de cierre y reporte diario por WhatsApp.
   - 🏭 **Centro de Producción (CP):**
     - Canales: Ventas Directas, Redes Sociales y Página WEB.
     - Comisión para Jazmín: **10%**.
     - Botón de reporte semanal (cada sábado) por WhatsApp.
   - 🏺 **Puesto Areguá (consignación):**
     - Entregas al puesto (13/09, 08/10, 01/11…): salen del stock central y pasan al stock del puesto.
     - Rendiciones por planilla (productos vendidos) con comisión fija de **Gs 5.000 por unidad**; también se puede cargar solo el neto si falta la planilla y completarla después.
     - Pagos: transferencias a la cuenta de Don Waldino o ventas aplicadas a cuenta del incentivo.
     - Cuenta separada del **incentivo a ventas** (compromiso inicial Gs 400.000) con su saldo pendiente.
     - Stock por producto en el puesto, alertas de diferencias y reporte por WhatsApp.
     - Las ventas de Areguá no se cargan desde "Vender": se cargan como rendición.

3. **Stock Central Automático y Auditoría Manual:**
   - Cálculo automático del stock restante.
   - Modal para correcciones/ajustes manuales de inventario con justificación obligatoria y bitácora histórica.
   - Valoración de stock en tiempo real: al **100%** de precio de venta y al **-20%** para estimación de valor y costo.

4. **Medios de Pago:**
   - Registro obligatorio en cada venta: **Efectivo**, **POS / Tarjeta** o **Transferencia Bancaria**.

5. **Reportes por WhatsApp con 1 Clic:**
   - Botón en cada punto de venta y en el Panel General para enviar el reporte formateado a WhatsApp.

6. **Cierre de Feria con Resumen:**
   - Cada fecha de feria aparece como tarjeta: **ABIERTA** (con ventas sin cerrar), **CERRADA** o **SUSPENDIDA**.
   - "Cerrar feria" precarga efectivo y transferencias/POS según las ventas registradas, verifica el cuadre y genera el resumen (productos vendidos, comprobantes, comisión, efectivo a entregar y neto Don Waldino), igual que el de la feria del 03/10.
   - Cada cierre tiene "Ver resumen" y envío por WhatsApp.

7. **Fotos de productos** en el catálogo, stock, packs y resúmenes (carpeta `img/`).

8. **Salidas de mercadería sin venta** (Muestra, Gentileza, Devolución, Degustación):
   - Disponible en Vender, Ferias, CP, Areguá y Stock; cada boca muestra su lista y totales por tipo.
   - Varios productos por salida, a quién se entregó, quién autorizó y motivo. Descuenta stock y queda en la bitácora.
   - Se puede anular una salida cargada por error (devuelve el stock y deja constancia del motivo).
   - Aparecen en los reportes de WhatsApp de cada boca.

9. **Comisiones y efectivo:** la comisión de Jazmín siempre se paga por transferencia (nunca se descuenta del efectivo). El efectivo se entrega completo y se registra su recorrido (entregado a → depositado en cuenta Don Waldino).

---

## 🚀 Cómo publicarlo en GitHub Pages (Gratis para usar en el celular)

1. Crear un repositorio en GitHub llamado por ejemplo `don-waldino-app`.
2. Subir el archivo `index.html` **y la carpeta `img/`** (fotos de productos).
3. En GitHub, ir a **Settings** -> **Pages**.
4. En **Branch**, seleccionar `main` y la carpeta `/(root)`, luego hacer clic en **Save**.
5. En 1 minuto tendrás una URL pública (ejemplo: `https://tu-usuario.github.io/don-waldino-app/`).
6. Jazmín puede abrir ese enlace desde Chrome/Safari en su celular y seleccionar **"Agregar a pantalla de inicio"** para tenerla como una App nativa.

---

## 🔧 Cómo hacer cambios en la app

- **Pedírselo a Claude:** decir qué cambiar. Claude edita `index.html`, lo prueba, lo guarda en la carpeta de Antigravity y lo sube a GitHub. En 1–2 minutos queda publicado en la misma dirección.
- **Hacerlo uno mismo:** editar `index.html` (con Antigravity u otro editor) y subirlo en GitHub → repositorio `don-waldino-app` → *Add file* → *Upload files* → *Commit changes*.
- Los datos (ventas, stock, cierres) viven en el navegador de cada celular, no en GitHub: actualizar la app **no borra datos** mientras la dirección sea la misma. Igual conviene exportar un respaldo antes de cambios grandes.
