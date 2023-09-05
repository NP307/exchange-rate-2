import React from 'react';

class InputV extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            exchange: [
                {
                    "r030":36,"txt":"Австралійський долар","rate":23.4697,"cc":"AUD","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":124,"txt":"Канадський долар","rate":26.8393,"cc":"CAD","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":156,"txt":"Юань Женьміньбі","rate":5.0134,"cc":"CNY","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":203,"txt":"Чеська крона","rate":1.6355,"cc":"CZK","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":208,"txt":"Данська крона","rate":5.3019,"cc":"DKK","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":344,"txt":"Гонконгівський долар","rate":4.6603,"cc":"HKD","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":348,"txt":"Форинт","rate":0.1034,"cc":"HUF","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":356,"txt":"Індійська рупія","rate":0.44215,"cc":"INR","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":360,"txt":"Рупія","rate":0.0023964,"cc":"IDR","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":376,"txt":"Новий ізраїльський шекель","rate":9.6028,"cc":"ILS","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":392,"txt":"Єна","rate":0.24855,"cc":"JPY","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":398,"txt":"Теньге","rate":0.079088,"cc":"KZT","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":410,"txt":"Вона","rate":0.027662,"cc":"KRW","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":484,"txt":"Мексиканське песо","rate":2.1794,"cc":"MXN","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":498,"txt":"Молдовський лей","rate":2.0525,"cc":"MDL","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":554,"txt":"Новозеландський долар","rate":21.5773,"cc":"NZD","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":578,"txt":"Норвезька крона","rate":3.4145,"cc":"NOK","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":643,"txt":"Російський рубль","rate":0.38138,"cc":"RUB","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":702,"txt":"Сінгапурський долар","rate":26.962,"cc":"SGD","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":710,"txt":"Ренд","rate":1.9705,"cc":"ZAR","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":752,"txt":"Шведська крона","rate":3.3227,"cc":"SEK","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":756,"txt":"Швейцарський франк","rate":41.3158,"cc":"CHF","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":818,"txt":"Єгипетський фунт","rate":1.1828,"cc":"EGP","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":826,"txt":"Фунт стерлінгів","rate":46.0271,"cc":"GBP","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":840,"txt":"Долар США","rate":36.5686,"cc":"USD","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":933,"txt":"Білоруський рубль","rate":13.2919,"cc":"BYN","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":944,"txt":"Азербайджанський манат","rate":21.5388,"cc":"AZN","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":946,"txt":"Румунський лей","rate":7.9966,"cc":"RON","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":949,"txt":"Турецька ліра","rate":1.3734,"cc":"TRY","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":960,"txt":"СПЗ (спеціальні права запозичення)","rate":48.489,"cc":"XDR","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":975,"txt":"Болгарський лев","rate":20.2048,"cc":"BGN","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":978,"txt":"Євро","rate":39.516,"cc":"EUR","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":985,"txt":"Злотий","rate":8.8392,"cc":"PLN","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":12,"txt":"Алжирський динар","rate":0.27012,"cc":"DZD","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":50,"txt":"Така","rate":0.33549,"cc":"BDT","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":51,"txt":"Вірменський драм","rate":0.094703,"cc":"AMD","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":214,"txt":"Домініканське песо","rate":0.65285,"cc":"DOP","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":364,"txt":"Іранський ріал","rate":0.00087068,"cc":"IRR","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":368,"txt":"Іракський динар","rate":0.027915,"cc":"IQD","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":417,"txt":"Сом","rate":0.41694,"cc":"KGS","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":422,"txt":"Ліванський фунт","rate":0.002438,"cc":"LBP","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":434,"txt":"Лівійський динар","rate":7.6492,"cc":"LYD","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":458,"txt":"Малайзійський ринггіт","rate":8.1137,"cc":"MYR","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":504,"txt":"Марокканський дирхам","rate":3.7289,"cc":"MAD","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":586,"txt":"Пакистанська рупія","rate":0.12803,"cc":"PKR","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":682,"txt":"Саудівський ріял","rate":9.7477,"cc":"SAR","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":704,"txt":"Донг","rate":0.0015438,"cc":"VND","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":764,"txt":"Бат","rate":1.06857,"cc":"THB","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":784,"txt":"Дирхам ОАЕ","rate":9.9558,"cc":"AED","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":788,"txt":"Туніський динар","rate":11.9174,"cc":"TND","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":860,"txt":"Узбецький сум","rate":0.0031524,"cc":"UZS","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":901,"txt":"Новий тайванський долар","rate":1.16261,"cc":"TWD","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":934,"txt":"Туркменський новий манат","rate":10.4482,"cc":"TMT","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":941,"txt":"Сербський динар","rate":0.3441,"cc":"RSD","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":972,"txt":"Сомоні","rate":3.3489,"cc":"TJS","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":981,"txt":"Ларі","rate":13.9272,"cc":"GEL","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":986,"txt":"Бразильський реал","rate":7.7304,"cc":"BRL","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":959,"txt":"Золото","rate":70113.71,"cc":"XAU","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":961,"txt":"Срібло","rate":885.57,"cc":"XAG","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":962,"txt":"Платина","rate":35611.97,"cc":"XPT","exchangedate":"30.08.2023"
                }
                ,{
                    "r030":964,"txt":"Паладій","rate":45159.66,"cc":"XPD","exchangedate":"30.08.2023"
                }
            ],
            inputData: [],
        };

        this.exchange = this.exchange.bind(this);
        this.createInputData = this.createInputData.bind(this);
        /*this.exchangeUAH = this.exchangeUAH.bind(this);
        this.exchangeUSD = this.exchangeUSD.bind(this);
        this.exchangeEUR = this.exchangeEUR.bind(this);*/
    }

    componentDidMount() {
        /*fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    exchange: res,
                    isLoading: false
                });
            });

        this.setState({
            inputData: [
                {
                    value: '',
                    placeholder: 'UAH',
                    koefs: [1, 1/this.state.exchange[24].rate, 1/this.state.exchange[31].rate],
                },

                {
                    value: '',
                    placeholder: 'USD',
                    koefs: [this.state.exchange[24].rate, 1 ,this.state.exchange[24].rate / this.state.exchange[31].rate]
                },

                {
                    value: '',
                    placeholder: 'EUR',
                    koefs: [this.state.exchange[31].rate, this.state.exchange[31].rate / this.state.exchange[24].rate, 1]
                }
            ],
        });*/

        this.createInputData();
    }

    /*
        UAH/UAH UAH/USD UAH/EUR
        USD/UAH USD/USD USD/EUR
        EUR/UAH EUR/USD EUR/EUR
    */

    createInputData() {
        const nameKoef = ["UAH", "USD", "EUR", "CAD"];
        let getKoef = nameKoef.map((item) => {
            return this.getCurrency(this.state.exchange, item)
        });
        let mathKoef = [];
        getKoef.map((item) => {
            let arr = [];
            getKoef.map((dil) => {
                return arr.push(item / dil)
            });
            return mathKoef.push(arr)
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

    /*createInputData() {
        const nameKoef = ["UAH", "USD", "EUR"];
        let getKoef = nameKoef.map((item) => {
            return this.getCurrency(this.state.exchange, item)
        });
        let mathKoef = [];
        getKoef.map((item) => {
            let arr = [];
            getKoef.map((dil) => {
                return arr.push(item / dil)
            });
            return mathKoef.push(arr)
        });
        let inputDataItem = mathKoef.map((item, index, array) => {
            return (
                {
                    value: '',
                    placeholder: nameKoef[index],
                    koefs: item,
                }
            )
        });
        this.state.inputData.push(inputDataItem);

        return this.state.inputData
    }*/

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

    /*exchangeUAH(e) {
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
    }*/

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
        if(!this.state.isLoading) {
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
