


//auto fill in modifier from math involved with score
$('.stat').bind('input', function(){
      const inputName = $(this).attr('name')
      let mod = parseInt($(this).val()) - 10
      
      // down to nearest even value divided by 2 = modifier score
      if (mod % 2 == 0)
        mod = mod / 2
      else
        mod = (mod - 1) / 2
  
      // Correction for unfilled stat
      if (isNaN(mod))
        mod = ""
      else if (mod >= 0)
        mod = "+" + mod

      //remove score from the name of the stat so that the name can be used to search for the modifier
      var scoreName = inputName.slice(0, inputName.indexOf("score"))
      var modName = scoreName + "mod"
      //edit the stats corresponding modifier 
      $("[name='" + modName + "']").val(mod)
    })

// automate prof bonus calculation on input, function mainly adds all integers for single and multi class
$("[name='classlevel']").bind('input', function() {
    const classes = $(this).val()
    // \d is to match digit 
    // + for at least one == more than one
    // /g for global
    const r = new RegExp(/\d+/g)
    let total = 0
    let result
    // grab number from class level
    // each r.exec will search through each int in classes eventually returning null when search has completed
    while ((result = r.exec(classes)) != null){
      let lvl = parseInt(result)
      if (!isNaN(lvl))
        total += lvl
    }
    // level calculation from 5e
    let prof = 2
    if (total > 0){
      total -= 1
      prof += Math.trunc(total/4)
      prof = "+" + prof
    }
    else{
      prof = ""    
    }
    $("[name='proficiencybonus']").val(prof)
})


// const submit = () => { 
//   var form = document.getElementById("charsheet");
//   document.getElementById("your-id").addEventListener("click", function () {
//     console.log("hey look listen"+form)
//   form.submit();
// });
// }




// // Protective autosave feature
// window.onbeforeunload = function(){
//   if ($("[name='autosave']").prop("checked") == true) {
//     // $('#charsheet').attr('action', '/characters/<%= character._id %>?_method=PUT')
//     // $('#charsheet').attr('method', 'post')
//     // console.log("Saving changes, say thanks to Autosave!");
//     // $('#charsheet').submit()
//     return 'You have unsaved changes!';
//   }
// }



function long_rest()
{
  console.log("Taking long rest...")
  /*
   *  To do on a long rest:
   * 
   *  x Reset hit points to max HP
   *  x Reset hit dice to max hit dice
   *  x Reset all spell slots available to max
   *  x Reset all death saves
   *  x Remind player to reset temp HP and limited use features and items
   *  
   */


  $("[name='currenthp']").val($("[name='maxhp']").val())
  $("[name='remaininghd']").val($("[name='totalhd']").val())
  $("[name='deathsuccess1']").prop("checked", false);
  $("[name='deathsuccess2']").prop("checked", false);
  $("[name='deathsuccess3']").prop("checked", false);
  $("[name='deathfail1']").prop("checked", false);
  $("[name='deathfail2']").prop("checked", false);
  $("[name='deathfail3']").prop("checked", false);

  alert("Hit points and hit dice refreshed.\n\nPlease remember to reset temporary hit points, and other effects as needed.")
}

 

