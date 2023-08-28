import React from 'react';

class InputV extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valueUAH: '',
            valueUSD: '',
            valueEUR: '',
            isLoading: true,
            exchange: {},
            inputData: [],
        };

        this.exchangeUAH = this.exchangeUAH.bind(this);
        this.exchangeUSD = this.exchangeUSD.bind(this);
        this.exchangeEUR = this.exchangeEUR.bind(this);
    }

    componentDidMount() {
        fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    exchange: res,
                    isLoading: false
                });
                console.log(this.state.exchange)
            });

        this.setState({
            inputData: [
                {
                    value: this.state.valueUAH,
                    placeholder: 'UAH',
                    func: this.exchangeUAH
                },

                {
                    value: this.state.valueUSD,
                    placeholder: 'USD',
                    func: this.exchangeUSD
                },

                {
                    value: this.state.valueEUR,
                    placeholder: 'EUR',
                    func: this.exchangeEUR
                }
            ],
        });
    }

    exchangeUAH(e) {
        this.setState({
            valueUAH: e.target.value,
            valueUSD: e.target.value * (this.state.exchange[24].rate),
            valueEUR: e.target.value * (this.state.exchange[31].rate),
        });
    }

    exchangeUSD(e) {
        this.setState({
            valueUAH: e.target.value / (this.state.exchange[24].rate),
            valueUSD: e.target.value,
            valueEUR: e.target.value * (this.state.exchange[31].rate) / (this.state.exchange[24].rate),
        });
    }

    exchangeEUR(e) {
        this.setState({
            valueUAH: e.target.value / (this.state.exchange[31].rate),
            valueUSD: e.target.value * (this.state.exchange[24].rate) / (this.state.exchange[31].rate),
            valueEUR: e.target.value,
        });
    }

    inputRender() {
        return(
            this.state.inputData.map((inputItem) => {
                return(
                    <input
                        style={{margin: 10}}
                        value={inputItem.value}
                        placeholder={inputItem.placeholder}
                        onChange={inputItem.func}
                    />
                )
            })
        )
    }

    render() {
        if(this.state.isLoading) {
            return (
                <div>puk</div>
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
