// หมวดหมู่ที่สามารถเลือกได้
const categories = [
  { name: "Theater", icon: "fas fa-theater-masks" },
  { name: "Charity", icon: "fas fa-gift" },
  { name: "Concert", icon: "fas fa-music" },
  { name: "Market", icon: "fas fa-shopping-basket" },
  { name: "Sports", icon: "fas fa-futbol" },
  { name: "Education", icon: "fas fa-book"}
];

// ข้อมูลกิจกรรม
const events = [
  {
    name: "The First Stage Talent",
    category: "Theater",
    image:  "assets/imgs/firststage.jpg",
    time: "17.00",
    date: "20 January 2025",
    location: "ลาน NU Playground",
    details: "โชว์เล่นรูบิคสนุกๆ นั่งชิวๆ ฟังเพลง Folksong ร้านอาหารกว่า 80 ร้านค้า",
    ticketPrice: "Free",
    detailsPage: "activity.html",
  },
  {
    name: "NU Identity Festival X Freshmen Night 2024",
    category: "Theater",
    image: "assets/imgs/identity.jpg",
    time: "8:00",
    date: "20 February 2025",
    location: "KNECC",
    details: "แสดงแสงสีเสียงพระราชประวัติฯ และเต้นประกอบเพลง",
    ticketPrice: "Free",
    detailsPage: "activity.html",
  },
  {
    name: "พิธีทำบุญช่วงเทศกาลปีใหม่ ประจำปี 2568",
    category: "Charity",
    image: "assets/imgs/newyearcsit.jpg",
    time: "10.00",
    date: "23 January 2025",
    location: "โถงอาคารภาควิชาคณิตศาสตร์",
    details: "ตักบาตรข้าวสารอาหารแห้งแด่พระสงฆ์ จำนวน 9 รูป",
    ticketPrice: "Free",
    detailsPage: "activity.html",
  },
  {
    name: "จัดพิธีทำบุญตักบาตรวันขึ้นปีใหม่ 2568",
    category: "Charity",
    image: "assets/imgs/newyearnu.jpg",
    time: "19:00",
    date: "6 January 2025",
    location: "อาคารสำนักงานอธิการบดี ",
    details: "ทำบุญตักบาตรข้าวสารอาหารแห้งถวายแด่พระภิกษุสงฆ์และสามเณร",
    ticketPrice: "Free",
    detailsPage: "activity.html",
  },
  {
    name: "โครงการมหกรรมศึกษาศาสตร์ EDU Festival 2025",
    category: "Concert",
    image: "assets/imgs/edufes.jpg",
    time: "19:00",
    date: "17 January 2025",
    location: "บริเวณลานจอดรถคณะศึกษาศาสตร์",
    details: "EDU Festival 2025 ตอน  งานมหกรรมสุดยิ่งใหญ่ใจกลางคณะศึกษาศาสตร์",
    ticketPrice: "free",
    detailsPage: "activity.html",
  },
  {
    name: "The First Stage Talent",
    category: "Concert",
    image: "assets/imgs/firststage.jpg",
    time: "17.00",
    date: "20 January 2025",
    location: "ลาน NU Playground",
    details: "โชว์เล่นรูบิคสนุกๆ นั่งชิวๆ ฟังเพลง Folksong ร้านอาหารกว่า 80 ร้านค้า",
    ticketPrice: "Free",
    detailsPage: "activity.html",
  },
  {
    name: "ศิลป์เสมอคร้้งที่ 5",
    category: "Market",
    image: "assets/imgs/artyoung.jpg",
    time: "17.00",
    date: "23 January 2025",
    location: "ศิลป์ศาลา มหาวิทยาลัยนเรศวร",
    details: "เชิญร่วมสนุกรับชมศิลปะ ดนตรีและสินค้าทำมือโดยนิสิตสาขาทัศนศิลป์ ",
    ticketPrice: "Free",
    detailsPage: "activity.html",
  },
  {
    name: "The First Stage Talent",
    category: "Market",
    image: "assets/imgs/firststage.jpg",
    time: "17.00",
    date: "20 January 2025",
    location: "ลาน NU Playground",
    details: "โชว์เล่นรูบิคสนุกๆ นั่งชิวๆ ฟังเพลง Folksong เพราะๆ ร้านอาหารกว่า 80 ร้านค้า",
    ticketPrice: "Free",
    detailsPage: "activity.html",
  },
  {
    name: "SMST MEDRathon l วิ่งกับหมอ ครั้งที่ 4",
    category: "Sports",
    image: "assets/imgs/smst.jpg",
    time: "8.00",
    date: "2 March 2025",
    location: "อ.เมือง จ.พิษณุโลก",
    details: "โครงการวิ่งกับหมอ ครั้งที่ 4 โดยสหพันธ์นิสิตนักศึกษาแพทย์แห่งประเทศไทย ”",
    ticketPrice: "550 Baht",
    detailsPage: "activity.html",
  },
  {
    name: "Sci-tech 2024",
    category: "Sports",
    image: "assets/imgs/sci-tech.jpg",
    time: "8.00",
    date: "18 January 2025",
    location: "มหาวิทยาลัยนเรศวร",
    details: "โครงการกีฬาเชื่อมความสัมพันธ์กลุ่มคณะวิทยาศาสตร์ และเทคโนโลยี 2567",
    ticketPrice: "Free",
    detailsPage: "activity.html",
  },
  {
    name: "Open House Faculty of Science Naresuan University",
    category: "Education",
    image: "assets/imgs/sci-open.jpg",
    time: "9.00",
    date: "26 January 2025",
    location: "มหาวิทยาลัยนเรศวร",
    details: "ผู้เข้าร่วมกิจกรรมจะได้ความรู้เกี่ยวกับคณะวิทยาศาสตร์ในแต่ละสาขา",
    ticketPrice: "Free",
    detailsPage: "activity.html",
  },
  {
    name: "NU-Logistics Open House 2025",
    category: "Education",
    image: "assets/imgs/logis-open.jpg",
    time: "9.00",
    date: "26 January 2025",
    location: "มหาวิทยาลัยนเรศวร",
    details: "ได้ความรู้เกี่ยวกับการเรียนการสอนในสาขาวิชาโลจิสติกส์",
    ticketPrice: "Free",
    detailsPage: "activity.html",
  },

];

