import React from 'react';

class InputV extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            exchangeArray: [],
            inputData: [],
        };

        this.exchange = this.exchange.bind(this);
        this.createInputData = this.createInputData.bind(this);
    }

    componentDidMount() {
        fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    exchangeArray: res,
                    isLoading: false
                });
                this.createInputData();
                console.log(this.state.exchange)
            });
    }

    createInputData() {
        const nameKoef = ["UAH", "USD", "EUR", "CAD"];
        const koefsArray = nameKoef.map((item) => {
            return this.getCurrency(this.state.exchangeArray, item)
        });
        let mathKoef = koefsArray.map((item) => {
            let arr = [];
            koefsArray.map((dil) => {
                return arr.push(item / dil)
            });
            return arr
        });
        this.setState({
            inputData: (
                mathKoef.map((item, index) => {
                    return (
                        {
                            value: '',
                            placeholder: nameKoef[index],
                            koefs: item,
                        }
                    )
                })
            )
        });

        return this.state.inputData;
    }

    getCurrency(exchange, currency) {
        if(currency === 'UAH') {
            return 1
        }
        const rate = exchange.find((item) => {
            return item.cc === currency
        })?.rate;
        if (!rate) {
            console.error("incorrect currency name");
            return 0
        }
        return rate
    }

    exchange(e, koefs) {
        const newInputData = koefs.map((koef, index) => {
            return {
                ...this.state.inputData[index],
                value: e.target.value * koef
            }
        });
        this.setState({
              inputData: newInputData
        });
    }

    inputRender() {
        return(
            this.state.inputData.map((inputItem, i) => {
                return(
                    <input
                        key={i}
                        style={{margin: 10}}
                        value={inputItem.value}
                        placeholder={inputItem.placeholder}
                        onChange={(e) => this.exchange(e, inputItem.koefs)}
                    />
                )
            })
        )
    }

    render() {
        if(this.state.isLoading) {
            return (
                <div>Loading</div>
            )
        } else {
            return (
                <div>
                    <div>
                        {this.inputRender()}
                    </div>
                </div>
            )
        }
    }
}

export default InputV;
