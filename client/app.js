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
      t_mean_radius: parseFloat(mean_radius.value),
      t_mean_texture: parseFloat(mean_texture.value),
      t_mean_perimeter: parseFloat(mean_perimeter.value),
      t_mean_area: parseFloat(mean_area.value),
      t_mean_smoothness: parseFloat(mean_smoothness.value)

      t_Pregnancies
      t_Glucose
      t_BloodPressure
      t_SkinThickness
      t_Insulin
      t_BMI
      t_DiabetesPedigreeFunction
      t_Age

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
