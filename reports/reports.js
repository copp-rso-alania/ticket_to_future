let options = document.querySelectorAll('.option_unit');
let reports = document.querySelectorAll('.n_block');
let minpros = document.querySelectorAll('.minpros_orders');
let minobr = document.querySelectorAll('.minobr_orders');

//minpros_orders 
//minobr_orders

options.forEach(element => {
    element.onclick = ()=>{
        options.forEach(element=>{
            element.classList.remove('chosen');
        })
        element.classList.add('chosen');

        if(element.id == 'alldocs'){
            reports.forEach(element=>{
                element.style.display = 'block';
            })
        }

        else if(element.id == 'minpros'){
            reports.forEach(element=>{
                element.style.display = 'none';
                minpros.forEach(element=>{
                    element.style.display = 'block';
                })
            })
        }

        else if(element.id == 'mon'){
            reports.forEach(element=>{
                element.style.display = 'none';
                minobr.forEach(element=>{
                    element.style.display = 'block';
                })
            })
        }
    }
});