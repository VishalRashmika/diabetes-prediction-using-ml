from flask import Flask, request, jsonify
import util

app = Flask(__name__)

@app.route('/get_location_names', methods=['GET'])
def get_location_names():
    response = jsonify({
        'locations': util.get_location_names()
    })
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response

@app.route('/predict_diabetes', methods=['GET', 'POST'])
def predict_home_price():
    # print(request.form['t_mean_radius'])
    mean_radius = float(request.form['t_mean_radius'])
    mean_texture = float(request.form['t_mean_texture'])
    mean_perimeter = float(request.form['t_mean_perimeter'])
    mean_area = float(request.form['t_mean_area'])
    mean_smoothness = float(request.form['t_mean_smoothness'])

    Pregnancies = float(request.form[''])
    Glucose = float(request.form[''])
    BloodPressure = float(request.form[''])
    SkinThickness = float(request.form[''])
    Insulin = float(request.form[''])
    BMI = float(request.form[''])
    DiabetesPedigreeFunction = float(request.form[''])
    Age = float(request.form[''])


    # print("QWE")
    # print(util.get_estimated_price(mean_radius,mean_texture,mean_perimeter,mean_area,mean_smoothness)) #success
    # print("AWDA")
    response = jsonify({
        'prediction': int(util.get_estimated_price(mean_radius,mean_texture,mean_perimeter,mean_area,mean_smoothness)[0])
    })
    # response = util.get_estimated_price(mean_radius,mean_texture,mean_perimeter,mean_area,mean_smoothness)
    # print("10000000000000000000")

    response.headers.add('Access-Control-Allow-Origin', '*')

    return response

if __name__ == "__main__":
    print("Starting Python Flask Server For Breast Cancer Pediction...")
    util.load_saved_artifacts()
    app.run()