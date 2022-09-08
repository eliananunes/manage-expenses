import React from "react";

const Form = () => {
    return(
        <div>
            <input
                type="text"
                name="value"
                 placeholder="Valor da despesa"
            />
            <input
                type="text"
                name="description"
                placeholder="Descrição da despesa"
            />
            <label htmlFor="moeda">
                Moeda:
                <select
                id="moeda"
                value="currency"
                name="currency"
                >
                </select>
            </label>
            <label htmlFor="metodo-de-pagamento">
                Método de Pagamento:
                <select
                    name="method"
                    id="method"
                    value="method"
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
                    value="tag"
                >
                    <option value="Alimentação">Alimentação</option>
                    <option value="Lazer">Lazer</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Transporte">Transporte</option>
                    <option value="Saúde">Saúde</option>
                </select>
            </label>
            <button type="button">
                Adicionar despesa
            </button>
        </div>
    );
}

export default Form;