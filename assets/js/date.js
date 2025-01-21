document.addEventListener("DOMContentLoaded", () => {
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
    let currentYear = 2024;
    let currentMonth = 11; // December (0-indexed)
  
    const monthNameElement = document.querySelector(".month-name");
    const yearNumberElement = document.querySelector(".year-number");
    const calendarGrid = document.querySelector(".calendar-grid");
  
    function updateCalendar() {
      // อัปเดตชื่อเดือนและปี
      monthNameElement.textContent = monthNames[currentMonth];
      yearNumberElement.textContent = currentYear;
  
      // ล้างวันที่เก่า
      const oldDates = calendarGrid.querySelectorAll(".calendar-date");
      oldDates.forEach(date => date.remove());
  
      // คำนวณวันในเดือน
      const firstDay = new Date(currentYear, currentMonth, 1).getDay();
      const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  
      // เพิ่มวันที่ที่ไม่ใช่ของเดือนนี้ (อินแอคทีฟ)
      for (let i = 0; i < firstDay; i++) {
        const emptyDate = document.createElement("div");
        emptyDate.classList.add("calendar-date", "date-inactive");
        calendarGrid.appendChild(emptyDate);
      }
  
      // เพิ่มวันที่ของเดือนนี้
      for (let day = 1; day <= daysInMonth; day++) {
        const dateButton = document.createElement("button");
        dateButton.classList.add("calendar-date");
        dateButton.textContent = day;
  
        // เพิ่มฟังก์ชันเลือกวันที่
        dateButton.addEventListener("click", () => {
          const selected = calendarGrid.querySelector(".selected");
          if (selected) selected.classList.remove("selected");
          dateButton.classList.add("selected");
        });
  
        calendarGrid.appendChild(dateButton);
      }
    }
  
    // ฟังก์ชันเปลี่ยนเดือน
    document.getElementById("prev-month").addEventListener("click", () => {
      currentMonth--;
      if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
      }
      updateCalendar();
    });
  
    document.getElementById("next-month").addEventListener("click", () => {
      currentMonth++;
      if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
      }
      updateCalendar();
    });
  
    // อัปเดตปฏิทินเมื่อโหลดหน้า
    updateCalendar();
  });

  