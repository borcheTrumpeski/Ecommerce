import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRate, setTargetCurrency } from '../../redux/currencySlice';

function CurrencyConverter() {
    const [amount, setAmount] = useState(0);
    const [convertedAmount, setConvertedAmount] = useState(0);
    const [currencies, setCurrencies] = useState([]);
    const targetCurrency = useSelector((state) => state.currency.targetCurrency);
    const rate = useSelector((state) => state.currency.rate);
    const dispatch = useDispatch();

    useEffect(() => {
        // const API_KEY = 'YOUR_API_KEY_HERE';
        const baseCurrency = 'USD';
        const url = `https://api.exchangerate-api.com/v4/latest/${baseCurrency}`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setCurrencies(Object.keys(data.rates)); // Get list of supported currencies
                dispatch(setRate({ rate: data.rates[targetCurrency] })); // Set rate in Redux
            })
            .catch((error) => console.error('Error fetching exchange rates:', error));
    }, [targetCurrency, dispatch]);

    // const handleConvert = () => {
    //     if (rate) {
    //         setConvertedAmount(amount * rate);
    //     }
    // };

    const handleCurrencyChange = (e) => {
        dispatch(setTargetCurrency({ targetCurrency: e.target.value }));
    };

    return (
        <div>
            <select value={targetCurrency} onChange={handleCurrencyChange}>
                {currencies.map((currency) => (
                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default CurrencyConverter;
