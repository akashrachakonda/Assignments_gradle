import React, { useEffect, useState } from 'react';
import { Container, Card, Badge, Button, Modal } from 'react-bootstrap'
import CurrencyRow from './CurrencyRow';
import {MDBIcon} from 'mdbreact';

const BASE_URL = 'https://api.exchangeratesapi.io/latest'

function Forex() {
    const [currencyOptions, setCurrencyOptions] = useState([])
    const [fromCurrency, setFromCurrency] = useState("USD")
    const [toCurrency, setToCurrency] = useState("INR")
    const [exchangeRate, setExchangeRate] = useState()
    const [amount, setAmount] = useState(1)
    const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)
    const [show, setShow] = useState(false)

    let toAmount, fromAmount
    if (amountInFromCurrency) {
        fromAmount = amount
        toAmount = (amount * exchangeRate).toFixed(5)
    } else {
        toAmount = amount
        fromAmount = (amount / exchangeRate).toFixed(5)
    }

    useEffect(() => {
        fetch(BASE_URL)
            .then(res => res.json())
            .then(data => {
                const firstCurrency = Object.keys(data.rates)[0]
                setCurrencyOptions([data.base, ...Object.keys(data.rates)])
                setFromCurrency("USD")
                setToCurrency("INR")
                setExchangeRate(data.rates[firstCurrency])
            })
    }, [])

    useEffect(() => {
        if (fromCurrency != null && toCurrency != null) {
            fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
                .then(res => res.json())
                .then(data => setExchangeRate(data.rates[toCurrency]))
        }
    }, [fromCurrency, toCurrency])

    function handleFromAmountChange(e) {
        setAmount(e.target.value)
        setAmountInFromCurrency(true)
    }

    function handleToAmountChange(e) {
        setAmount(e.target.value)
        setAmountInFromCurrency(false)
    }
    return (
        <Container>
            <Card  className="text-center" bg="light" border="primary">
                <Card.Body>
                    <Card.Title>Purchase Forex</Card.Title>
                    <CurrencyRow
                        currencyOptions={currencyOptions}
                        selectedCurrency={fromCurrency}
                        onChangeCurrency={e => setFromCurrency(e.target.value)}
                        onChangeAmount={handleFromAmountChange}
                        amount={fromAmount}
                    />
                    <CurrencyRow
                        currencyOptions={currencyOptions}
                        selectedCurrency={toCurrency}
                        onChangeCurrency={e => setToCurrency(e.target.value)}
                        onChangeAmount={handleToAmountChange}
                        amount={toAmount}
                    />
                    <h1><Badge variant="primary">{toAmount}</Badge></h1>
                    <Button variant="outline-primary" onClick={() => setShow(true)}>Buy</Button>
                    <Modal
                        size="sm"
                        show={show}
                        onHide={() => setShow(false)}
                        aria-labelledby="example-modal-sizes-title-sm"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title style={{paddingLeft:"60px"}}>{toAmount} {toCurrency} Successfully Purchased !!!
                            <br/><MDBIcon icon="check-circle" style={{color:"green",paddingLeft:"60px"}}/>
                            </Modal.Title>
                        </Modal.Header>
                    </Modal>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Forex;
