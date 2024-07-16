

document.addEventListener('alpine:init', function (){
    Alpine.data('greetingFunc', greet);
    Alpine.data('transportFeeFunc', transportFeeCalculator);
    Alpine.data('totalPhoneBillFunc', phoneBillCalculator);
    Alpine.data('enoughAirtimeFunc', airtimeCalculator);
})