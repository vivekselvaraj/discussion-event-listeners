let instructionButton = document.getElementById("instruction_button");
instructionButton.addEventListener("click", function() {
    let instructions = document.querySelectorAll(".question");
    instructions.forEach((element) => {
        element.classList.toggle("hidden");
    });
    if (this.textContent.includes("Show")) {
        this.textContent = "Hide Instructions";
    } else {
        this.textContent = "Show Instructions";
    }
});



let filePicker = document.getElementById("profile_pic");
filePicker.addEventListener("change", () => {
    if (filePicker.files.length == 1) {
      console.log("File selected: ", filePicker.files[0]);
      let size = filePicker.files[0].size;
      if (size > 100 * 1024) {
        alert("Size is greater than 100KB");
      }
    }
  });


  