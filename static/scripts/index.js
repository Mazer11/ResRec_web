const orders = [
    {
        id: '0001',
        status: 'Готовится',
        time: '12:32',
        list: [
            {
                name: 'Хлебная корзина',
                count: '1'
            },
            {
                name: 'Шашлык',
                count: '2'
            },
            {
                name: 'Салат греческий',
                count: '2'
            }
        ],
        comment: 'Аллергия на орехи',
    },
    {
        id: '0002',
        status: 'Готовится',
        time: '12:47',
        list: [
            {
                name: 'Первое',
                count: '3'
            },
            {
                name: 'Второе',
                count: '3'
            },
            {
                name: 'Салат греческий',
                count: '3'
            }
        ],
        comment: '-',
    }
]

const $main = document.getElementById('main')

orders.forEach( order => {
    let html = ''

    html = `
    <div class="client_order">
        <table class="addBlackBorder">
            <tr>
                <td>${order.id}</td>
                <td>${order.status}</td>
                <td>${order.time}</td>
            </tr>
        </table>
        ${
            order.list.map(item => `
            <span>${item.name} x ${item.count}</span><br/>
            `).join('')
        }
        <p>
            Комментарий: ${order.comment}
        </p>
    </div>
    `
    $main.insertAdjacentHTML('beforeend', html)
})












