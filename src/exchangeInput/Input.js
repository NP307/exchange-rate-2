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
                    isLoading: false,
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

    //версія чата GPT
    /*createInputData() {
        const koefsArray = this.state.nameKoef.map((item) => {
            return this.getCurrency(this.state.exchangeArray, item)
        });

        let mathKoef = koefsArray.map((item) => {
            let arr = [];
            koefsArray.forEach((dil) => {
                arr.push(item / dil)
            });
            return arr
        });

        // Оновлення inputData з новими коефіцієнтами або створення нових об'єктів, якщо потрібно
        const newInputData = this.state.nameKoef.map((name, index) => {
            const existingInput = this.state.inputData.find(input => input.placeholder === name);
            return {
                value: existingInput ? existingInput.value : '',
                placeholder: name,
                koefs: mathKoef[index] || [],
            }
        });

        this.setState({ inputData: newInputData });
    }*/
    //версія чата GPT

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
        console.log(koefs);
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
                console.log(inputItem);
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
                                        const ind = this.state.nameKoef.indexOf(item.cc);
                                        this.state.nameKoef.splice(ind, 1);
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
