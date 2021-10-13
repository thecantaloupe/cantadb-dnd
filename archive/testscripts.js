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

  