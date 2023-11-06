document.getElementById('combineButton').addEventListener('click', function() {
      const string1 = document.getElementById('string1').value;
      const string2 = document.getElementById('string2').value;
      const combinedString = string1 + string2;
      document.getElementById('result').textContent = 'Combined String: ' + combinedString;
}
