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
    },
    {
        id: '0003',
        status: 'Готов к выдаче',
        time: '12:17',
        list: [
            {
                name: 'Чизкейк',
                count: '1'
            },
            {
                name: 'Американо',
                count: '1'
            }
        ],
        comment: 'Кофе без сахара',
    }
]

const $main = document.getElementById('main')

orders.forEach( order => {
    let html = ''
    let class_type = ''

    if (order.status == 'Готов к выдаче') 
        class_type = `<div class="client_order_ready">`
    else 
        class_type = `<div class="client_order">`

    html = `
    ${class_type}
        <table class="addBlackBorder">
            <tr>
                <td>№ ${order.id}</td>
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



function currentTime(){
    var date_options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    }
    var current_date = new Date()
document.getElementById('header_date').innerHTML = current_date.toLocaleString("ru", date_options)
setTimeout("currentTime()", 1000)
}
