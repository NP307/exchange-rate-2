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
            })
    }

    exchangeUAH(e) {
        this.setState({
            valueUAH: Number(e.target.value).toFixed(2),
            valueUSD: Number(e.target.value * (this.state.exchange[24].rate.toFixed(2))),
            valueEUR: Number(e.target.value * (this.state.exchange[31].rate.toFixed(2))),
        });
    }

    exchangeUSD(e) {
        this.setState({
            valueUSD: Number(e.target.value).toFixed(2),
            valueUAH: Number(e.target.value / (this.state.exchange[24].rate.toFixed(2))),
            valueEUR: Number(e.target.value * (this.state.exchange[31].rate.toFixed(2)) / (this.state.exchange[24].rate.toFixed(2))),
        });
    }

    exchangeEUR(e) {
        this.setState({
            valueEUR: Number(e.target.value).toFixed(2),
            valueUAH: Number(e.target.value / (this.state.exchange[31].rate.toFixed(2))),
            valueUSD: Number(e.target.value * (this.state.exchange[24].rate.toFixed(2)) / (this.state.exchange[31].rate.toFixed(2))),
        });
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
                        <input style={{margin: 10}} value={this.state.valueUAH} placeholder="UAH"
                               onChange={this.exchangeUAH}
                        />
                        <input style={{margin: 10}} value={this.state.valueUSD} placeholder="USD"
                               onChange={this.exchangeUSD}
                        />
                        <input style={{margin: 10}} value={this.state.valueEUR} placeholder="EUR"
                               onChange={this.exchangeEUR}
                        />
                    </div>
                </div>
            )
        }
    }
}

export default InputV;
