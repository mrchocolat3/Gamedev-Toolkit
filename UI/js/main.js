const {dialog} = require("electron").remote
const path = require('path')
const fs = require('fs')
const run_command = require("./js/__main__").run_command
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const saveDialog = () => {
  
}

function importNote(){
  var filename
  dialog.showOpenDialog({
    buttonLabel: "Open",  
    message: "Open a note",
    filters: [
      {name: 'Text documents', extensions: ['txt'] },
      {name: 'Markdown documents', extensions: ['md'] },
      {name: "All files", extensions:['*']}
    ],
    properties: ['openFile', 'multiSelections']
  }).then(result => {
    filename = result.filePaths[0]
    if(filename === undefined){
      alert("Sorry there some internal error openning the file")
      return ""
    }else{
      var x = document.getElementById("notes");
      var f = document.getElementById("note-file");
      fs.readFile(filename, (err, data) => { 
        if (err) {
          alert('an error ocurred while importing file ' + err.message);
          return
        }
        x.innerHTML += data 
        var n = path.parse(filename).base;
        f.setAttribute('placeholder', "File: "+ n);
        document.getElementById("file-path").setAttribute("placeholder", filename)
      }) 
    }
  })
   
    // // EMPTY THE Textarea First 
    // for(var i = 0; i<m.length - 1; i++){
    //   x.innerHTML += m[i];
    // }
    // console.log(`slected ${n}`)
  
}

function saveNote(){
  var file_path = document.getElementById("file-path").getAttribute("placeholder");
  var file_name = path.parse(file_path).base;
  var f = document.getElementById("note-file");
  var content = document.getElementById("notes").value;

  if(!file_path){
    alert("You must either create a new file or import a file before saving!");
  }else{
    fs.truncate(file_path, 0, function(err){
      if (err) alert(err)
      fs.writeFile(file_path, content, function (err) {
        if (err) throw err;
        f.setAttribute("placeholder", "File Saved Succesfully | " + file_name);
        document.getElementById("saveNoteBtn").setAttribute("class", "area-btn btn btn-success m-t-15 hvr-grow-shadow")
        sleep(2500).then(() => {
          f.setAttribute("placeholder", "File: " + file_name); 
          document.getElementById("saveNoteBtn").setAttribute("class", "area-btn btn btn-info m-t-15 hvr-grow-shadow")
        })
      })
    })
  }
}

function createNote(){
  var filename
  dialog.showSaveDialog({
    buttonLabel: "Create",  
    message: "Create a new note",
    filters: [
      {name: 'Text documents', extensions: ['txt'] },
      {name: 'Markdown documents', extensions: ['md'] },
      {name: "All files", extensions:['*']}
    ],
    properties: ['openFile', 'multiSelections']
  }).then(result => {
    filename = result.filePath 
    if(filename === undefined){
      alert("Sorry there some internal error creating or saving the file")
      return ""
    }else{
      fs.writeFile(filename, "", (err) => {
        if (err) {
          alert('an error ocurred with file creation ' + err.message);
          return
        }
        var file_name = path.parse(filename).base;
        document.getElementById("file-path").setAttribute("placeholder", filename);
        document.getElementById("note-file").setAttribute("placeholder", "File: "+file_name);  
      })
    }
  })
}

function browse(link){
  var cmd = ["-b", link]
  var message = run_command(cmd)
    if(message.startsWith(">error_running_script") && message != undefined) throw console.error("error_from_python: " + message.replace(">error_running_script", ""));
}

// function getApps(){
//   var cmd = "-g-app --ls";
//   client.invoke("run_command", cmd , (err, message) => {
//     if(err) throw 'RPC Error: ' + err
//       if(message.startsWith(">error_running_script")) throw console.error("error_from_python: " + message.replace(">error_running_script", ""));
//       var apps = eval(message)
//       var cards = document.getElementById('LauncherCol');
//       for (var i = 0; i < apps.length; i++){
//         cards.innerHTML +=  `<div class="card bgwhite hvr-grow-shadow animated fadeInRight">
//           <div class="card-body">
//             <h4 class="card-title"> ${apps[i]} </h4>
//             <button type="button"class="btn btn-success hrv-grow-shadow" onclick="launchApp('${apps[i]}')"> Launch </button>
//           </div>
//         </div>`;
//       }
//   })
// }