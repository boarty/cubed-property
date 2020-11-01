/* Pre-fill fields */
const urlParams = new URLSearchParams(window.location.search);
const rentalAmount = urlParams.get('rentalAmount') / 4.3;

document.getElementById('name').value = urlParams.get('fullName');
document.getElementById('email').value = urlParams.get('email');
document.getElementById('amount').value = Math.round(rentalAmount*100) / 100 || 0;


/* Initialize Stripe */
// const stripe = Stripe('pk_test_9xbFpUqp92LsG5Sg5Xd10yiZ');
const stripe = Stripe('pk_live_JeHwi5DwXRCVR8Hw9YLADw35');
const elements = stripe.elements({ locale: 'en-GB' });

const style = {
    base: {
        color: '#32325d',
        fontFamily: "inherit",
        fontSize: '14px',
        '::placeholder': {
            color: '#d9d9e2',
            fontFamily: "'Poppins', sans-serif",
            fontWeight: '300',
            fontSize: '14px',
        },
        ':hover': {
            border: '2px solid #7594f3'
        },
        ':focus': {
            border: '2px solid #7594f3'
        },
    },
    invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
    }
};

// Create an instance of the card Element.
const card = elements.create('card', {
    style: style,
    hidePostalCode: true,
});

let displayError;

// Add an instance of the card Element into the `card-element` <div>.
card.mount('#card-element');

card.on('ready', () => {
    displayError = document.getElementById('card-errors');
});

// Handle real-time validation errors from the card Element.
card.on('change', function (event) {
    displayError.classList.add('additional-error');

    if (event.error) {
        displayError.textContent = event.error.message;
    } else {
        displayError.textContent = '';
    }
});




/* Handle form submission */
const form = document.getElementById('payment-form');
const paymentSucceeded = document.getElementById('payment-succeeded');

form.addEventListener('submit', async function (event) {
    event.preventDefault();
    setFormDisabled();

    const paymentAmount = parseFloat(document.getElementById('amount').value).toFixed(2);
    const payerName = document.getElementById('name').value;
    const payerMail = document.getElementById('email').value;

    // const clientSecret = await axios.post('http://localhost:5001/cubed-1600512143678/europe-west2/makePayment', {
    const clientSecret = await axios.post('https://europe-west2-cubed-1600512143678.cloudfunctions.net/makePayment', {
        name: payerName,
        amount: paymentAmount,
        email: payerMail,
        address: urlParams.get('address'),
        roomNumber: urlParams.get('roomNumber'),
    }).then(r => {
        if (!r.data.paymentIntent || !r.data.paymentIntent.client_secret) {
            displayError.textContent = r.data.message || '';
            return;
        }

        return r.data.paymentIntent.client_secret;
    })
    .catch(e => {
        displayError.textContent = e.data.message || '';
    });

    // Do not try confirmCardPayment if API returned an error
    if (!clientSecret) return setFormDisabled(false);

    // Confirm card payment
    const {paymentIntent, error} = await stripe.confirmCardPayment(
        clientSecret,
        {
            payment_method: {
                card: card,
                billing_details: {
                    name: payerName,
                },
            },
        },
    );

    if (error) {
        displayError.textContent = error.message || 'An error occurred, please try again.';
        setFormDisabled(false);
    } else {
        form.classList.add('hidden');
        paymentSucceeded.classList.remove('hidden');
    }
});

function setFormDisabled(disabled = true) {
    Array.from(form.elements).forEach(element => {
        if (element.nodeName === 'INPUT' && element.className !== '__PrivateStripeElement-input') {
            element.readOnly = disabled;
        }

        if (element.nodeName === 'BUTTON') {
            element.disabled = disabled;
        }
    });
}
