$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const person1Input = $("input#person1").val();
    console.log(person1Input);
    const person2Input = $("input#person2").val();
    const animalInput= $("input#animal").val();
    const exclamationInput = $("input#exclamation").val();
    const verbInput = $("input#verb").val();
    const nounInput = $("input#noun").val();

    const spans = [".person1", ".person2", ".animal", ".exclamation", ".verb", ".noun"];
    const inputs = [person1Input, person2Input, animalInput, exclamationInput, verbInput, nounInput];
    let newInput = 0;

    spans.forEach(function(element){
      $(element).append(inputs[newInput]);
      newInput += 1;
    });
    $("#story").show();
  });
});