// ฟังก์ชันสำหรับการเลื่อนหมวดหมู่
function scrollFaculties(direction) {
  const container = document.getElementById("categoriesContainer");
  const scrollAmount = container.offsetWidth / 3;  // เลื่อนแต่ละครั้งที่ 1/3 ของความกว้าง

  container.scrollBy({
    left: direction * scrollAmount,  // ขยับไปทางซ้ายหรือขวาตาม direction
    behavior: "smooth",  // การเลื่อนจะเป็นไปอย่างนุ่มนวล
  });
}

// ฟังก์ชันสร้างหมวดหมู่
function createCategoriesBlocks() {
  const container = document.getElementById("categoriesContainer");
  categories.forEach(category => {
    const block = document.createElement("div");
    block.classList.add("categories-block");
    block.setAttribute("onclick", "selectCategory(this)");

    block.innerHTML = `
      <i class="${category.icon}"></i>
      <p>${category.name}</p>
    `;

    container.appendChild(block);
  });
}

// ฟังก์ชันสำหรับการเลื่อนกิจกรรม
function scrollEvents(direction) {
  const container = document.querySelector(".event-card-container");
  const scrollAmount = container.offsetWidth / 3;

  container.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth",
  });
}

// ฟังก์ชันกรองกิจกรรมตามหมวดหมู่ที่เลือก
function filterEventsByCategory(selectedCategory) {
  const eventContainer = document.querySelector(".event-card-container");
  eventContainer.innerHTML = ""; // ลบการ์ดกิจกรรมเก่าออก
  events.forEach(event => {
    if (!event.ticketPrice || event.ticketPrice.trim() === "") {
      console.warn(`Missing ticketPrice for event: ${event.name}`);
    }
  });
  

  let filteredEvents;

  // กรองกิจกรรมตามหมวดหมู่
  if (selectedCategory === "Random") {
    filteredEvents = getRandomEvents(); // แสดงกิจกรรมสุ่ม 2 รายการ
  } else {
    filteredEvents = events.filter(event => event.category === selectedCategory); // กรองกิจกรรมตามหมวดหมู่ที่เลือก
  }

  // แสดงกิจกรรมที่กรองออกมา
  filteredEvents.forEach(event => {
    const eventCard = document.createElement("div");
    eventCard.classList.add("event-card");
    eventCard.innerHTML = `
    <div class="event-card-image" style="background-image: url('${event.image}');"></div>
    <div class="event-card-content">
      <h3>${event.name}</h3>
      <p><i class="fas fa-clock"></i> ${event.time}</p>
      <p><i class="fas fa-calendar-alt"></i> ${event.date}</p>
      <p><i class="fas fa-map-marker-alt"></i> ${event.location}</p>
      <p class="event-location-details">${event.details}</p>
      <div class="event-card-footer">
        <span><i class="fas fa-ticket-alt"></i> ${event.ticketPrice}</span>
        <a href="${event.detailsPage}" class="event-detail-btn">Detail</a>
        <div class="event-star-button" onclick="toggleStar(this)">
          <i class="fas fa-star"></i>
        </div>
      </div>
    </div>
`;
    eventContainer.appendChild(eventCard);
  });

  // ถ้ามีกิจกรรมมากกว่า 2 รายการ, ให้แสดงปุ่มเลื่อน
  if (filteredEvents.length > 2) {
    document.querySelector(".scroll-btn.left").style.display = "block";
    document.querySelector(".scroll-btn.right").style.display = "block";
  } else {
    // ซ่อนปุ่มเลื่อนหากจำนวนกิจกรรมไม่ถึง 2
    document.querySelector(".scroll-btn.left").style.display = "none";
    document.querySelector(".scroll-btn.right").style.display = "none";
  }
}

