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

    render() {
        if(this.state.isLoading) {
            return (
                <div>puk</div>
            )
        } else {
            return (
                <div>
                    <div>
                        <input style={{margin: 10}} value={Number(this.state.valueUAH).toFixed(2)} placeholder="UAH"
                               onChange={this.exchangeUAH}
                        />
                        <input style={{margin: 10}} value={Number(this.state.valueUSD).toFixed(2)} placeholder="USD"
                               onChange={this.exchangeUSD}
                        />
                        <input style={{margin: 10}} value={Number(this.state.valueEUR).toFixed(2)} placeholder="EUR"
                               onChange={this.exchangeEUR}
                        />
                    </div>
                </div>
            )
        }
    }
}

export default InputV;
