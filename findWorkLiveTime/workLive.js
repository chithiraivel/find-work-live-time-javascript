//  var div = document.createElement('div');
// div.textContent = 'DOB  '
//  div.className='box';
var label = document.createElement('label');
var select = document.createElement('select');
select.setAttribute('onchange', 'year(this.value)')
label.textContent='Years'
select.className = 'year'

for (let i = 1972; i <= 2006; i++) {

    var option = document.createElement('option');
    option.setAttribute('value', i);
    option.textContent = i;
    select.append(option);
    label.append(select)
}
// select2.append(option2);

// div.append(select,select2);

// var select2 = document.createElement('select');
// select2.setAttribute('id', 'show');

document.body.append(label);
var show = document.querySelector('#show');


var years;
function year(data2) {
    years = parseInt(data2);
    console.log("years " + years);
}



var days2;
function days(day) {
    days2 = parseInt(day);
    console.log("days2 " + days2);
}



var months;

function month(data) {

    months = parseInt(data);
    console.log("months " + months);

    // var select2 = document.createElement('select');
    // select2.setAttribute('onchange', 'days()');



    if (months == '1' || months == '3' || months == '5' || months == '7' || months == '8' || months == '10' || months == '12') {
        show.innerHTML = ''


        for (let i = 1; i <= 31; i++) {


            var option2 = document.createElement('option');
            option2.setAttribute('value', i);
            option2.textContent = i;
            show.append(option2);
        }



    }
    else if (months == '4' || months == '6' || months == '9' || months == '1') {

        show.innerHTML = ''


        for (let i = 1; i <= 30; i++) {

            var option2 = document.createElement('option');
            option2.setAttribute('value', i);
            option2.textContent = i;
            show.append(option2);
        }


    }

    else if (months == '2') {

        show.innerHTML = ''

        if (years % 4 == 0) {


            for (let i = 1; i <= 29; i++) {

                var option2 = document.createElement('option');
                option2.setAttribute('value', i);
                option2.textContent = i;
                show.append(option2);
            }


        }
        else {

            show.innerHTML = ''

            for (let i = 1; i <= 28; i++) {

                var option2 = document.createElement('option');
                option2.setAttribute('value', i);
                option2.textContent = i;
                show.append(option2);
            }


        }

    }


}

var div = document.createElement('div');
div.className='Div_class'
var age = document.createElement('select');
age.className = 'age'
div.textContent = 'Age '



for (let i = 40; i <= 55; i++) {
    var ageOption = document.createElement('option');
    ageOption.textContent = i;
    age.setAttribute('onchange', "ages(this.value)");
    age.append(ageOption);
    div.append(age);
    document.body.append(div);

}

var button = document.createElement('button');
button.textContent = 'GO';
div.append(button)
console.log(div);

var ages2;
function ages(age) {
    ages2 = parseInt(age);
    console.log("ages2 " + ages2);
}





button.addEventListener('click', () => {

    console.log(years + ages2);
    var retirement = new Date(years + ages2, months, days2);
    var retirementYear = retirement.getFullYear();
    var retirementDay = retirement.getDate()
    console.log(retirementDay);

    var Current = new Date();
    var CurrentYear = Current.getFullYear()
    var CurrentDay = Current.getDate();
    console.log(CurrentDay);

    var stillYear = (retirementYear - CurrentYear)
    console.log("Current To retirement Date " + stillYear);


    var parent = document.createElement('div');
    parent.className = 'one'
    console.log(parent);
      parent.innerHTML = '';

    for (let i = CurrentYear; i <= retirementYear; i++) {

        var div = document.createElement('a');
        div.className = 'two'
        div.style.padding = '10px';
        div.style.margin = '20px'
        div.style.backgroundColor = 'green';
        parent.append(div);
       
    }

    
    for (let i = years; i <= CurrentYear; i++) {

        var div = document.createElement('a');
        div.className = 'two'
        div.style.padding = '10px';
        div.style.margin = '20px'
        div.style.backgroundColor = 'red';
        parent.append(div);
      

    }
    document.body.append(parent);
})





