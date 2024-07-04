function addText(){
    inputText= document.getElementById('text1').value;

    outputTextArea = document.getElementById('area1');

    if(inputText.trim() !== ''){
     outputTextArea.value += inputText + '\n';

     document.getElementById('text1').value = '';
    }
 }

    function deleteText(){
         document.getElementById('area1').value = '';
         document.getElementById('text1').value = '';
 }