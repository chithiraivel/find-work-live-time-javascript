// var div = document.createElement('div');
// div.textContent = 'DOB  '
// div.className='box';
var select = document.createElement('select');
select.setAttribute('onchange', 'year(this.value)')


for (let i = 1972; i <= 2006; i++) {

    var option = document.createElement('option');
    option.setAttribute('value', i);
    option.textContent = i;
    select.append(option);
}
// select2.append(option2);

// div.append(select,select2);

// var select2 = document.createElement('select');
// select2.setAttribute('id', 'show');

document.body.append(select);
var show = document.querySelector('#show');


var years;
function year(data2){
    years = parseInt(data2)
}

var months;

function month(data) {

    months = data
    console.log(months);

    // var select2 = document.createElement('select');
    // select2.setAttribute('onchange', 'days()');
    
    

    if (months == 'jan' || months == 'march' || months == 'may' || months == 'july' || months == 'august' || months == 'october' || months == 'december') {
        show.innerHTML =''
       

        for (let i = 1; i <= 31; i++) {

           
            var option2 = document.createElement('option');
            option2.setAttribute('value', i);
            option2.textContent = i;
            show.append(option2);   
        } 
       
    
        
    }
    else if (months == 'april' || months == 'june' || months == 'september' || months == 'november') {

        show.innerHTML =''

        
        for (let i = 1; i <= 30; i++) {

            var option2 = document.createElement('option');
            option2.setAttribute('value', i);
            option2.textContent = i;
            show.append(option2);
        }

        
    }

    else if (months == 'feb') {

        // show.innerHTML =''

        if (years % 4 == 0) {
          

            for (let i = 1; i <= 29; i++) {

                var option2 = document.createElement('option');
                option2.setAttribute('value', i);
                option2.textContent = i;
                show.append(option2);
            }

            
        }
        else {
            
            // show.innerHTML =''

            for (let i = 1; i <= 28; i++) {

                var option2 = document.createElement('option');
                option2.setAttribute('value', i);
                option2.textContent = i;
                show.append(option2);
            }

            
        }

    }

    
}





