function showAlert() {
    alert("This will take you to a different website.");
  }

  function showPrompt() {
    prompt("how would you rate my website?");
  }

  function confirmAction() {
    let confirmAction = confirm("Are you sure you want to purchase this product?");
    if (confirmAction) {
      alert("item purchased succesfully");
    } else {
      alert("purchased cancelled");
    }
  }
  function showAlert2() {
    alert("Message Sent");
  }