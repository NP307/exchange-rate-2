import React from 'react';

class InputV extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            exchangeArray: [],
            inputData: [],
            nameKoef: [],
            filteredArray: [],
        };

        this.exchange = this.exchange.bind(this);
        this.createInputData = this.createInputData.bind(this);
    }

    componentDidMount() {
        fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
            .then((res) => res.json())
            .then((res) => {
                res.unshift({
                    r030: 980,
                    txt: "Українська гривня",
                    rate: 1,
                    cc: "UAH"
                });
                this.setState({
                    exchangeArray: res,
                    isLoading: false
                });
            });
    }

    createInputData() {
        const koefsArray = this.state.nameKoef.map((item) => {
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
                            placeholder: this.state.nameKoef[index],
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
                    <div>
                        {
                            this.state.exchangeArray.map((item) => {
                                return <div onClick={() => {
                                    if(!this.state.nameKoef.includes(item.cc)){
                                        this.state.nameKoef.push(item.cc);
                                    } else {
                                        let ind = this.state.nameKoef.indexOf(item.cc);
                                        delete this.state.nameKoef[ind];
                                    }
                                    this.createInputData();
                                }}>{item.txt}</div>
                            })
                        }
                    </div>
                </div>
            )
        }
    }
}

export default InputV;
