Orders.forEach(order =>{
    const tr = document.createElement('tr');
    const trContent = `
        <td>${order.doadorNome}</td>
        <td>${order.tipoDoacao}</td>
        <td>${order.quantidade}</td> 
        <td class="${order.status === 'Organizar' ? 'erro' : order.status === 'a caminho'?'status_espera':'finalizado'}">${order.status}</td>
        <td class="primary">Detalhes</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});