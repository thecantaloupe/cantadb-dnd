$('.stat').bind('input', function()
    {
      var inputName = $(this).attr('name')
      var mod = parseInt($(this).val()) - 10
      
      if (mod % 2 == 0)
        mod = mod / 2
      else
        mod = (mod - 1) / 2
  
      if (isNaN(mod))
        mod = ""
      else if (mod >= 0)
        mod = "+" + mod
  
      var scoreName = inputName.slice(0, inputName.indexOf("score"))
      var modName = scoreName + "mod"
      
      $("[name='" + modName + "']").val(mod)
    })

$('.statmod').bind('change', function()
{
  var name = $(this).attr('name')
  name = "uses" + name.slice(0, name.indexOf('mod'))
  
})

$("[name='classlevel']").bind('input', function()
  {
    var classes = $(this).val()
    var r = new RegExp(/\d+/g)
    var total = 0
    var result
    while ((result = r.exec(classes)) != null)
    {
      var lvl = parseInt(result)
      if (!isNaN(lvl))
        total += lvl
    }
    var prof = 2
    if (total > 0)
    {
      total -= 1
      prof += Math.trunc(total/4)
      prof = "+" + prof
    }
    else
    {
      prof = ""    
    }
    $("[name='proficiencybonus']").val(prof)
  })

function totalhd_clicked()
{
  $("[name='remaininghd']").val($("[name='totalhd']").val())
}

const submit = () => { 
  var form = document.getElementById("charsheet");
  document.getElementById("your-id").addEventListener("click", function () {
    console.log("hey look listen"+form)
  form.submit();
});
}


function save_character()
{
  console.log("Saving character...")

  var filename = ".dnd";
  if (document.getElementById('charname').value == "") {
    filename = "CharacterSheet" + filename;
  } else {
    filename = document.getElementById('charname').value + filename;
  }

  // Prepare form data for JSON format
  const formId = "charsheet";
  var url = location.href;
  const formIdentifier = `${url} ${formId}`;
  let form = document.querySelector(`#${formId}`);
  let formElements = form.elements;

  let data = { [formIdentifier]: {} };
  for (const element of formElements) {
    if (element.name.length > 0) {
      if (element.type == 'checkbox') {
        var checked = ($("[name='" + element.name + "']").prop("checked") ? 'checked' : 'unchecked');
        data[formIdentifier][element.name] = checked;
      } else {
        data[formIdentifier][element.name] = element.value;
      }
    }
  }
  data = JSON.stringify(data[formIdentifier], null, 2)
  type = 'application/json'

  // Save JSON to file
  var file = new Blob([data], {type: type});
  if (window.navigator.msSaveOrOpenBlob) // IE10+
      window.navigator.msSaveOrOpenBlob(file, filename);
  else { // Others
      var a = document.createElement("a"),
              url = URL.createObjectURL(file);
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      setTimeout(function() {
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);  
      }, 0); 
  }
}

// Protective autosave feature
window.onbeforeunload = function(){
  if ($("[name='autosave']").prop("checked") == true) {
    save_character();
  }
}

// Functions for reading character from disk
function load_character(e) {

  // Autosave character
  if ($("[name='autosave']").prop("checked") == true) {
    save_character();
  }

  // Load character
  var file = e.target.files[0];
  if (!file) {
    return;
  }
  var reader = new FileReader();
  reader.onload = function(e) {
    var contents = e.target.result;

    // Set size of dynamic tables
    var savedData = JSON.parse(contents);
    
    // Prepare form data for JSON format
    const formId = "charsheet";
    var url = location.href;
    const formIdentifier = `${url} ${formId}`;
    let form = document.querySelector(`#${formId}`);
    let formElements = form.elements;

    // Display file content
    savedData = JSON.parse(contents); // get and parse the saved data from localStorage
    for (const element of formElements) {
      if (element.name in savedData) {
        if (element.type == 'checkbox') {
          var checked = (savedData[element.name] == 'checked');
          $("[name='" + element.name + "']").prop("checked", checked)
        } else {
          element.value = savedData[element.name]; 
        }
      }
    }
  };
  reader.readAsText(file);
}
document.getElementById('buttonload').addEventListener('change', load_character, false);

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

  $("[name='spellslots1']").val($("[name='spellslotsmax1']").val())
  $("[name='spellslots2']").val($("[name='spellslotsmax2']").val())
  $("[name='spellslots3']").val($("[name='spellslotsmax3']").val())
  $("[name='spellslots4']").val($("[name='spellslotsmax4']").val())
  $("[name='spellslots5']").val($("[name='spellslotsmax5']").val())
  $("[name='spellslots6']").val($("[name='spellslotsmax6']").val())
  $("[name='spellslots7']").val($("[name='spellslotsmax7']").val())
  $("[name='spellslots8']").val($("[name='spellslotsmax8']").val())
  $("[name='spellslots9']").val($("[name='spellslotsmax9']").val())
  $("[name='pactslots1']").val($("[name='pactslotsmax1']").val())

  $("[name='deathsuccess1']").prop("checked", false);
  $("[name='deathsuccess2']").prop("checked", false);
  $("[name='deathsuccess3']").prop("checked", false);
  $("[name='deathfail1']").prop("checked", false);
  $("[name='deathfail2']").prop("checked", false);
  $("[name='deathfail3']").prop("checked", false);

  alert("Hit points, hit dice, and spell slots have been refreshed.\n\nPlease remember to reset Limited Use abilities, temporary hit points, and other effects as needed.")
}

 

