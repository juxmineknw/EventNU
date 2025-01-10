/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

let cardToDelete = null; // Variable to store the reference to the card to delete
const popupOverlay = document.getElementById('confirmationPopup');
const confirmDeleteButton = document.querySelector('.confirm-delete');
const cancelDeleteButton = document.querySelector('.cancel-delete');

// Function to handle "Delete" button click
function confirmDelete(button) {
    cardToDelete = button.closest('.event-card'); // Get the card to delete
    popupOverlay.style.display = 'block'; // Show the confirmation pop-up
}

// Confirm delete action
confirmDeleteButton.addEventListener('click', function () {
    if (cardToDelete) {
        cardToDelete.remove(); // Remove the card
        cardToDelete = null; // Clear reference
    }
    popupOverlay.style.display = 'none'; // Hide the pop-up
});

// Cancel delete action
cancelDeleteButton.addEventListener('click', function () {
    cardToDelete = null; // Clear reference
    popupOverlay.style.display = 'none'; // Hide the pop-up
});