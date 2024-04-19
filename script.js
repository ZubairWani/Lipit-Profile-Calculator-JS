 function calculate() {
            var a = parseFloat(document.getElementById('totalCholesterol').value);
            var b = parseFloat(document.getElementById('triglycerides').value);
            var c = parseFloat(document.getElementById('hdl').value);

            var vldl = b / 5;
            var ldl = a - c - vldl;
            var nonHDL = a - c;
            var cholHDL = a / c;
            var ldlHDL = ldl / c;

            var results = "<p>LDL Cholesterol : " + ldl.toFixed(2) + " mg/dL</p>";
            results += "<p>VLDL Cholesterol : " + vldl.toFixed(2) + " mg/dL</p>";
            results += "<p>Non HDL Cholesterol : " + nonHDL.toFixed(2) + " mg/dL</p>";
            results += "<p>Cholesterol/HDL Ratio : " + cholHDL.toFixed(2) + "</p>";
            results += "<p>LDL/HDL Ratio : " + ldlHDL.toFixed(2) + "</p>";  
            

            document.getElementById('results').innerHTML = results;
        }
