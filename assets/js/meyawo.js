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
$(document).ready(function () {
    $(".navbar .nav-link").on('click', function (event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function () {
                window.location.hash = hash;
            });
        }
    });
});

// navbar toggle
$('#nav-toggle').click(function () {
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

// Setting
document.addEventListener("DOMContentLoaded", function () {
    const editButton = document.querySelector(".setting-edit-btn");
    const bioTextarea = document.querySelector(".setting-bio-textarea");
    const genderSelect = document.querySelector("#gender");
    const birthdayInput = document.querySelector("#birthday");
    const privacySection = document.querySelector(".setting-privacy-section");

    let isEditing = false; // สถานะว่ากำลังแก้ไขหรือไม่

    editButton.addEventListener("click", function () {
        if (!isEditing) {
            // กดปุ่ม Edit: เปิดการแก้ไข
            bioTextarea.disabled = false;
            genderSelect.disabled = false;
            birthdayInput.disabled = false;

            // แสดงส่วน Privacy
            privacySection.style.display = "block";

            editButton.innerHTML = `<i class="fas fa-check"></i> Confirm`; // เปลี่ยนปุ่มเป็น Confirm
            isEditing = true;
        } else {
            // กดปุ่ม Confirm: ปิดการแก้ไข
            bioTextarea.disabled = true;
            genderSelect.disabled = true;
            birthdayInput.disabled = true;

            // ซ่อนส่วน Privacy
            privacySection.style.display = "none";

            editButton.innerHTML = `<i class="fas fa-edit"></i> Edit`; // เปลี่ยนปุ่มกลับเป็น Edit
            isEditing = false;
        }
    });

    // ซ่อนส่วน Privacy โดยดีฟอลต์
    privacySection.style.display = "none";
});


function shareEvent() {
    alert('Share event clicked!');
    const link = "";
    
}

function copyLink() {
    const link = "https://juxmineknw.github.io/EventNU/";
    navigator.clipboard.writeText(link).then(() => {
        alert('Link copied to clipboard!');
    }).catch(err => {
        alert('Failed to copy link: ' + err);
    });
}

function toggleFavorite() {
    const starIcon = document.getElementById('star-icon');
    if (starIcon.classList.contains('fas')) {
        starIcon.classList.remove('fas');
        starIcon.classList.add('far'); // เปลี่ยนเป็นดาวกลวง
        alert('Removed from favorites!');
    } else {
        starIcon.classList.remove('far');
        starIcon.classList.add('fas'); // เปลี่ยนเป็นดาวเต็ม
        alert('Added to favorites!');
    }
}

