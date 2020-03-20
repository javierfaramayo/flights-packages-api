// {
//     "estado": "Pendiente",
//     "estado_id": "1",
//     "id": "1",
//     "fecha_hora": "2020-03-15 20:00",
//     "usuario_id": "1",
//     "usuario_nombre": "Juan Pérez",
//     "usuario_direccion": "Av. 9 de julio 88",
//     "forma_pago": "Efectivo",
//     "forma_pago_id": "1",
//     "precio_total": "780",
//     "platos": [
//         {
//             "id": "1",
//             "nombre": "Hamburguesa triple con bacon y cheddar",
//             "cantidad": "2",
//             "subtotal": "480",
//             "precio_unitario": "240",
//             "foto_producto": "https://fotourl.com/burguer.jpg"
//         },
//         {
//             "id": "3",
//             "nombre": "Pizza Napoletana",
//             "cantidad": "1",
//             "subtotal": "300",
//             "precio_unitario": "300",
//             "foto_producto": "https://fotourl.com/pizza.jpg"
//         }
//     ]
// }

// "SELECT p.id, p.fecha_hora, p.usuario_id, p.forma_pago_id, p.precio_total, p.estado_id, e.nombre as estado, u.nombre, u.direccion, fp.nombre as forma_pago
// FROM pedidos p
// JOIN estados e ON e.id = p.estado_id
// JOIN usuarios u ON u.id = p.usuario_id
// JOIN formas_pago fp ON fp.id = p.forma_pago_id
// WHERE p.id = 1"

// "SELECT id, nombre, cantidad, subtotal, precio_unitario, foto_producto
// FROM productos_pedidos
// WHERE id_pedido = 1"

// const pedido = await getPedidos(1)

// pedido.platos = await getPlatos(1)


