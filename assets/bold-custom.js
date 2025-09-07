document.addEventListener('DOMContentLoaded', function () {
    BOLD.common.eventEmitter.on('BOLD_OPTIONS_option_products_loaded', function (event) {
        console.log('test');
        bold_formatMoney();
        document.body.addEventListener('click',(e)=>{
            if (e.target.closest('.bold_options')){
                setTimeout(bold_formatMoney,10);
            }
        })
     })
})

function bold_formatMoney(){
    const moneys = document.querySelectorAll('.bold_options .money, .bold_options .bold_option_value_price, .bold_options .bold_option_total span');
    moneys.forEach((money)=>{
        money.textContent = money.textContent.replace(/[^0-9.,]+/g, '') + ' kr';
    })
}