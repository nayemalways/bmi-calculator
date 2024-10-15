let height = document.getElementById('heightInput');
let weight = document.getElementById('weightInput');
let button = document.getElementById('button');
let score = document.getElementById('score');
let result = document.querySelector('.result');
let form = document.getElementById('form');



 form.addEventListener('submit', e => {
    e.preventDefault();
    let target = e.target;

    // get the velu from the form 
    let height_cm = parseFloat(target.height.value);  
    let weight_kg = parseFloat(target.weight.value);
 
    // calculate the BMI 
    calculateBMI(height_cm, weight_kg);

    // form reset
    e.target.reset();
 });




// Calculate The BMI operation 
 function calculateBMI(height_cm, weight_kg){
    const height = height_cm; 
    const weight = weight_kg;
    let height_meter = height / 100;    // converted height cm to m
    
    // BMI calculate
    const BMI = (weight / Math.pow(height_meter, 2)).toFixed(1.5);

    // Show BMI in Browser
    score.innerHTML = BMI;
    if(BMI < 18.6){
        score.style.color = '#FFBF61'
    }else if(BMI > 24.9){
         score.style.color = '#F95454'
    }else{
         score.style.color = '#00FF9C'
    }
    
 }