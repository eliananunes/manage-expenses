import React, { useState } from "react";
import { getExpenses } from "../redux/expenseSlice";
import { useDispatch } from "react-redux";

const Form = () => {
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');
    const [currency, setCurrency] = useState('USD');
    const [method, setMethod] = useState('Dinheiro');
    const [tag, setTag] = useState('Alimentação');
    const dispatch = useDispatch();

    const handleFormInfo= () => {
        dispatch(getExpenses([{
            value,
            description,
            currency,
            method,
            tag,
            exchangeRates: currency,
            // id: 
          }]));
          setValue('');
          setDescription('');
          setCurrency('USD');
          setMethod('Dinheiro');
          setTag('Alimentação');
    };

    return(
        <div>
            <input
                type="text"
                name="value"
                placeholder="Valor da despesa"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <input
                type="text"
                name="description"
                placeholder="Descrição da despesa"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <label htmlFor="moeda">
                Moeda:
                <select
                id="moeda"
                name="currency"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                >
                </select>
            </label>
            <label htmlFor="metodo-de-pagamento">
                Método de Pagamento:
                <select
                    name="method"
                    id="method"
                    value={method}
                    onChange={(e) => setMethod(e.target.value)}
                >
                    <option value="Dinheiro">Dinheiro</option>
                    <option value="Cartão de crédito">Cartão de crédito</option>
                    <option value="Cartão de débito">Cartão de débito</option>
                </select>
            </label>
            <label htmlFor="categoria">
                Categoria:
                <select 
                    name="tag"
                    id="tag"
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                >
                    <option value="Alimentação">Alimentação</option>
                    <option value="Lazer">Lazer</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Transporte">Transporte</option>
                    <option value="Saúde">Saúde</option>
                </select>
            </label>
            <button 
                type="button"
                onClick={handleFormInfo}
            >
                Adicionar despesa
            </button>
        </div>
    );
}

export default Form;