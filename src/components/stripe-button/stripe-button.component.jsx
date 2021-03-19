import React, { StrictMode } from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe  = price * 100
    const publishableKey = 'pk_test_51IWYaAGZMzRCTBgslKguy56W7VhTaDcOR1COH12osDRfpKkpz8k91oONMkbd2Pm4S32riOgC2gMhZjI8Z0Wm9Wq000tCOILvaB'

    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/en/f3eb2117da'
        description = {`Your total value is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        stripeKey = {publishableKey}
        token={onToken}/>
        
       
    )
}

export default StripeCheckoutButton