// ฟังก์ชันสำหรับการสุ่มกิจกรรม 2 รายการ
function getRandomEvents() {
  const randomEvents = [];
  // สุ่มเลือกกิจกรรม 2 รายการ
  const shuffledEvents = events.sort(() => 0.5 - Math.random());
  for (let i = 0; i < 2; i++) {  // แสดงแค่ 2 กิจกรรมสุ่ม
    randomEvents.push(shuffledEvents[i]);
  }
  return randomEvents;
}

// ฟังก์ชันเลือกหมวดหมู่
function selectCategory(selectedBlock) {
  const blocks = document.querySelectorAll(".categories-block");
  blocks.forEach(block => block.classList.remove("selected"));
  selectedBlock.classList.add("selected");

  const selectedCategory = selectedBlock.querySelector("p").textContent;
  filterEventsByCategory(selectedCategory); // กรองกิจกรรมตามหมวดหมู่ที่เลือก
}

// ฟังก์ชันสำหรับการกดดาว
function toggleStar(starElement) {
  const icon = starElement.querySelector("i");
  icon.classList.toggle("fas"); // เปลี่ยนจากดาวขาวเป็นดาวทอง
  icon.classList.toggle("far"); // เปลี่ยนจากดาวทองเป็นดาวขาว
}

// เรียกฟังก์ชันเมื่อหน้าโหลดเสร็จ
window.onload = function () {
  createCategoriesBlocks();
  filterEventsByCategory("Random"); // เริ่มต้นแสดงกิจกรรมสุ่ม 2 รายการ
};
