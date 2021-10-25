$(function() {
    var personnages = [];


    function displayPersonnages(string){
        $("#container_personnage").empty()
        string.forEach(function(personnage) {
            //  console.log(personnage)
            $("#container_personnage").html($("#container_personnage").html()+`<div class="element_personnage">
                <img src="${personnage.imageUrl}" alt="image personnage" class="img" >
                <div class="shadow">
                    <p>${personnage.fullName}</p>
                    <p> ${personnage.title} </p>
                </div>
            </div>`)
        })
      
    }

    $.ajax({
        url: 'https://thronesapi.com/api/v2/Characters',
        success: function(data, statuts, response) {
            // console.log(data[1]);
            personnages = data;
            
            displayPersonnages(data)
        }
    });


    $("input").keyup(function() {
        var  value = $("input").val()
        // console.log(value);
        var filterData = personnages.filter(function(personnage) {
            return personnage.fullName.toLowerCase().includes(value)
        })
        displayPersonnages(filterData)
        // console.log(filterData);
    })
    function mixArray(inputArray){
        // inputArray.sort(()=> Math.random() - 0.5);
        // console.log(inputArray);
        var lodash = _;
        var mix=lodash.shuffle(inputArray)
        displayPersonnages(mix)
    }      

    $(".random").click(function() {
         var randomPersonnages = personnages;
         mixArray(randomPersonnages)
    })

    $(".alphabet").click(function() {
        console.log("bonjour");
         var alphabeticalOrder = personnages.sort(function(a,b) {
             return a.fullName.localeCompare(b.fullName)
         })
         console.log(alphabeticalOrder);
         displayPersonnages(alphabeticalOrder)
    })
    $(".alphabet_inverse").click(function() {
        console.log("bonjour");
         var alphabeticalOrder = personnages.sort(function(a,b) {
             return b.fullName.localeCompare(a.fullName)
         })
         console.log(alphabeticalOrder);
         displayPersonnages(alphabeticalOrder)
    })

})




