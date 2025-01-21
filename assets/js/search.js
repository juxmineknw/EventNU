function showPopup() {
    document.getElementById('searchPopup').style.display = 'flex';
}

function hidePopup() {
    document.getElementById('searchPopup').style.display = 'none';
}
// datepicker.js
document.addEventListener("DOMContentLoaded", function () {
    flatpickr("#birthday", {
        dateFormat: "d/m/Y",  // รูปแบบวันที่ DD/MM/YYYY
        allowInput: false,     // ปิดการพิมพ์วันที่เอง
        clickOpens: true,      // คลิกที่ช่อง input เพื่อเปิดปฏิทิน
        theme: "material_blue",
    });
});
function cancelOrder(button) {
    // แสดงข้อความแจ้งเตือน
    alert('Cancelled successfully.');

    // ลบ parent div ของปุ่มที่กด
    const ticketCard = button.closest('.ticket-card');
    if (ticketCard) {
        ticketCard.remove();
    }

    // ตรวจสอบว่ามี ticket-card เหลืออยู่หรือไม่
    const remainingTickets = document.querySelectorAll('.ticket-card');
    const emptyState = document.querySelector('.empty-state');

    if (remainingTickets.length === 0) {
        // ถ้าไม่มี ticket-card ให้แสดง empty state
        emptyState.style.display = 'block';
    }
}
function goBack() {
    window.history.back(); // ฟังก์ชันสำหรับย้อนกลับไปยังหน้าก่อนหน้า
}
function openDropdown() {
    const selectElement = document.getElementById('gender');
    selectElement.focus(); // ให้ <select> ได้รับโฟกัส
    selectElement.click(); // เปิด dropdown ของ <select>
}

function goToDetail1() {
    // ปิด popup
    const popup = document.querySelector('.searchhome-popup-body');
    if (popup) {
      popup.style.display = 'none'; // ซ่อน popup
    }
    // นำผู้ใช้ไปยังหน้า detail.html
    window.location.href = 'activity1.html';
  }
  
function goToDetail2() {
    // ปิด popup
    const popup = document.querySelector('.searchhome-popup-body');
    if (popup) {
      popup.style.display = 'none'; // ซ่อน popup
    }
    // นำผู้ใช้ไปยังหน้า detail.html
    window.location.href = 'activity2.html';
  }

function goToDetail3() {
    // ปิด popup
    const popup = document.querySelector('.searchhome-popup-body');
    if (popup) {
      popup.style.display = 'none'; // ซ่อน popup
    }
    // นำผู้ใช้ไปยังหน้า detail.html
    window.location.href = 'activity3.html';
  }

function goToDetail4() {
    // ปิด popup
    const popup = document.querySelector('.searchhome-popup-body');
    if (popup) {
      popup.style.display = 'none'; // ซ่อน popup
    }
    // นำผู้ใช้ไปยังหน้า detail.html
    window.location.href = 'activity4.html';
  }
  document.addEventListener("DOMContentLoaded", function () {
    const editButton = document.querySelector(".setting-edit-btn");
    const bioTextarea = document.querySelector(".setting-bio-textarea");
    const genderSelect = document.querySelector("#gender");
    const birthdayInput = document.querySelector("#birthday");
    const privacyFields = document.querySelectorAll(".setting-password-field");
    const privacySection = document.querySelector(".setting-privacy-section");

    let isEditing = false; // สถานะว่ากำลังแก้ไขหรือไม่

    // ปิดการแก้ไขโดยดีฟอลต์
    bioTextarea.disabled = true;
    genderSelect.disabled = true;
    birthdayInput.disabled = true;
    privacyFields.forEach(field => field.disabled = true);
    privacySection.style.display = "none"; // ซ่อนส่วน Privacy

    editButton.addEventListener("click", function () {
        if (!isEditing) {
            // กดปุ่ม Edit: เปิดการแก้ไข
            bioTextarea.disabled = false;
            genderSelect.disabled = false;
            birthdayInput.disabled = false;
            privacyFields.forEach(field => field.disabled = false);
            privacySection.style.display = "block"; // แสดงส่วน Privacy

            editButton.innerHTML = `<i class="fas fa-check"></i> Confirm`; // เปลี่ยนปุ่มเป็น Confirm
            isEditing = true;
        } else {
            // กดปุ่ม Confirm: ปิดการแก้ไข
            bioTextarea.disabled = true;
            genderSelect.disabled = true;
            birthdayInput.disabled = true;
            privacyFields.forEach(field => field.disabled = true);
            privacySection.style.display = "none"; // ซ่อนส่วน Privacy

            editButton.innerHTML = `<i class="fas fa-edit"></i> Edit`; // เปลี่ยนปุ่มกลับเป็น Edit
            isEditing = false;

            // เพิ่มโค้ดส่งข้อมูลที่แก้ไขไปยังเซิร์ฟเวอร์ที่นี่ (ถ้าจำเป็น)
        }
    });
});