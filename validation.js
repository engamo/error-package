export function showError(element, errorMessage){
  const errorContainer = element.parentNode.querySelector("small");
  errorContainer.innerText = errorMessage;
  return false;
}

export function validatePassword(element) {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
  const password = element.value.trim();
  const errorContainer = element.parentNode.querySelector("small");

  if (!passwordRegex.test(password)) {
    const errorMessage = "Password must contain at least one letter, one digit, and be at least 8 characters long.";
    errorContainer.innerText = errorMessage;
    element.classList.add("error-border"); 
    return false;
  } else {
    errorContainer.innerText = ""; 
    element.classList.remove("error-border"); 
    return true;
  }
}