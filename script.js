document.getElementById('uploadBtn').addEventListener('click', function() {
    var file1 = document.getElementById('file1').files[0];
    var file2 = document.getElementById('file2').files[0];
    var formData = new FormData();
    formData.append('data', file1);
    formData.append('oldData', file2);

    fetch('http://localhost/api/compare/save', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(result => {
        document.getElementById('result').value = result;
    })
    .catch(error => console.error('Error:', error));
});





