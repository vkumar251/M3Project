
// Payment form validation
const checkElement = document.getElementById("check");
const paymentMethodElement = document.getElementById("paymentMethod");
// Payment method buttons
const visaBtnElement = document.getElementById("visaBtn");
const mastercardBtnElement = document.getElementById("mastercardBtn");
const amexBtnElement = document.getElementById("amexBtn");
const paypalBtnElement = document.getElementById("paypalBtn");
const submitBtnElement = document.getElementById("submitBtn");
const subResultElement = document.getElementById("subResult");

submitBtnElement.onclick() = function()
{
    if (checkElement.checked)
    {
        subResultElement.textContent = "You are subscribed.";
    }
    else
    {subResultElement.textContent = "You are not subscribed.";
    }
    if (visaBtn.checked) // Visa
    {
        paymentMethodElement.textContent = "Payment Method: VISA";
    }
    else if (mastercardBtn.checked) // Mastercard
    {
        paymentMethodElement.textContent = "Payment Method: MASTERCARD";
    }
    else if (amexBtn.checked) // American Express
    {
        paymentMethodElement.textContent = "Payment Method: AMERICAN EXPRESS";
    }
    else if (paypalBtn.checked) // PayPal
    {
        paymentMethodElement.textContent = "Payment Method: PAYPAL";
    }
    else
    {
        paymentMethodElement.textContent = "Please enter a payment method.";
    }
}