// รายชื่อคณะและไอคอน
const faculties = [
    { name: "Engineering", icon: "fas fa-building" },
    { name: "Business", icon: "fas fa-briefcase" },
    { name: "Arts", icon: "fas fa-paint-brush" },
    { name: "Medicine", icon: "fas fa-heart" },
    { name: "Science", icon: "fas fa-flask" },
    { name: "Law", icon: "fas fa-balance-scale" },
    { name: "Education", icon: "fas fa-chalkboard-teacher" },
    { name: "Agriculture", icon: "fas fa-seedling" },
    { name: "Pharmacy", icon: "fas fa-pills" },
    { name: "Veterinary", icon: "fas fa-dog" },
    { name: "Architecture", icon: "fas fa-drafting-compass" },
    { name: "Nursing", icon: "fas fa-user-nurse" },
    { name: "Public Health", icon: "fas fa-heartbeat" },
    { name: "Humanities", icon: "fas fa-book" },
    { name: "Social Science", icon: "fas fa-users" },
    { name: "Computer Science", icon: "fas fa-desktop" },
    { name: "Fine Arts", icon: "fas fa-palette" },
    { name: "Tourism", icon: "fas fa-plane" },
  ];
  
  // สร้างบล็อกคณะ
  function createFacultyBlocks() {
    const container = document.getElementById("facultyContainer");
    faculties.forEach(faculty => {
      const block = document.createElement("div");
      block.classList.add("faculty-block");
      block.setAttribute("onclick", "selectFaculty(this)");
  
      block.innerHTML = `
        <i class="${faculty.icon}"></i>
        <p>${faculty.name}</p>
      `;
  
      container.appendChild(block);
    });
  }
  
  // เลือกคณะ
  function selectFaculty(selectedBlock) {
    const blocks = document.querySelectorAll(".faculty-block");
    blocks.forEach(block => block.classList.remove("selected"));
  
    selectedBlock.classList.add("selected");
  }
  
  // เลื่อนบล็อกคณะ
  function scrollFaculties(direction) {
    const container = document.getElementById("facultyContainer");
    const scrollAmount = container.offsetWidth / 3; // เลื่อนครั้งละ 1 บล็อก
    container.scrollBy({
      left: direction * scrollAmount,
      behavior: "smooth",
    });
  }
  
  // เรียกฟังก์ชันสร้างบล็อกเมื่อโหลดหน้า
  window.onload = createFacultyBlocks;
  