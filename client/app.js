function onClickedEstimatePrice() {
  console.log("Prediction button clicked");
  var Pregnancies = document.getElementById("uipregnancies")
  var Glucose = document.getElementById("uiglucose")
  var BloodPressure = document.getElementById("uibloodpressure")
  var SkinThickness = document.getElementById("uiskinthickness")
  var Insulin = document.getElementById("uiinsulin")
  var BMI = document.getElementById("uibmi")
  var DiabetesPedigreeFunction = document.getElementById("uiDPF")
  var Age = document.getElementById("uiage")

  var estPrice = document.getElementById("uiEstimatedPrice");

  var url = "http://127.0.0.1:5000/predict_breast_cancer"; //Use this if you are NOT using nginx which is first 7 tutorials
  //var url = "/api/predict_home_price"; // Use this if  you are using nginx. i.e tutorial 8 and onwards

  $.post(url, {
      t_Pregnancies: parseFloat(Pregnancies.value),
      t_Glucose: parseFloat(Glucose.value),
      t_BloodPressure: parseFloat(BloodPressure.value),
      t_SkinThickness: parseFloat(SkinThickness.value),
      t_Insulin: parseFloat(Insulin.value),
      t_BMI: parseFloat(BMI.value),
      t_DiabetesPedigreeFunction: parseFloat(DiabetesPedigreeFunction.value),
      t_Age: parseFloat(Age.value)
  },function(data, status) {
      console.log(data.estimated_price);
      var prediction = data.prediction;
      console.log(prediction)
      if (prediction == 1){
        estPrice.innerHTML = "<h2>" + "Positive" + " :(</h2>";
      }
      else if (prediction == 0){
        estPrice.innerHTML = "<h2>" + "Negative" + " :)</h2>";
      }
      // estPrice.innerHTML = "<h2>" + data.prediction.toString() + " Lakh</h2>";
      console.log(status);
  });
}

function onPageLoad() {
  console.log( "page loaded" );
}

window.onload = onPageLoad;

/*
Pregnancies
Glucose
BloodPressure
SkinThickness
Insulin
BMI
DiabetesPedigreeFunction
Age
*/