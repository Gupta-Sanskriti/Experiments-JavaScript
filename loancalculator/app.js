// listen for submit 

document.getElementById('loan-form').addEventListener('submit',function(e){
  // // hide result
  // document.getElementById('results').style.display = 'none';
  // // show loader
  // document.getElementById('loading').style.display = 'block';

  // setTimeout(calculateResults , 2000);

  e.preventDefault();
})

// calculate results on the monthly basis to get the annuall 
function calculateResults(){
  console.log('calculating...');

  // UI vars
  const amount = document.querySelector('#amount');
  const interest = document.querySelector('#interest');
  const years = documment.querySelector('#years');
  const monthlyPayment = document.querySelector('#monthly-payment');
  const totalInterest = document.querySelector('#total-interest');

  const principal = parseFloat(ampout.value);
  const calculatedInt = parseFloat(interest.value)/100/12;
  const calculatedPayment = parseFloat(years.value)*12
  // compute monthly payment :
  const x = Math.pow(1+calculatedInt,calculatedPayment);
  const monthly = (principal*x*calculatedInt)/(x-1);

  if(isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly*calculatedPayment).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayment)-principal).toFixed(2);

    // show result
    document.getElementById('result').style.display = 'block';

    // hide loader
    document.getElementById('loading').style.display = 'none';

  }else{
    showError('please check your numbers')
  }

}

// show error 
function showError(error){
  // hide result
  document.getElementById('results').style.display = 'none';
  // hide loader
  document.getElementById('loading').style.display = 'none';

  // create a div 
  const errorDiv = document.createElement('div');

  // get elements 
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // add class
  errorDiv.className = 'alert alert-danger';

  // create textnode and append to div
  errordiv.appendChild(document.createTextNode(error));

  // insert error above heading 
  card.insertBefore(errorDiv,heading);

  // clear error above heading 
  setTimeout(clearError,3000);

}

// clear error :
function clearError(){
  document.querySelector('.alert').remove();
}