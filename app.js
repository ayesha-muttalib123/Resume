// Get references to the button and skills list
var toggleButton = document.getElementById('buttonskills');
var skillList = document.getElementById('skills');
// Function to toggle skill visibility
function toggleSkills() {
    if (skillList.classList.contains('hidden')) {
        skillList.classList.remove('hidden'); // Show the skills
        toggleButton.textContent = 'Hide Skills'; // Change button text
        toggleButton.setAttribute('aria-expanded', 'true'); // Update accessibility attribute
    }
    else {
        skillList.classList.add('hidden'); // Hide the skills
        toggleButton.textContent = 'Show Skills'; // Change button text
        toggleButton.setAttribute('aria-expanded', 'false'); // Update accessibility attribute
    }
}
// Add an event listener to the button
toggleButton.addEventListener('click', toggleSkills);
