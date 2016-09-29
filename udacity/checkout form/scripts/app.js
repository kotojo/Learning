var CreditCardForm = React.createClass({
    getInitialState: function() {
        return { cardNumber: false, zipCode: false, expirationMonth: false, expirationYear: false, cvc: false};
    },
    checkValidity: function(key, event) {
        var val = event.target.value;
            if (val.length >= 1 && val.length < 100) {
                var validKey = true;
                if (key == 'zipCode' && !/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(val)) validKey = false;
                if (key == 'state' && !/^[0-9]{4}[0-9]{4}[0-9]{4}[0-9]{4}/.test(val)) validKey = false;
                if ((key == 'expirationMonth' || key == 'expirationYear') && !/[0-9]{2}$/.test(val)) validKey = false;
                if (key == 'cvc' && !/^[\d]{3}$/.test(val)) validKey = false;
                this.setState({ [key]: validKey}, function() {
                    var valid = true;
                    for (var stateKey in this.state) {
                        if (this.state[stateKey] == false) valid = false;
                    }
                    this.props.setValidity(valid);
                });
            }
    },
    render: function() {
        return (
            <div className="row">
                <div className="col s12 m12 l6">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">Please enter your Credit Card information.</span>
                            <form>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="ccnum" type="text"
                                            autocomplete="cc-number" 
                                            className="validate" required
                                            pattern="^[0-9]{4}[0-9]{4}[0-9]{4}[0-9]{4}"
                                            onChange={this.checkValidity.bind(this, 'cardNumber')}/>
                                        <label for="ccnum">Card Number</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s3">
                                        <input id="ccnum" type="text"
                                            autocomplete="cc-number" 
                                            className="validate" required
                                            pattern="^[0-9]{5}$"
                                            onChange={this.checkValidity.bind(this, 'zipCode')}/>
                                        <label for="ccnum">Zip</label>
                                    </div>
                                    <div className="col s6">
                                        <div className="input-field col s6">
                                            <input id="ccmonth" type="text"
                                                autocomplete="cc-exp-month" 
                                                className="validate" required
                                                allowed-pattern="[0-9]{2}$"
                                                onChange={this.checkValidity.bind(this, 'expirationMonth')}/>
                                            <label for="ccmonth">Exp Month</label>                                            
                                        </div>
                                        <div className="input-field col s6">
                                            <input id="ccyear" type="text"
                                                autocomplete="cc-exp-year" 
                                                className="validate" required
                                                allowed-pattern="[0-9]{2}$"
                                                onChange={this.checkValidity.bind(this, 'expirationYear')}/>
                                            <label for="ccyear">Exp Year</label>
                                        </div>
                                    </div>
                                    <div className="input-field col s3">
                                        <input id="cvc" type="text"
                                            autocomplete="cc-csc" 
                                            className="validate" required
                                            allowed-pattern="^[\d]{3}$"
                                            onChange={this.checkValidity.bind(this, 'cvc')}/>
                                        <label for="cvc">CVC</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})

var AddressForm = React.createClass({
    getInitialState: function() {
        return { firstName: false, lastName: false, address1: false, address2: false, city: false, state: false, zipCode: false}
    },
    checkValidity: function(key, event) {
        var val = event.target.value;
        if (val.length >= 1 && val.length < 100) {
            var validKey = true;
            if (key == 'zipCode' && !/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(val)) validKey = false;
            if (key == 'state' && val.length < 2) validKey = false;
            this.setState({ [key]: validKey }, function() {
                var valid = true;
                for (var stateKey in this.state) {
                    if (this.state[stateKey] == false) valid = false;
                }
                this.props.setValidity(valid);
            });
        }
    },
    render: function() {
        return (
            <div className="row">
                <div className="col s12 m12 l6">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">What is your shipping address?</span>
                            <form>
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input id="first_name" type="text" 
                                            className="validate" required
                                            autofocus autocomplete="given-name"
                                            onChange={this.checkValidity.bind(this, 'firstName')}/>
                                        <label for="first_name">First Name</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input id="last_name" type="text"
                                            className="validate" required
                                            autocomplete="family-name"
                                            onChange={this.checkValidity.bind(this, 'lastName')}/>
                                        <label for="last_name">Last Name</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="address1" type="text"
                                            className="validate" required
                                            autocomplete="shipping address-line1"
                                            onChange={this.checkValidity.bind(this, 'address1')}/>
                                        <label for="address1">Address Line 1</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="address2" type="text"
                                            className="validate" required
                                            autocomplete="shipping address-line2"
                                            onChange={this.checkValidity.bind(this, 'address2')}/>
                                        <label for="address2">Address Line 2</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input id="city" type="text"
                                            className="validate" required
                                            autocomplete="shipping address-level2"
                                            onChange={this.checkValidity.bind(this, 'city')}/>
                                        <label for="city">City</label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input id="state" type="text"                                            
                                            className="validate" required
                                            pattern="^.{2,}$"
                                            autocomplete="shipping address-level1"
                                            onChange={this.checkValidity.bind(this, 'state')}/>
                                        <label for="state">State</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="zip" type="text"
                                            className="validate" required
                                            autocomplete="shipping postal-code"
                                            pattern="(^\d{5}$)|(^\d{5}-\d{4}$)"
                                            onChange={this.checkValidity.bind(this, 'zipCode')}/>
                                        <label for="zip">Zip Code</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})

var Cart = React.createClass({
    render: function() {        
        var items = this.props.data.map(function(item) {
            return (
                <div className="card horizontal valign-wrapper black-text">
                    <div className="card-image">
                        <img src={item.img} />
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <span className="card-title">{item.name} x{item.quantity}</span>
                            <p>Cost: ${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                    </div>
                </div>
            )
        });

        return (
            <div>
                {items}
            </div>
        )
    }
})

var Checkout = React.createClass({
    getInitialState() {
        return { cc: false, address: false, isValid: false};
    },
    validateCC: function(isValid) {
        var validForm = isValid && this.state.address;
        this.setState({cc: isValid, isValid: validForm});        
    },
    validateAddress: function(isValid) {
        var validForm = isValid && this.state.cc;
        this.setState({address: isValid, isValid: validForm});
    },
    submit: function() {
    },
    render: function() {
        return (
            <div className="row blue lighten-2 full-height">
                <div className="col s12 m12 l3 white-text">
                    <h3 className="center">Your Cart</h3>
                    <Cart data={this.props.data}/>
                </div>
                <div className="col s12 m12 l9 white">
                    <AddressForm setValidity={this.validateAddress.bind(this)}/>
                    <CreditCardForm setValidity={this.validateCC.bind(this)}/>
                    <div className="col s12 m12 l6 lmargin-bottom">
                        <a className="waves-effect waves-light btn blue lighten-2 right" disabled={!this.state.isValid}>Purchase</a>
                    </div>
                </div>
            </div>
        )
    }
})

var cartData = [{ name: 'Classic Video Game Console', quantity: 1, price: 500.00, img: 'images/NES-Console-Set.png' }];

ReactDOM.render(
    <Checkout data={cartData}/>,
    document.getElementById("app")
)