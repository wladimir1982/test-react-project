import './App.css'
import {useDispatch, useSelector} from "react-redux"
import {addCustomerAction, removeCustomerAction} from "./store/customerReducer"
import {addCashAction, getCashAction} from "./store/cashReduser"

function App() {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)
    const customers = useSelector(state => state.customers.customers)

    const addCash = () => {
        dispatch(addCashAction(5))
    }

    const getCash = () => {
        dispatch(getCashAction(2))
    }

    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now(),
        }
        dispatch(addCustomerAction(customer))
    }

    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer.id))
    }

    return (
        <div className="App">
            <div>
                <div style={{fontSize: 30}}>{cash}</div>
                <button onClick={() => addCash()}>Пополнить счет</button>
                <button onClick={() => getCash()}>Снять со счета</button>
            </div>
            <div>
                <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
                <button onClick={() => removeCustomer()}>Удалить клиента
                </button>
            </div>
            {customers.length > 0 ?
                <div>
                    {customers.map(customer =>
                        <div onClick={() => removeCustomer(customer)}>{customer.name}</div>)}
                </div>
                : <div style={{fontSize: "2rem", marginTop: 20}}>
                    Клиенты отсутствуют!
                </div>
            }
        </div>
    );
}

export default App;
